import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Bloomed lotus — side profile with layered petals + stamens
const LotusSide = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 80"
    className={className}
    fill="none"
    aria-hidden
  >
    <g transform="translate(60 62)">
      {/* Back petals peeking up */}
      <path
        d="M-48,-10 Q-56,-30 -38,-36 Q-24,-30 -20,-14 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <path
        d="M48,-10 Q56,-30 38,-36 Q24,-30 20,-14 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />

      {/* Outer side petals — fanning wide */}
      <path
        d="M-44,-2 Q-52,-18 -38,-26 Q-22,-22 -14,-10 Q-28,-2 -44,-2 Z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <path
        d="M44,-2 Q52,-18 38,-26 Q22,-22 14,-10 Q28,-2 44,-2 Z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />

      {/* Mid petals — more upright */}
      <path
        d="M-22,-10 Q-30,-32 -14,-38 Q-4,-30 -4,-12 Q-14,-6 -22,-10 Z"
        fill="currentColor"
        fillOpacity="0.32"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <path
        d="M22,-10 Q30,-32 14,-38 Q4,-30 4,-12 Q14,-6 22,-10 Z"
        fill="currentColor"
        fillOpacity="0.32"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />

      {/* Center tallest petal */}
      <path
        d="M-4,-12 Q-7,-44 0,-48 Q7,-44 4,-12 Z"
        fill="currentColor"
        fillOpacity="0.42"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />

      {/* Seed pod base */}
      <ellipse
        cx="0"
        cy="-7"
        rx="6"
        ry="3"
        fill="currentColor"
        fillOpacity="0.75"
        stroke="currentColor"
        strokeWidth="0.5"
      />

      {/* Stamens fanning up from the pod */}
      {[-5, -2.5, 0, 2.5, 5].map((x) => (
        <g key={x}>
          <line
            x1={x}
            y1="-8"
            x2={x * 1.6}
            y2={-20 - Math.abs(x) * 0.6}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
          <circle
            cx={x * 1.6}
            cy={-20 - Math.abs(x) * 0.6}
            r="0.7"
            fill="currentColor"
          />
        </g>
      ))}
    </g>
  </svg>
);

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-charcoal text-primary-foreground pt-20 sm:pt-28 pb-8 sm:pb-10 overflow-hidden"
    >
      {/* Ambient warm light beam — directional from upper left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 8% -5%, hsl(36 49% 77% / 0.14), hsl(30 52% 64% / 0.06) 40%, transparent 70%), radial-gradient(45% 40% at 95% 100%, hsl(345 60% 30% / 0.16), transparent 70%)",
        }}
      />

      {/* Soft light shaft */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-[55%] h-[60%] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(36 49% 77% / 0.18), transparent)",
        }}
      />

      {/* Subtle film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
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

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Top ornament — gold star flanked by hairlines */}
        <div
          className="flex items-center justify-center gap-4 mb-12 sm:mb-16"
          aria-hidden
        >
          <span className="h-px flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-r from-transparent to-gold/50" />
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
            <path
              d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z"
              fill="currentColor"
            />
          </svg>
          <span className="h-px flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12"
        >
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="text-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase font-medium">
                The House of
              </span>
            </div>

            <h3 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-none">
              Mo<span className="italic text-gold-light">FF</span>ee
            </h3>

            <div className="mt-4 flex items-center gap-3" aria-hidden>
              <span className="h-[1.5px] w-8 bg-gold" />
              <svg width="10" height="10" viewBox="0 0 14 14" className="text-gold">
                <path
                  d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="h-[1.5px] w-8 bg-gold" />
            </div>

            <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed text-sm sm:text-base">
              Crafting exceptional beverages from the wisdom of ancient{" "}
              <span className="italic text-gold-light">Bharat</span>. Every
              bottle is homemade with passion and quality, in pursuit of
              employability for women.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary-foreground/40">
                Follow
              </span>
              <span className="h-px w-8 bg-primary-foreground/15" />
              <div className="flex gap-2.5">
                <a
                  href="https://www.instagram.com/moffee.coffee.ai?igsh=MWwydzR6dWs0YmJpaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group/social relative w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-primary-foreground/70 transition-all duration-300 hover:border-transparent hover:text-charcoal overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-gold scale-0 group-hover/social:scale-100 rounded-full transition-transform duration-300 ease-out origin-center"
                  />
                  <Instagram size={16} className="relative z-10" />
                </a>
              </div>
            </div>

            {/* Scan to visit QR */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/qr-moffee.svg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download MoFFee QR code"
                className="block rounded-lg bg-white p-2 border border-gold/30 hover:border-gold-light transition-colors shadow-soft"
              >
                <img
                  src="/qr-moffee.svg"
                  alt="QR code linking to moffee.co.in"
                  width={88}
                  height={88}
                  className="block w-20 h-20 sm:w-22 sm:h-22"
                  loading="lazy"
                />
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold font-medium">
                  Scan to Visit
                </span>
                <span className="mt-1 text-sm text-primary-foreground/65">
                  moffee.co.in
                </span>
                <span className="mt-1 text-[10px] sm:text-[11px] tracking-wide text-primary-foreground/40 italic">
                  Point your camera here
                </span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold font-sans font-medium">
                Explore
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Collection", to: "/collections" },
                { label: "Our Story", to: "/#story" },
                { label: "Cart", to: "/cart" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/65 hover:text-gold-light transition-colors"
                  >
                    <span className="h-px w-0 bg-gold-light transition-all duration-300 group-hover:w-4" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit / Contact */}
          <div className="lg:col-span-2">
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold font-sans font-medium">
                Visit
              </h4>
            </div>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/65">
              <p className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="mt-0.5 text-gold-light/80 shrink-0"
                />
                <span>India</span>
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfe18BmkqWxAGFp_pFXbE7Ovsp47pHyuzZmGTngVtnX5C3qIw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="group/contact inline-flex items-center gap-2.5 text-gold-light hover:text-gold transition-colors"
                aria-label="Contact us — opens a Google Form in a new tab"
              >
                <Mail
                  size={14}
                  className="mt-0.5 text-gold-light/80 shrink-0 transition-colors group-hover/contact:text-gold"
                />
                <span className="relative tracking-wide">
                  Contact Us
                  <span
                    aria-hidden
                    className="absolute left-0 -bottom-0.5 h-px w-full origin-left bg-gold-light/70 transition-transform duration-300 ease-out group-hover/contact:scale-x-100 scale-x-100"
                  />
                </span>
                <ArrowRight
                  size={12}
                  className="shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/contact:translate-x-0 group-hover/contact:opacity-100"
                />
              </a>
            </address>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold font-sans font-medium">
                Stay In Touch
              </h4>
            </div>
            <p className="text-sm text-primary-foreground/65 leading-relaxed mb-5">
              Subscribe for new releases, brewing notes, and quiet stories from
              our kitchen.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="group/form relative flex items-center"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full bg-transparent border border-gold/30 rounded-full pl-5 pr-14 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-gold-light transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-gold text-charcoal flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <ArrowRight size={15} />
              </button>
            </form>
            <p className="mt-3 text-[10px] sm:text-[11px] tracking-wide text-primary-foreground/35 italic">
              No spam. Only the slow, considered things.
            </p>
          </div>
        </motion.div>

        {/* Decorative middle divider — larger bloomed lotus */}
        <div
          className="mt-14 sm:mt-20 flex items-center justify-center gap-4 sm:gap-6"
          aria-hidden
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-gold/30" />
          <LotusSide className="w-14 h-10 sm:w-16 sm:h-12 text-gold/80" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/20 to-gold/30" />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[11px] sm:text-xs tracking-wide text-primary-foreground/40">
            © 2025 MoFFee. All rights reserved.
          </p>

          <p className="hidden md:block text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold-light/60 font-medium">
            Crafted with Intention <span className="mx-1.5 text-gold/40">·</span>{" "}
            Made in <span className="italic">Bharat</span>
          </p>

          <div className="flex gap-5 sm:gap-7 text-[11px] sm:text-xs text-primary-foreground/40">
            <a
              href="#"
              className="hover:text-gold-light transition-colors tracking-wide"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-gold-light transition-colors tracking-wide"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-gold-light transition-colors tracking-wide"
            >
              Shipping
            </a>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </footer>
  );
};

export default Footer;
