import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Import all sequence images
const imageCount = 25;
const images: string[] = [];
for (let i = 1; i <= imageCount; i++) {
  images.push(`/seq/ezgif-frame-${String(i).padStart(3, "0")}.jpg`);
}

const ScrollSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);

  // Scroll progress with smooth spring physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Super smooth spring animation - slow and buttery
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.0001,
  });

  // Text animations tied to scroll
  const titleOpacity = useTransform(smoothProgress, [0, 0.15, 0.3], [0, 1, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [60, 0]);
  
  const subtitleOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.4], [0, 1, 1]);
  const subtitleY = useTransform(smoothProgress, [0.1, 0.25], [40, 0]);
  
  const ctaOpacity = useTransform(smoothProgress, [0.25, 0.4, 0.6], [0, 1, 1]);
  const ctaY = useTransform(smoothProgress, [0.25, 0.4], [30, 0]);

  // Fade out content at the end
  const contentOpacity = useTransform(smoothProgress, [0.7, 0.9], [1, 0]);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const imageElements: HTMLImageElement[] = [];

    const preloadImages = async () => {
      const promises = images.map((src, index) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadProgress((loadedCount / imageCount) * 100);
            resolve(img);
          };
          img.onerror = reject;
          img.src = src;
          imageElements[index] = img;
        });
      });

      try {
        await Promise.all(promises);
        setLoadedImages(imageElements);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    preloadImages();
  }, []);

  // Render frame to canvas
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = loadedImages[frameIndex];

      if (!canvas || !ctx || !img) return;

      // Set canvas size to match container
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        
        ctx.scale(dpr, dpr);
      }

      // Clear and draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate aspect-ratio-preserving dimensions (cover)
      const imgAspect = img.width / img.height;
      const canvasAspect = window.innerWidth / window.innerHeight;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgAspect > canvasAspect) {
        drawHeight = window.innerHeight;
        drawWidth = drawHeight * imgAspect;
        drawX = (window.innerWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = window.innerWidth;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (window.innerHeight - drawHeight) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    },
    [loadedImages]
  );

  // Update canvas on scroll
  useEffect(() => {
    if (loadedImages.length === 0) return;

    const unsubscribe = smoothProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        Math.floor(latest * (imageCount - 1)),
        imageCount - 1
      );

      if (frameIndex !== currentFrameRef.current && frameIndex >= 0) {
        currentFrameRef.current = frameIndex;
        renderFrame(frameIndex);
      }
    });

    // Initial render
    renderFrame(0);

    return () => unsubscribe();
  }, [loadedImages, smoothProgress, renderFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (loadedImages.length > 0) {
        renderFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loadedImages, renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0a0a0a]"
      style={{ height: "400vh" }}
    >
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center">
          <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
              style={{ width: `${loadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="mt-4 text-white/50 text-sm tracking-[0.3em] uppercase">
            Loading Experience
          </p>
          <p className="mt-2 text-amber-400/80 text-xs">
            {Math.round(loadProgress)}%
          </p>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for image sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            willChange: "transform",
            imageRendering: "crisp-edges",
          }}
        />

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,0,0,0.8) 0%, transparent 60%),
              linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)
            `,
          }}
        />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-6"
          style={{ opacity: contentOpacity }}
        >
          <motion.span
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-amber-400/90 text-xs md:text-sm tracking-[0.4em] uppercase mb-4"
          >
            Introducing
          </motion.span>

          <motion.h2
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium leading-tight"
          >
            MoFFee
          </motion.h2>

          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            Energy for the Grind
          </motion.p>

          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="mt-3 text-sm md:text-base text-white/50 max-w-md leading-relaxed"
          >
            Premium cold brew coffee, crafted for those who demand excellence in every sip.
          </motion.p>

          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="mt-8 md:mt-10"
          >
            <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-transparent border border-amber-400/50 text-amber-400 text-sm tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:border-amber-400">
              <span className="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-500">
                Discover More
              </span>
              <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-px h-32 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"
              style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSequence;

