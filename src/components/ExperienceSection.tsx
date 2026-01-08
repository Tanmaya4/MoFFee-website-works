import { motion } from "framer-motion";
import { Leaf, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "Every ingredient is carefully selected from sustainable farms committed to environmental stewardship.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized globally with over 50 international awards for taste, quality, and innovation.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "From London to Tokyo, our beverages grace the finest establishments worldwide.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-burgundy text-xs sm:text-sm tracking-[0.3em] uppercase">
            The Experience
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
            Why Choose <span className="italic text-primary">Moffee</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 sm:p-8 rounded-lg bg-background shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-500"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
