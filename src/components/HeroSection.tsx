import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
      video.pause();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const handleScroll = () => {
      if (!isVideoLoaded || !video.duration) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(-rect.top / scrollableHeight, 0),
        1
      );

      video.currentTime = scrollProgress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoLoaded]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky Video Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

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
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-foreground font-medium leading-tight max-w-4xl"
          >
            Elevate Every
            <span className="block italic text-gold">Moment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </motion.div>
          <p className="mt-3 text-xs text-primary-foreground/50 tracking-widest uppercase">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
