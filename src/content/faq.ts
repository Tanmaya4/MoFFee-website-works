/**
 * Homepage FAQ. Rendered by FAQSection, and reused at build time for the FAQPage
 * structured data and llms.txt, so edit answers here only.
 *
 * Answers support inline links written as [label](/path).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "What is MoFFee?",
    answer:
      "MoFFee is a craft beverage brand from India, rooted in kashayam: the South Indian tradition of gently boiling ingredients in water to draw out their true essence. We make two ready-to-drink cold brews: [MoFFee C](/product/moffee), a cold brew coffee with mulethi (atimadhuram) root and clove, and [MoFFee NC](/product/moffee-nc), a caffeine-free herbal brew.",
  },
  {
    question: "What is kashayam, and how is MoFFee made?",
    answer:
      "Kashayam is a traditional Ayurvedic decoction, made in Indian homes for generations, where roots, herbs and spices are simmered slowly to extract their essence. MoFFee follows the same slow-boil method: carefully sourced ingredients are slow-boiled, strained, and finished into a warm, balanced beverage made for everyday routines. It values extraction over speed, using just fire, water and time.",
  },
  {
    question: "What is the difference between MoFFee C and MoFFee NC?",
    answer:
      "[MoFFee C](/product/moffee) is our original caffeinated cold brew coffee, made for mornings, workouts and afternoon focus. [MoFFee NC](/product/moffee-nc), short for non-caffeine, is its calm counterpart: an Ayurvedic herbal cold brew with no caffeine, made for evenings, mindful breaks and hot Indian summers. Same craft, opposite intent.",
  },
  {
    question: "What ingredients are in MoFFee cold brew?",
    answer:
      "MoFFee C is brewed with organic cold brew coffee, filtered spring water, atimadhuram (mulethi) root and aromatic clove. MoFFee NC combines a pure herbal root with filtered spring water, cardamom and clove aromatics, and tulsi leaf. Neither contains added sugar, so the gentle sweetness comes from the ingredients themselves.",
  },
  {
    question: "How is MoFFee packed, and how long does it keep?",
    answer:
      "Both brews come in a 100ml spout pouch that is easy to carry and pour. MoFFee C has a shelf life of one week and MoFFee NC a shelf life of two days, so each pouch is best enjoyed fresh.",
  },
  {
    question: "Is MoFFee lab tested?",
    answer:
      "Yes. MoFFee C has been tested at a government-approved, NABL-accredited laboratory, and the full test report is published on the [MoFFee C product page](/product/moffee).",
  },
  {
    question: "Who makes MoFFee?",
    answer:
      "MoFFee is homemade in India with passion and care, drawing on the wisdom of ancient Bharat. Every pouch is made in pursuit of employability for women.",
  },
  {
    question: "How can I order MoFFee?",
    answer:
      "Browse [the MoFFee collection](/collections), pick MoFFee C or MoFFee NC, choose your quantity in the [cart](/cart), add your delivery details and pay securely with Razorpay or UPI. For any other questions, reach us through the Contact Us form at the bottom of this page.",
  },
];

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export type FaqSegment = { text: string; href?: string };

/** Splits an answer into plain-text and link segments. */
export function parseFaqAnswer(answer: string): FaqSegment[] {
  const segments: FaqSegment[] = [];
  let last = 0;
  for (const match of answer.matchAll(LINK)) {
    if (match.index > last) segments.push({ text: answer.slice(last, match.index) });
    segments.push({ text: match[1], href: match[2] });
    last = match.index + match[0].length;
  }
  if (last < answer.length) segments.push({ text: answer.slice(last) });
  return segments;
}

/** The answer with link markup removed, for plain-text uses. */
export const faqAnswerText = (answer: string) => answer.replace(LINK, "$1");
