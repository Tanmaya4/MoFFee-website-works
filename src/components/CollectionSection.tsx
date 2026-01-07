import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Golden Elixir",
    category: "Sparkling",
    description: "A refined sparkling beverage with hints of citrus and honey",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Velvet Rose",
    category: "Botanical",
    description: "Delicate rose petals infused with elderflower essence",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Midnight Noir",
    category: "Premium",
    description: "Dark berry blend with a mysterious, complex finish",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=600&fit=crop",
  },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            The Collection
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            Crafted to
            <span className="italic text-secondary"> Perfection</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-gold/90 text-charcoal text-xs tracking-widest uppercase rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
