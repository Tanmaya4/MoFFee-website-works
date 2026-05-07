import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section
      id="story"
      className="relative py-20 sm:py-28 md:py-36 bg-charcoal text-primary-foreground overflow-hidden"
    >
      {/* Ambient warm light beam — directional from upper left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 65% at 8% -5%, hsl(36 49% 77% / 0.18), hsl(30 52% 64% / 0.08) 40%, transparent 70%), radial-gradient(40% 35% at 95% 100%, hsl(345 60% 30% / 0.14), transparent 70%)",
        }}
      />

      {/* Soft light shaft from upper-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-[55%] h-[80%] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(36 49% 77% / 0.22), transparent)",
        }}
      />

      {/* Subtle film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      {/* Doodle background image — ornate Indian motifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-no-repeat bg-cover bg-center opacity-90 mix-blend-screen"
        style={{
          backgroundImage: "url('/images/story-doodles-bg.png')",
        }}
      />

      {/* Subtle dark vignette over the doodle bg so text remains legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 60% at 50% 50%, transparent 0%, hsl(0 0% 5% / 0.55) 100%)",
        }}
      />


      {/* Floating particles — animated dust */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "8%", size: 2.5, delay: 0, dur: 7 },
          { top: "22%", left: "30%", size: 1.5, delay: 1.2, dur: 9 },
          { top: "8%", left: "55%", size: 2, delay: 0.5, dur: 8 },
          { top: "30%", left: "70%", size: 3, delay: 2, dur: 10 },
          { top: "18%", left: "85%", size: 1.5, delay: 0.8, dur: 7.5 },
          { top: "45%", left: "12%", size: 2, delay: 1.5, dur: 8.5 },
          { top: "52%", left: "40%", size: 1.5, delay: 0.3, dur: 9 },
          { top: "60%", left: "62%", size: 2.5, delay: 1.8, dur: 11 },
          { top: "48%", left: "92%", size: 2, delay: 0.6, dur: 8 },
          { top: "70%", left: "18%", size: 2, delay: 2.2, dur: 9 },
          { top: "78%", left: "38%", size: 1.5, delay: 1, dur: 7 },
          { top: "82%", left: "55%", size: 2.5, delay: 0.4, dur: 10 },
          { top: "72%", left: "75%", size: 1.5, delay: 1.6, dur: 8.5 },
          { top: "88%", left: "88%", size: 2, delay: 0.9, dur: 9 },
          { top: "35%", left: "48%", size: 1.5, delay: 1.4, dur: 8 },
          { top: "65%", left: "5%", size: 2, delay: 0.2, dur: 7.5 },
          { top: "15%", left: "20%", size: 1.5, delay: 2.4, dur: 10 },
          { top: "40%", left: "55%", size: 1.2, delay: 1.1, dur: 9.5 },
          { top: "55%", left: "28%", size: 2, delay: 0.7, dur: 8 },
          { top: "25%", left: "45%", size: 1.2, delay: 2.6, dur: 11 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-light"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 6px hsl(36 49% 77% / 0.6)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0.4, 0.9, 0],
              y: [0, -25, -10, -35, -50],
              x: [0, 5, -3, 8, 0],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow with flanking gold lines */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="text-gold text-[11px] sm:text-xs tracking-[0.4em] uppercase font-medium">
                Our Story
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-gold/70 to-transparent" />
            </div>

            <h2 className="mt-5 sm:mt-7 text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight">
              A Legacy of
              <span className="block italic text-gold-light mt-1">
                Excellence
              </span>
            </h2>

            {/* Decorative ornament under heading */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3" aria-hidden>
              <span className="h-[1.5px] w-10 bg-gold" />
              <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
                <path
                  d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="h-[1.5px] w-10 bg-gold" />
            </div>

            <p className="mt-7 sm:mt-9 text-primary-foreground/75 text-base sm:text-lg leading-relaxed">
              <span className="float-left mr-3 mt-1 font-serif text-5xl sm:text-6xl leading-none text-gold-light italic">
                M
              </span>
              oFFee is rooted in the Southern Part of India, in the tradition
              of kashayam — a method where ingredients are gently boiled in
              water to draw out their true essence. It's a slow, patient process
              that values extraction over speed, allowing the ingredients to
              give what they naturally can.
            </p>
            <p className="mt-5 sm:mt-6 text-primary-foreground/75 text-base sm:text-lg leading-relaxed">
              This way of making has been practiced in Indian homes for
              generations. MoFFee carries that familiarity forward, shaped for
              today: warm, balanced, and meant to be part of everyday routines.
            </p>

            {/* Signature line */}
            <div className="mt-10 sm:mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-gold/60" />
              <span className="text-gold-light/80 text-xs tracking-[0.3em] uppercase font-medium">
                Crafted with Intention
              </span>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            {/* Decorative dot grid behind image */}
            <div
              aria-hidden
              className="hidden md:block absolute -top-6 -right-6 w-32 h-32 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(30 52% 64% / 0.5) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Outer gold offset frame */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 sm:-inset-3 rounded-lg border border-gold/40"
              />
              <div
                aria-hidden
                className="absolute -inset-[1px] rounded-lg bg-gradient-to-br from-gold-light/40 via-gold/10 to-burgundy/30 blur-sm opacity-60"
              />

              {/* Image frame */}
              <div className="relative rounded-lg overflow-hidden ring-1 ring-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/kashayam.jpeg"
                  alt="Kashayam"
                  loading="lazy"
                  className="w-full h-auto object-cover max-w-full transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                />
                {/* Subtle vignette */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
                {/* Top warm sheen */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, hsl(36 49% 77% / 0.18), transparent)",
                  }}
                />
              </div>
            </div>

            {/* Floating quote badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-10 w-40 h-40 sm:w-52 sm:h-52 hidden md:flex items-center justify-center group cursor-pointer [perspective:1200px]"
            >
              {/* Flippable inner */}
              <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateY(180deg)]">
                {/* Front face */}
                <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                  {/* Outer subtle ring */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-lg border border-gold/40 rotate-3"
                  />
                  {/* Gold gradient tile */}
                  <div className="relative w-full h-full bg-gradient-gold rounded-lg flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                    {/* Inner double border */}
                    <div
                      aria-hidden
                      className="absolute inset-2 sm:inset-3 border border-charcoal/20 rounded"
                    />
                    <div className="relative px-3 sm:px-4 text-center">
                      <svg
                        aria-hidden
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        className="mx-auto mb-1.5 sm:mb-2 text-charcoal/70"
                      >
                        <path
                          d="M0 14V8.4C0 5.6 0.7 3.4 2.1 1.8C3.5 0.6 5.2 0 7.2 0V3.6C5.6 3.6 4.4 4 3.6 4.8C2.8 5.6 2.4 6.8 2.4 8.4H4.8V14H0ZM10.8 14V8.4C10.8 5.6 11.5 3.4 12.9 1.8C14.3 0.6 16 0 18 0V3.6C16.4 3.6 15.2 4 14.4 4.8C13.6 5.6 13.2 6.8 13.2 8.4H15.6V14H10.8Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-charcoal font-serif text-sm sm:text-base leading-snug italic">
                        Perfection in every drop
                      </p>
                      <div className="mt-2 mx-auto h-px w-8 bg-charcoal/40" />
                    </div>
                  </div>
                </div>

                {/* Back face — empty so the badge appears to vanish */}
                <div
                  aria-hidden
                  className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
                />
              </div>
            </motion.div>

            {/* Heritage seal — top left corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 hidden md:flex w-20 h-20 sm:w-24 sm:h-24 items-center justify-center"
            >
              <div className="relative w-full h-full rounded-full border border-gold/50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-1.5 rounded-full border border-gold/30" />
                <div className="text-center">
                  <p className="text-gold text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium">
                    Rooted in
                  </p>
                  <p className="text-gold-light font-serif italic text-xs sm:text-sm mt-0.5">
                    Tradition
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Organic curve transition into ExperienceSection (cream) */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 leading-[0]">
        {/* Soft gold edge tracing the curve */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[90px] md:h-[110px] text-gold/30"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,55 C220,95 480,15 760,45 C980,68 1180,30 1440,55"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>
        {/* Cream curve fill */}
        <svg
          className="block w-full h-[60px] sm:h-[90px] md:h-[110px]"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C220,100 480,20 760,50 C980,73 1180,35 1440,60 L1440,110 L0,110 Z"
            fill="hsl(40 40% 95%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default StorySection;
