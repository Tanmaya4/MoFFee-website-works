import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Golden Elixir",
    category: "Sparkling",
    description: "A refined sparkling beverage with hints of citrus and honey, crafted from sun-ripened fruits and artisanal honey collected from heritage apiaries.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&h=600&fit=crop",
    details: "750ml • Limited Edition",
  },
  {
    id: 2,
    name: "Velvet Rose",
    category: "Botanical",
    description: "Delicate rose petals infused with elderflower essence, creating a symphony of floral notes that dance gracefully on your palate.",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=600&fit=crop",
    details: "500ml • Seasonal",
  },
  {
    id: 3,
    name: "Midnight Noir",
    category: "Premium",
    description: "Dark berry blend with a mysterious, complex finish. Notes of blackcurrant, wild blueberry, and a whisper of aged vanilla.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=600&fit=crop",
    details: "750ml • Reserve Collection",
  },
  {
    id: 4,
    name: "Alpine Frost",
    category: "Refreshment",
    description: "Crisp mountain spring water infused with wild mint and cucumber, evoking the pure essence of alpine meadows at dawn.",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=1200&h=600&fit=crop",
    details: "500ml • Year-Round",
  },
  {
    id: 5,
    name: "Amber Sunrise",
    category: "Artisan",
    description: "A warm blend of tropical mango, passion fruit, and ginger root, capturing the golden warmth of a perfect morning.",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=1200&h=600&fit=crop",
    details: "750ml • Signature",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm tracking-widest uppercase hidden sm:inline">Back</span>
            </Link>
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif font-semibold tracking-wide text-foreground"
            >
              MOFFEE
            </Link>
            <div className="w-16 sm:w-20" /> {/* Spacer for centering */}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
              The Collection
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
              Crafted to
              <span className="italic text-gold-light"> Perfection</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto px-4">
              Each beverage in our collection represents the pinnacle of craft and tradition,
              meticulously developed over years of refinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section - Landscape Layout */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-lg sm:rounded-xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] sm:aspect-[16/9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-gold/90 text-charcoal text-xs tracking-widest uppercase rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 sm:space-y-6 ${
                    index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                  }`}
                >
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
                      {product.name}
                    </h2>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">
                      {product.details}
                    </p>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors tracking-widest uppercase">
                    Learn More
                    <svg
                      className={`w-4 h-4 ${index % 2 === 1 ? "lg:rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal">
              Find a Stockist Near You
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Our beverages are available at premium retailers and select restaurants worldwide.
            </p>
            <Link
              to="/"
              className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-charcoal text-primary-foreground text-sm tracking-widest uppercase rounded-full hover:bg-charcoal/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/40">
            © 2025 Moffee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Collections;
