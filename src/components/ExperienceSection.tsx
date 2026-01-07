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
    <section id="experience" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-burgundy text-sm tracking-[0.3em] uppercase">
            The Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
            Why Choose <span className="italic text-primary">Aurum</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8 rounded-lg bg-background shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
