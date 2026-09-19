/**
 * Single source of truth for site-wide SEO data.
 *
 * Used in two places:
 *  - at runtime by <SEO /> (react-helmet-async) on every page, and
 *  - at build time by seo/plugin.ts, which writes the same tags into a static
 *    HTML file per route so crawlers, social previews and LLMs see them without JS.
 *
 * Keep this file free of browser/React imports; it is also loaded by vite.config.ts.
 * When you add a route in App.tsx, add it to PAGES here and to the rewrites in vercel.json.
 */

export const SITE_URL = "https://moffee.co.in";
export const SITE_NAME = "MoFFee";
export const SITE_LOCALE = "en_IN";
export const SITE_LANGUAGE = "en-IN";

export const DEFAULT_OG_IMAGE = {
  path: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "MoFFee cold brew pouch with the tagline Energy for the Grind",
};

/** Public profiles. Add Facebook, X, LinkedIn and YouTube URLs here as they are created. */
export const SOCIAL_PROFILES = ["https://www.instagram.com/moffee.coffee.ai/"];

export const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfe18BmkqWxAGFp_pFXbE7Ovsp47pHyuzZmGTngVtnX5C3qIw/viewform";

/** Keep prices in sync with PRODUCTS in src/pages/Cart.tsx. */
export const PRODUCTS = {
  moffee: {
    name: "MoFFee C",
    path: "/product/moffee",
    image: "/images/moffee-c-pouch.jpg",
    description:
      "A kashayam-inspired cold brew coffee made with organic cold brew coffee, filtered spring water, atimadhuram (mulethi) root and aromatic clove.",
    category: "Cold brew coffee",
    price: 40,
    size: "100 ml",
  },
  moffeeNc: {
    name: "MoFFee NC",
    path: "/product/moffee-nc",
    image: "/images/moffee-nc-pouch.jpg",
    description:
      "A caffeine-free Ayurvedic herbal cold brew made with a pure herbal root, filtered spring water, cardamom and clove aromatics, and tulsi leaf.",
    category: "Caffeine-free herbal beverage",
    price: 40,
    size: "100 ml",
  },
} as const;

export interface PageMeta {
  path: string;
  /** 50–60 characters is the sweet spot for search results. */
  title: string;
  /** 120–160 characters. */
  description: string;
  type?: "website" | "product";
  image?: { path: string; width: number; height: number; alt: string };
  /** Keeps the page out of search results (cart, 404). */
  noindex?: boolean;
}

const pages = {
  home: {
    path: "/",
    title: "MoFFee | Kashayam-Inspired Cold Brew Coffee & Herbal Drinks",
    description:
      "MoFFee crafts cold brew coffee and caffeine-free herbal beverages the South Indian kashayam way: natural ingredients, slow-boiled and handmade in India.",
  },
  collections: {
    path: "/collections",
    title: "MoFFee Collection | Cold Brew Coffee & Caffeine-Free Brews",
    description:
      "Explore the MoFFee collection: MoFFee C, a mulethi and clove cold brew coffee, and MoFFee NC, a caffeine-free Ayurvedic herbal brew. Both in 100ml pouches.",
  },
  moffee: {
    path: PRODUCTS.moffee.path,
    title: "MoFFee C | Mulethi & Clove Cold Brew Coffee, Made in India",
    description:
      "MoFFee C is a kashayam-inspired cold brew coffee made with organic coffee, spring water, atimadhuram (mulethi) root and clove. Bold flavour, natural energy.",
    type: "product",
    image: {
      path: PRODUCTS.moffee.image,
      width: 1080,
      height: 1080,
      alt: "MoFFee C cold brew coffee in a 100ml spout pouch",
    },
  },
  moffeeNc: {
    path: PRODUCTS.moffeeNc.path,
    title: "MoFFee NC | Caffeine-Free Ayurvedic Herbal Cold Brew",
    description:
      "MoFFee NC is a caffeine-free Ayurvedic cold brew of herbal roots, cardamom, clove and tulsi. Calm, clean and crafted for evenings and mindful breaks.",
    type: "product",
    image: {
      path: PRODUCTS.moffeeNc.image,
      width: 720,
      height: 720,
      alt: "MoFFee NC caffeine-free herbal cold brew in a 100ml spout pouch",
    },
  },
  cart: {
    path: "/cart",
    title: "Checkout | Order MoFFee Cold Brew Pouches Online in India",
    description:
      "Review your MoFFee order, choose MoFFee C or caffeine-free MoFFee NC, add your delivery details and pay securely with Razorpay or UPI.",
    noindex: true,
  },
  notFound: {
    path: "/404",
    title: "Page Not Found | MoFFee Cold Brew Coffee & Herbal Drinks",
    description:
      "This page does not exist. Explore MoFFee cold brew coffee and caffeine-free herbal beverages, handmade in India the traditional kashayam way.",
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof pages;
export const PAGES: Record<PageKey, PageMeta> = pages;

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
