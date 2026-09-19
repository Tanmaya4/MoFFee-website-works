/**
 * Build-time SEO for the MoFFee SPA.
 *
 * For every route in PAGES (src/seo/site.ts) it writes a static HTML file
 * (dist/<route>/index.html) containing that page's title, meta description,
 * canonical, Open Graph/X tags, JSON-LD and a text snapshot of the page. It also:
 *  - inlines the (single, small) CSS bundle so it is no longer render-blocking,
 *  - modulepreloads each route's lazy chunk to avoid a request waterfall,
 *  - generates sitemap.xml and llms.txt from the same data,
 *  - adds Vercel Web Analytics on Vercel builds.
 *
 * In dev the same head/snapshot is injected per URL, so `npm run dev` matches production.
 */
import fs from "node:fs";
import path from "node:path";
import type { OutputBundle, OutputChunk } from "rollup";
import type { Plugin, ResolvedConfig } from "vite";
import { PAGES, SITE_NAME, SITE_URL, SOCIAL_PROFILES, CONTACT_FORM_URL, PRODUCTS, absoluteUrl, type PageKey } from "../src/seo/site";
import { buildHeadTags } from "../src/seo/head";
import { FAQ } from "../src/content/faq";
import { jsonLdFor } from "./schema";
import { escapeHtml, snapshotFor } from "./snapshots";

const HEAD_MARKER = "<!--seo-head-->";
const BODY_MARKER = "<!--seo-body-->";

/** Lazy-loaded page module for each route (see App.tsx). */
const ROUTE_MODULES: Partial<Record<PageKey, string>> = {
  collections: "src/pages/Collections.tsx",
  moffee: "src/pages/MoffeeProduct.tsx",
  moffeeNc: "src/pages/MoffeeNCProduct.tsx",
  cart: "src/pages/Cart.tsx",
};

/** Images listed in the image sitemap, per route. */
const SITEMAP_IMAGES: Partial<Record<PageKey, string[]>> = {
  home: ["/images/kashayam.jpeg", "/og-image.jpg"],
  moffee: [PRODUCTS.moffee.image],
  moffeeNc: [PRODUCTS.moffeeNc.image],
};

// Hide the snapshot from JS users (React replaces it on mount); show it without JS.
const PRERENDER_STYLE =
  "<style>.seo-prerender{display:none}</style>" +
  "<noscript><style>.seo-prerender{display:block;max-width:46rem;margin:0 auto;padding:2.5rem 1.25rem;line-height:1.65}" +
  ".seo-prerender h1,.seo-prerender h2,.seo-prerender h3{font-family:'Playfair Display Variable',Georgia,serif;margin:1.5rem 0 .5rem;line-height:1.2}" +
  ".seo-prerender h1{font-size:2.5rem}.seo-prerender h2{font-size:1.75rem}.seo-prerender h3{font-size:1.25rem}" +
  ".seo-prerender p,.seo-prerender ul{margin:.5rem 0}.seo-prerender ul{list-style:disc;padding-left:1.25rem}" +
  ".seo-prerender a{text-decoration:underline}</style></noscript>";

const indexablePages = () =>
  (Object.keys(PAGES) as PageKey[]).filter((key) => !PAGES[key].noindex);

/** Routes that get their own HTML file (the 404 page is served by the SPA fallback). */
const prerenderedPages = () => (Object.keys(PAGES) as PageKey[]).filter((key) => key !== "notFound");

const pageForUrl = (url: string): PageKey => {
  const pathname = new URL(url, SITE_URL).pathname.replace(/\/+$/, "") || "/";
  return prerenderedPages().find((key) => PAGES[key].path === pathname) ?? "home";
};

const attrs = (record: Record<string, string>) =>
  Object.entries(record)
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(" ");

function renderHead(key: PageKey, extraTags: string[]): string {
  const page = PAGES[key];
  // Escape "<" so no string inside the JSON can close the <script> element.
  const jsonLd = JSON.stringify(jsonLdFor(key)).replace(/</g, "\\u003c");
  return [
    `<title>${escapeHtml(page.title)}</title>`,
    // data-rh lets react-helmet-async adopt these tags instead of duplicating them.
    ...buildHeadTags(page).map(({ tag, attrs: a }) => `<${tag} data-rh="true" ${attrs(a)} />`),
    `<script type="application/ld+json">${jsonLd}</script>`,
    PRERENDER_STYLE,
    ...extraTags,
  ].join("\n    ");
}

function renderPage(template: string, key: PageKey, extraTags: string[] = []): string {
  if (!template.includes(HEAD_MARKER) || !template.includes(BODY_MARKER)) {
    throw new Error(`[moffee-seo] index.html must contain ${HEAD_MARKER} and ${BODY_MARKER}`);
  }
  return template.replace(HEAD_MARKER, renderHead(key, extraTags)).replace(BODY_MARKER, snapshotFor(key));
}

