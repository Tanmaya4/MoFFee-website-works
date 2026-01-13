import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-16 sm:py-24 md:py-32 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              A Legacy of
              <span className="block italic text-gold-light">Excellence</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-primary-foreground/70 text-base sm:text-lg leading-relaxed">
              Moffee is rooted in the South Indian tradition of kashayam — a method where ingredients are gently boiled in water to draw out their true essence. It's a slow, patient process that values extraction over speed, allowing the ingredients to give what they naturally can.
            </p>
            <p className="mt-4 sm:mt-6 text-primary-foreground/70 text-base sm:text-lg leading-relaxed">
              This way of making has been practiced in Indian homes for generations. Moffee carries that familiarity forward, shaped for today — warm, balanced, and meant to be part of everyday routines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] sm:aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=800&fit=crop"
                alt="Crafting process"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-gold rounded-lg hidden md:flex items-center justify-center">
              <p className="text-charcoal font-serif text-sm sm:text-lg text-center px-3 sm:px-4 italic">
                "Perfection in every drop"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
