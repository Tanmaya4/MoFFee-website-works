import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number>();

  // Smooth interpolation function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !isVideoLoaded) return;

    // Smoothly interpolate towards target time
    currentTimeRef.current = lerp(currentTimeRef.current, targetTimeRef.current, 0.1);
    
    // Only update if difference is significant
    if (Math.abs(video.currentTime - currentTimeRef.current) > 0.01) {
      video.currentTime = currentTimeRef.current;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [isVideoLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video || !isVideoLoaded) return;

    const handleScroll = () => {
      if (!video.duration) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(-rect.top / scrollableHeight, 0),
        1
      );

      targetTimeRef.current = scrollProgress * video.duration;
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVideoLoaded, animate]);

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
          className="absolute inset-0 w-full h-full object-cover will-change-auto"
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
