/**
 * Static text snapshots of each page, written into <div id="root"> at build time.
 *
 * Crawlers and LLM agents that don't run JavaScript read this instead of an empty
 * page. React replaces it on mount, and it is hidden via CSS until then (shown only
 * when JS is disabled), so real visitors never see it.
 *
 * Keep it in sync with the copy in src/pages and src/components. It must only
 * contain content that is also visible on the rendered page.
 */
import { CONTACT_FORM_URL, PRODUCTS, SOCIAL_PROFILES, type PageKey } from "../src/seo/site";
import { FAQ, parseFaqAnswer } from "../src/content/faq";

const ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
export const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (c) => ESCAPES[c]);

class Raw {
  constructor(readonly value: string) {}
}
type Value = string | number | Raw | Value[];

const render = (value: Value): string =>
  value instanceof Raw
    ? value.value
    : Array.isArray(value)
      ? value.map(render).join("")
      : escapeHtml(String(value));

/** Tagged template: interpolations are HTML-escaped unless they came from html`` too. */
const html = (strings: TemplateStringsArray, ...values: Value[]) =>
  new Raw(strings.reduce((out, s, i) => out + s + (i < values.length ? render(values[i]) : ""), ""));

const list = (items: string[]) => html`<ul>${items.map((item) => html`<li>${item}</li>`)}</ul>`;
const cards = (items: Array<[string, string]>) =>
  items.map(([title, text]) => html`<h3>${title}</h3><p>${text}</p>`);

const productNav = html`<nav><a href="/collections">Back to Collection</a> · <a href="/">MoFFee home</a></nav>`;
const simpleFooter = html`<footer><p><a href="/">MoFFee</a></p><p>© 2025 MoFFee. All rights reserved.</p></footer>`;

const faqAnswer = (answer: string) =>
  parseFaqAnswer(answer).map((s) => (s.href ? html`<a href="${s.href}">${s.text}</a>` : s.text));

const home = html`
<header><nav><a href="/">MoFFee</a> · <a href="/collections">Collections</a> · <a href="/#story">Our Story</a> · <a href="/#contact">Contact</a></nav></header>
<main>
<section>
<p>Premium Craft Beverages</p>
<h1>Elevate Every Moment</h1>
<p>Discover our exquisite collection of handcrafted beverages, made with the finest ingredients from around the world.</p>
<p><a href="/collections">Explore Collections</a></p>
</section>
<section>
<p>Our Story</p>
<h2>A Legacy of Excellence</h2>
<p>MoFFee is rooted in the Southern Part of India, in the tradition of kashayam — a method where ingredients are gently boiled in water to draw out their true essence. It's a slow, patient process that values extraction over speed, allowing the ingredients to give what they naturally can.</p>
<p>This way of making has been practiced in Indian homes for generations. MoFFee carries that familiarity forward, shaped for today: warm, balanced, and meant to be part of everyday routines.</p>
<p>Crafted with Intention. Rooted in Tradition. Perfection in every drop.</p>
</section>
<section>
<p>The Experience</p>
<h2>Why Choose MoFFee</h2>
${cards([
  ["Sustainably Sourced", "Every ingredient is carefully selected from sustainable farms committed to environmental stewardship."],
  ["Fire. Water. Time", "Three elemental forces unite in perfect harmony, slow-brewed to unlock deep, bold flavors."],
  ["Gentle on Body", "Crafted with low acidity and natural ingredients, designed to nourish without discomfort."],
  ["Made for Routines", "Seamlessly fits into your daily rituals, bringing calm energy to every morning and moment."],
])}
</section>
<section>
<p>Good to Know</p>
<h2>MoFFee Cold Brew, Answered</h2>
${FAQ.map((item) => html`<h3>${item.question}</h3><p>${faqAnswer(item.answer)}</p>`)}
</section>
</main>
<footer>
<p>The House of MoFFee</p>
<p>Crafting exceptional beverages from the wisdom of ancient Bharat. Every bottle is homemade with passion and quality, in pursuit of employability for women.</p>
<p>Follow us on <a href="${SOCIAL_PROFILES[0]}">Instagram</a>. Visit: India. <a href="${CONTACT_FORM_URL}">Contact Us</a>.</p>
<p>Explore: <a href="/collections">Collection</a> · <a href="/#story">Our Story</a> · <a href="/cart">Cart</a></p>
<p>© 2025 MoFFee. All rights reserved. Crafted with Intention · Made in Bharat</p>
</footer>`;

