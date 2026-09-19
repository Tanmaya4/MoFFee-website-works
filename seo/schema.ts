/**
 * Schema.org JSON-LD for each prerendered route (build time only).
 * Validate changes at https://search.google.com/test/rich-results
 */
import {
  CONTACT_FORM_URL,
  DEFAULT_OG_IMAGE,
  PAGES,
  PRODUCTS,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
  type PageKey,
} from "../src/seo/site";
import { FAQ, parseFaqAnswer } from "../src/content/faq";

type Node = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ref = (id: string) => ({ "@id": id });

/**
 * Identity schema. LocalBusiness is a subtype of Organization; add a street address,
 * PIN code and phone number here if you have a public location, or remove
 * "LocalBusiness" if you do not want to be listed as one.
 */
const organization: Node = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Moffee",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/favicon-512.png"),
    width: 512,
    height: 512,
  },
  image: absoluteUrl(DEFAULT_OG_IMAGE.path),
  description:
    "MoFFee is a craft beverage brand from India that makes cold brew coffee and caffeine-free herbal beverages the traditional South Indian kashayam way.",
  slogan: "Energy for the Grind",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: { "@type": "Country", name: "India" },
  priceRange: "₹",
  knowsAbout: ["Cold brew coffee", "Kashayam", "Ayurvedic herbal beverages", "Mulethi (licorice root)"],
  sameAs: SOCIAL_PROFILES,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: CONTACT_FORM_URL,
    availableLanguage: ["English"],
  },
};

const website: Node = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: SITE_LANGUAGE,
  publisher: ref(ORG_ID),
};

function webPage(key: PageKey, type = "WebPage", extra: Node = {}): Node {
  const page = PAGES[key];
  const url = absoluteUrl(page.path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: ref(WEBSITE_ID),
    publisher: ref(ORG_ID),
    ...extra,
  };
}

function breadcrumbs(key: PageKey, trail: Array<[string, string]>): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(PAGES[key].path)}#breadcrumb`,
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

function product(key: "moffee" | "moffeeNc"): Node[] {
  const item = PRODUCTS[key];
  const url = absoluteUrl(item.path);
  return [
    webPage(key, "ItemPage", {
      mainEntity: ref(`${url}#product`),
      breadcrumb: ref(`${url}#breadcrumb`),
      primaryImageOfPage: absoluteUrl(item.image),
    }),
    {
      "@type": "Product",
      "@id": `${url}#product`,
      name: item.name,
      description: item.description,
      image: [absoluteUrl(item.image), absoluteUrl(DEFAULT_OG_IMAGE.path)],
      url,
      sku: key === "moffee" ? "moffee-c-100ml" : "moffee-nc-100ml",
      category: item.category,
      size: item.size,
      brand: { "@type": "Brand", name: SITE_NAME },
      manufacturer: ref(ORG_ID),
      countryOfOrigin: { "@type": "Country", name: "India" },
      offers: {
        "@type": "Offer",
        url,
        price: item.price.toFixed(2),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: ref(ORG_ID),
      },
    },
    breadcrumbs(key, [
      ["Home", "/"],
      ["Collection", PAGES.collections.path],
      [item.name, item.path],
    ]),
  ];
}

const faqAnswerHtml = (answer: string) =>
  parseFaqAnswer(answer)
    .map((s) => (s.href ? `<a href="${absoluteUrl(s.href)}">${s.text}</a>` : s.text))
    .join("");

const nodesByPage: Record<PageKey, () => Node[]> = {
  home: () => [
    webPage("home", "WebPage", {
      about: ref(ORG_ID),
      primaryImageOfPage: absoluteUrl("/images/kashayam.jpeg"),
    }),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      isPartOf: ref(`${SITE_URL}/#webpage`),
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: faqAnswerHtml(item.answer) },
      })),
    },
  ],
  collections: () => [
    webPage("collections", "CollectionPage", {
      breadcrumb: ref(`${absoluteUrl(PAGES.collections.path)}#breadcrumb`),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: Object.values(PRODUCTS).map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(item.path),
          name: item.name,
        })),
      },
    }),
    breadcrumbs("collections", [
      ["Home", "/"],
      ["Collection", PAGES.collections.path],
    ]),
  ],
  moffee: () => product("moffee"),
  moffeeNc: () => product("moffeeNc"),
  cart: () => [],
  notFound: () => [],
};

/** The full JSON-LD graph for a route (organisation + website on every page). */
export function jsonLdFor(key: PageKey): Node {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...nodesByPage[key]()],
  };
}
