import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME, absoluteUrl, type PageMeta } from "./site";

export interface HeadTag {
  tag: "meta" | "link";
  attrs: Record<string, string>;
}

/**
 * The <head> tags for a page (everything except <title>).
 *
 * <SEO /> renders these through react-helmet-async, and seo/plugin.ts writes the
 * identical tags (marked data-rh="true") into each route's static HTML. Because the
 * two sets match, Helmet adopts the static tags on hydration instead of duplicating
 * them, which is what caused the audit's "duplicate canonical" warning.
 */
export function buildHeadTags(page: PageMeta): HeadTag[] {
  const url = absoluteUrl(page.path);
  const image = page.image ?? DEFAULT_OG_IMAGE;
  const imageUrl = absoluteUrl(image.path);
  const meta = (key: "name" | "property", id: string, content: string): HeadTag => ({
    tag: "meta",
    attrs: { [key]: id, content },
  });

  const tags: HeadTag[] = [meta("name", "description", page.description)];

  if (page.noindex) {
    tags.push(meta("name", "robots", "noindex, follow"));
  } else {
    tags.push({ tag: "link", attrs: { rel: "canonical", href: url } });
  }

  tags.push(
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:locale", SITE_LOCALE),
    meta("property", "og:type", page.type ?? "website"),
    ...(page.noindex ? [] : [meta("property", "og:url", url)]),
    meta("property", "og:title", page.title),
    meta("property", "og:description", page.description),
    meta("property", "og:image", imageUrl),
    meta("property", "og:image:width", String(image.width)),
    meta("property", "og:image:height", String(image.height)),
    meta("property", "og:image:alt", image.alt),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", page.title),
    meta("name", "twitter:description", page.description),
    meta("name", "twitter:image", imageUrl),
    meta("name", "twitter:image:alt", image.alt),
  );

  return tags;
}