const collections = html`
<nav><a href="/">MoFFee home</a></nav>
<main>
<section>
<p>The Collection</p>
<h1>Crafted to Perfection</h1>
<p>Each beverage in our collection represents the pinnacle of craft and tradition, meticulously developed over years of refinement.</p>
</section>
<section>
<p>Introducing</p>
<h2>MoFFee C</h2>
<p>Caffeine</p>
<p>Premium cold brew coffee, crafted for those who demand excellence in every sip.</p>
<p><a href="${PRODUCTS.moffee.path}">View MoFFee C</a></p>
</section>
<section>
<h2>MoFFee NC</h2>
<p>Non-Caffeine</p>
<p>All the smooth, soothing depth of MoFFee — caffeine-free, crafted for calm, clean energy any time of day.</p>
<p><a href="${PRODUCTS.moffeeNc.path}">View MoFFee NC</a></p>
</section>
</main>
${simpleFooter}`;

const moffee = html`
${productNav}
<main>
<section>
<p>Premium Cold Brew</p>
<h1>MoFFee</h1>
<p>"Where Every Sip Sparks Your Potential"</p>
<p>Crafted for dreamers, creators, and go-getters. Experience the perfect balance of bold flavor and natural energy.</p>
<p><a href="/cart">Buy Now</a> — MoFFee is served in a 100ml spout pouch with a shelf life of 1 week. ₹${PRODUCTS.moffee.price} per pouch.</p>
</section>
<section>
<p>The Story</p>
<h2>What Makes MoFFee Special</h2>
<p>The idea behind MoFFee was born at home. Growing up, my mother would prepare different types of traditional kashayam using fresh leaves, roots, and healing herbs. This lived experience became the foundation of MoFFee, a blend of ancient wisdom and everyday wellness.</p>
<p>MoFFee isn't just a simple coffee, it's inspired by the ancient Indian framework of kashayam, a time-honored Ayurvedic herbal decoction. In Ayurveda, kashayam refers to brews made by simmering herbs and spices to extract their essence. Our MoFFee carries forward this holistic legacy, blending traditional wisdom with modern taste.</p>
<p>Guided by our vision and mission, MoFFee aims to take this ancient wisdom to the world, sharing the truth that true greatness often comes from the knowledge of earlier generations, and making it accessible for modern lives everywhere.</p>
</section>
<section>
<p>Taste Profile</p>
<h2>The Lifecycle of Five-Sense Experience</h2>
${cards([
  ["See", "A dark, rich brew that instantly sparks craving."],
  ["Touch", "A cool and smooth pouch in hand, crafted to feel premium from the first hold."],
  ["Smell", "Warm clove aromatics rise the moment it opens, fresh and inviting."],
  ["Hear", "The deep, satisfying gulp of bold black coffee."],
  ["Taste", "Earthy mulethi opens softly, leaving a natural sweetness that lingers long after the sip."],
])}
</section>
<section>
<p>Pure &amp; Simple</p>
<h2>Premium Ingredients</h2>
<p>Every ingredient is carefully selected for quality, taste, and functional benefits.</p>
${list(["Organic Cold Brew Coffee", "Filtered Spring Water", "Earthly Atimadhuram Root", "Aromatic Clove"])}
</section>
<section>
<p>Perfect For</p>
<h2>Best Moments to Enjoy</h2>
${cards([
  ["Morning Ritual", "Start your day with clarity and purpose"],
  ["Pre-Workout", "Natural energy for your fitness routine"],
  ["Afternoon Focus", "Beat the midday slump without the jitters"],
  ["Creative Sessions", "Fuel your imagination and productivity"],
])}
</section>
<section>
<p>Transparency</p>
<h2>Nutritional Information</h2>
<p>Per 12 fl oz (355ml) serving</p>
${list(["Calories: 88", "Caffeine: 120mg", "Added Sugar: 0", "Protein: 6g", "Carbohydrates: 14g"])}
</section>
<section>
<p>Lab Certified</p>
<h2>Test Report</h2>
<p>Government approved and NABL accredited lab certified results.</p>
</section>
<section>
<h2>Ready to Elevate Your Day?</h2>
<p>Experience the difference that premium ingredients make.</p>
<p><a href="/cart">Buy Now</a></p>
</section>
</main>
${simpleFooter}`;

