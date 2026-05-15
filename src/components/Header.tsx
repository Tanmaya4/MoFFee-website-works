import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  type NavLink =
    | { name: string; href: string; kind: "route" }
    | { name: string; href: string; kind: "anchor" }
    | { name: string; href: string; kind: "external" };

  const navLinks: NavLink[] = [
    { name: "Collections", href: "/collections", kind: "route" },
    { name: "Our Story", href: "#story", kind: "anchor" },
    {
      name: "Feedback",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScoI0zFl4LH7f-CYcHxxwz_rDpZeD3EVgLcBNPxYC0wIhAdeA/viewform?usp=header",
      kind: "external",
    },
    { name: "Contact", href: "#contact", kind: "anchor" },
  ];

  const handleAnchorClick = (link: NavLink) => {
    setIsOpen(false);
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 transition-all duration-300">
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className={`text-xl sm:text-2xl font-serif font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              MOFFEE
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0"
          >
            {navLinks.map((link) => {
              const baseClass = `text-xs xl:text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`;
              return (
                <li key={link.name}>
                  {link.kind === "route" && (
                    <Link to={link.href} className={baseClass}>
                      {link.name}
                    </Link>
                  )}
                  {link.kind === "external" && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClass}
                    >
                      {link.name}
                    </a>
                  )}
                  {link.kind === "anchor" && (
                    <button
                      onClick={() => handleAnchorClick(link)}
                      className={baseClass}
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              );
            })}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 flex-shrink-0 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden bg-background/95 backdrop-blur-md rounded-lg"
            >
              <ul className="flex flex-col gap-2 py-4 px-4">
                {navLinks.map((link) => {
                  const linkClass =
                    "block py-3 text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors";
                  return (
                    <li key={link.name}>
                      {link.kind === "route" && (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={linkClass}
                        >
                          {link.name}
                        </Link>
                      )}
                      {link.kind === "external" && (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className={linkClass}
                        >
                          {link.name}
                        </a>
                      )}
                      {link.kind === "anchor" && (
                        <button
                          onClick={() => handleAnchorClick(link)}
                          className={`w-full text-left ${linkClass}`}
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
