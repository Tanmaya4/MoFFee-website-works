import { motion } from "framer-motion";
import heroVideo from "@/assets/pt2.mp4";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold-light text-sm tracking-[0.4em] uppercase mb-6"
        >
          Premium Craft Beverages
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium leading-tight max-w-4xl"
        >
          Elevate Every
          <span className="block italic text-gold">Moment</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
        >
          Discover our exquisite collection of handcrafted beverages,
          made with the finest ingredients from around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="lg">
            Explore Collection
          </Button>
          <Button variant="heroOutline" size="lg">
            Our Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