const moffeeNc = html`
${productNav}
<main>
<section>
<p>Caffeine-Free Cold Brew</p>
<h1>MoFFee NC</h1>
<p>"Stillness in a sip."</p>
<p>An Ayurvedic infusion built around pure herbal roots, with no caffeine and no compromise. Made for evenings, mindful breaks, and every quiet hour in between.</p>
<p><a href="/cart">Buy Now</a> — MoFFee NC is served in a 100ml spout pouch with a shelf life of 2 days. ₹${PRODUCTS.moffeeNc.price} per pouch.</p>
</section>
<section>
<p>The Story</p>
<h2>A Quieter Side of MoFFee</h2>
<p>Not every moment calls for caffeine. Some call for stillness: a slow evening, a cool-down after a workout, a quiet hour before sleep. MoFFee NC was built for those moments, the pause, the reset, the breath between two busy hours.</p>
<p>At its heart sits a herbal blend of sweet, soothing roots with a long-standing place in Ayurvedic kitchens. Brewed slowly with cardamom, clove, and tulsi, it delivers the same craft and ritual as our original MoFFee, simply without the kick. No stimulants, no shortcuts. Just a clean, herbal cold brew you can return to any time of day.</p>
<p>MoFFee NC isn't a smaller version of MoFFee. It's the other half of the conversation, a brew that honors rest as much as we honor energy, and proves that wellness can taste as deliberate as it feels.</p>
</section>
<section>
<p>Taste Profile</p>
<h2>A Five-Sense Slowdown</h2>
${cards([
  ["See", "A warm amber pour, glowing soft and golden in the light."],
  ["Touch", "A cool, smooth pouch that sits effortlessly in the palm. Quiet, premium, ready."],
  ["Smell", "Notes of herbal root, sweet cardamom, and a whisper of clove rise the moment you open it."],
  ["Hear", "The soft, easy pour of a brew built to slow you down, not speed you up."],
  ["Taste", "Naturally sweet herbal notes open first, settling into a clean finish that lingers gently."],
])}
</section>
<section>
<p>Pure &amp; Simple</p>
<h2>Nothing Hidden, Nothing Added</h2>
<p>A short ingredient list, chosen with care. Every entry pulls its weight.</p>
${list(["Pure Herbal Root", "Filtered Spring Water", "Cardamom & Clove Aromatics", "Ceremonial Tulsi Leaf"])}
</section>
<section>
<p>Perfect For</p>
<h2>When to Slow Down</h2>
${cards([
  ["Evening Wind-Down", "A calming sip to close the day without sacrificing sleep."],
  ["Midday Reset", "Soothe and reset between meetings. Focus without stimulation."],
  ["Post-Workout Calm", "Hydrate and recover with a herbal brew that soothes from inside out."],
  ["Scorching Summers", "Built for the harsh Indian heat. A naturally cooling brew for long, blistering heatwaves."],
])}
</section>
<section>
<p>Transparency</p>
<h2>Nutritional Information</h2>
<p>Per 100ml serving</p>
${list(["Calories: 32", "Caffeine: 0mg", "Added Sugar: 0", "Protein: 1g", "Carbohydrates: 6g"])}
</section>
<section>
<p>The Other Half</p>
<h2>Need a Lift Instead?</h2>
<p>For mornings, pre-workouts, and afternoons that need a push, meet our caffeinated original. Same craft, opposite intent. <a href="${PRODUCTS.moffee.path}">Discover MoFFee C</a></p>
</section>
<section>
<h2>Make Stillness a Ritual</h2>
<p>A caffeine-free brew, ready when the day asks for calm. Pour a glass, your evening will thank you.</p>
<p><a href="/cart">Buy Now</a></p>
</section>
</main>
${simpleFooter}`;

const cart = html`
<nav><a href="/">MoFFee home</a></nav>
<main>
<h1>Your Cart</h1>
${Object.values(PRODUCTS).map(
  (p) => html`<h2><a href="${p.path}">${p.name}</a></h2><p>${p.size} spout pouch · ₹${p.price}</p>`,
)}
<p>Add your contact details and delivery address, then pay securely with Razorpay or UPI.</p>
</main>`;

const SNAPSHOTS: Record<PageKey, Raw | null> = {
  home,
  collections,
  moffee,
  moffeeNc,
  cart,
  notFound: null,
};

export function snapshotFor(key: PageKey): string {
  const snapshot = SNAPSHOTS[key];
  return snapshot ? `<div class="seo-prerender">${snapshot.value}</div>` : "";
}