/** Replace <link rel="stylesheet"> tags for bundled CSS with inline <style> blocks. */
function inlineCss(html: string, bundle: OutputBundle): string {
  return html.replace(/<link rel="stylesheet"[^>]*href="\/([^"]+\.css)"[^>]*>/g, (tag, file: string) => {
    const asset = bundle[file];
    if (!asset || asset.type !== "asset") return tag;
    return `<style>${String(asset.source)}</style>`;
  });
}

/** JS files to modulepreload for a lazy route: its chunk plus its not-yet-loaded imports. */
function routeChunkFiles(bundle: OutputBundle, moduleSuffix: string, alreadyLoaded: string): string[] {
  const chunks = Object.values(bundle).filter((o): o is OutputChunk => o.type === "chunk");
  const routeChunk = chunks.find((c) => c.facadeModuleId?.replace(/\\/g, "/").endsWith(moduleSuffix));
  if (!routeChunk) return [];
  const files = new Set<string>();
  const visit = (file: string) => {
    const chunk = bundle[file];
    if (files.has(file) || alreadyLoaded.includes(file) || !chunk || chunk.type !== "chunk" || chunk.isEntry) return;
    files.add(file);
    chunk.imports.forEach(visit);
  };
  visit(routeChunk.fileName);
  return [...files];
}

function buildSitemap(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = indexablePages().map((key) => {
    const images = (SITEMAP_IMAGES[key] ?? [])
      .map((src) => `\n    <image:image><image:loc>${absoluteUrl(src)}</image:loc></image:image>`)
      .join("");
    return `  <url>\n    <loc>${absoluteUrl(PAGES[key].path)}</loc>\n    <lastmod>${today}</lastmod>${images}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`;
}

/** https://llmstxt.org — a plain-markdown guide to the site for LLMs. */
function buildLlmsTxt(): string {
  const absoluteLinks = (text: string) => text.replace(/\]\((\/[^)]*)\)/g, (_, p: string) => `](${absoluteUrl(p)})`);
  const pages = indexablePages()
    .map((key) => `- [${PAGES[key].title}](${absoluteUrl(PAGES[key].path)}): ${PAGES[key].description}`)
    .join("\n");
  const products = Object.values(PRODUCTS)
    .map((p) => `- [${p.name}](${absoluteUrl(p.path)}): ${p.description} ${p.size} pouch, ₹${p.price}.`)
    .join("\n");
  const faq = FAQ.map((item) => `### ${item.question}\n\n${absoluteLinks(item.answer)}`).join("\n\n");
  return `# ${SITE_NAME}

> ${SITE_NAME} is a craft beverage brand from India that makes cold brew coffee and caffeine-free herbal beverages the traditional South Indian kashayam way: natural ingredients, slow-boiled in water to draw out their essence, homemade in pursuit of employability for women.

## Products

${products}

## Pages

${pages}

## Frequently asked questions

${faq}

## Contact

- Website: ${SITE_URL}/
- Instagram: ${SOCIAL_PROFILES.join(", ")}
- Contact form: ${CONTACT_FORM_URL}
`;
}

export function seoPlugin(): Plugin {
  let config: ResolvedConfig;
  let template = "";
  const routeTags = new Map<PageKey, string[]>();

  return {
    name: "moffee-seo",

    configResolved(resolved) {
      config = resolved;
    },

    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (config.command !== "build" || !ctx.bundle) {
          return renderPage(html, pageForUrl(ctx.originalUrl ?? ctx.path));
        }

        template = inlineCss(html, ctx.bundle);
        if (process.env.VERCEL) {
          // Vercel Web Analytics: first-party script, allowed by the existing CSP.
          // Enable it in the Vercel dashboard (Project → Analytics) or this 404s.
          template = template.replace(HEAD_MARKER, `${HEAD_MARKER}\n    <script defer src="/_vercel/insights/script.js"></script>`);
        }
        for (const [key, moduleSuffix] of Object.entries(ROUTE_MODULES) as Array<[PageKey, string]>) {
          const files = routeChunkFiles(ctx.bundle, moduleSuffix, template);
          routeTags.set(key, files.map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`));
        }
        return renderPage(template, "home");
      },
    },

    closeBundle() {
      if (config.command !== "build" || !template) return;
      const outDir = path.resolve(config.root, config.build.outDir);

      for (const key of prerenderedPages()) {
        if (key === "home") continue; // written by Vite as dist/index.html
        const file = path.join(outDir, PAGES[key].path, "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, renderPage(template, key, routeTags.get(key)));
      }
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemap());
      fs.writeFileSync(path.join(outDir, "llms.txt"), buildLlmsTxt());
    },
  };
}
