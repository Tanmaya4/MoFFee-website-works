import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ, parseFaqAnswer } from "@/content/faq";

// Native <details> keeps every answer in the DOM (unlike Radix Accordion, which
// unmounts closed panels), so search engines and LLMs can read them all.
const FAQSection = () => {
  return (
    <section id="faq" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 bg-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-burgundy text-xs sm:text-sm tracking-[0.3em] uppercase">
            Good to Know
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
            MoFFee Cold Brew, <span className="italic text-primary">Answered</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-charcoal/10 border-y border-charcoal/10">
          {FAQ.map((item, index) => (
            <details key={item.question} className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg sm:text-xl font-serif text-charcoal">{item.question}</h3>
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  <Plus size={16} />
                </span>
              </summary>
              <p className="pb-6 pr-10 text-sm sm:text-base text-charcoal/75 leading-relaxed">
                {parseFaqAnswer(item.answer).map((segment, i) =>
                  segment.href ? (
                    <Link
                      key={i}
                      to={segment.href}
                      className="text-burgundy underline decoration-gold underline-offset-4 hover:text-burgundy-light transition-colors"
                    >
                      {segment.text}
                    </Link>
                  ) : (
                    segment.text
                  ),
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
