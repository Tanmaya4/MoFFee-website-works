import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/pt2.mp4";
import { Button } from "@/components/ui/button";
import { useVideoPreload } from "@/hooks/useVideoPreload";

const HeroSection = () => {
  const { videoRef, isReady } = useVideoPreload(heroVideo, 1.75);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold-light text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6"
        >
          Premium Craft Beverages
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white font-medium leading-tight max-w-4xl"
        >
          Elevate Every
          <span className="block italic text-gold">Moment</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed px-4"
        >
          Discover our exquisite collection of handcrafted beverages,
          made with the finest ingredients from around the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
            <Link to="/collections">Explore Collections</Link>
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Lightweight loader while the video buffers to avoid visible lag */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <span className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
            Loading experience...
          </span>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
