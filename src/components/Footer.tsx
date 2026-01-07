import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif text-gold tracking-wide">MOFFEE</h3>
            <p className="mt-4 text-primary-foreground/60 max-w-md leading-relaxed">
              Crafting exceptional beverages since 1892. Every bottle tells a 
              story of passion, quality, and the pursuit of perfection.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Collection", "Our Story", "Stockists", "Press"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-gold mb-6">
              Contact
            </h4>
            <address className="not-italic text-primary-foreground/60 space-y-3">
              <p>123 Heritage Lane</p>
              <p>London, W1K 1AA</p>
              <p className="pt-2">hello@moffee.com</p>
              <p>+91 9650590176</p>
            </address>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2025 MoFFee. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
