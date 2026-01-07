import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif leading-tight">
              A Legacy of
              <span className="block italic text-gold-light">Excellence</span>
            </h2>
            <p className="mt-8 text-primary-foreground/70 text-lg leading-relaxed">
              Since 1892, we have been dedicated to the art of crafting exceptional 
              beverages. Our founders believed that every sip should tell a story—a 
              narrative of quality, tradition, and innovation.
            </p>
            <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed">
              Today, we continue this legacy with the same passion, sourcing the 
              finest ingredients from sustainable farms and pristine natural springs 
              across the globe.
            </p>

            <div className="mt-12 flex gap-12">
              <div>
                <span className="text-4xl md:text-5xl font-serif text-gold">130+</span>
                <p className="mt-2 text-sm text-primary-foreground/60 tracking-wide uppercase">
                  Years of Heritage
                </p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-serif text-gold">47</span>
                <p className="mt-2 text-sm text-primary-foreground/60 tracking-wide uppercase">
                  Countries Served
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=800&fit=crop"
                alt="Crafting process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-gold rounded-lg hidden lg:flex items-center justify-center">
              <p className="text-charcoal font-serif text-lg text-center px-4 italic">
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
