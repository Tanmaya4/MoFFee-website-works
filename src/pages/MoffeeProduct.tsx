import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Zap, Heart, Coffee, Sun, Droplets } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: Zap,
    title: "Natural Energy Boost",
    description: "Sustained energy without the crash, powered by natural caffeine and adaptogens"
  },
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "No artificial preservatives, flavors, or sweeteners—just pure goodness"
  },
  {
    icon: Heart,
    title: "Mood Enhancer",
    description: "Elevates your mood and focus with carefully selected botanical extracts"
  },
  {
    icon: Coffee,
    title: "Premium Cold Brew",
    description: "Slow-steeped for 16 hours to extract the smoothest, richest flavor"
  }
];

const ingredients = [
  "Organic Cold Brew Coffee",
  "Filtered Spring Water",
  "Organic Cane Sugar",
  "Natural Vanilla Extract",
  "Himalayan Pink Salt",
  "Ashwagandha Root Extract",
  "Lion's Mane Mushroom",
  "L-Theanine (from Green Tea)"
];

const flavorNotes = [
  { note: "Dark Chocolate", intensity: 85 },
  { note: "Caramel", intensity: 70 },
  { note: "Vanilla Bean", intensity: 60 },
  { note: "Toasted Hazelnut", intensity: 45 },
  { note: "Honey", intensity: 35 }
];

const nutritionFacts = [
  { label: "Calories", value: "45", unit: "" },
  { label: "Caffeine", value: "120", unit: "mg" },
  { label: "Sugar", value: "8", unit: "g" },
  { label: "Protein", value: "1", unit: "g" },
  { label: "Carbohydrates", value: "10", unit: "g" }
];

const bestMoments = [
  {
    icon: Sun,
    title: "Morning Ritual",
    description: "Start your day with clarity and purpose"
  },
  {
    icon: Zap,
    title: "Pre-Workout",
    description: "Natural energy for your fitness routine"
  },
  {
    icon: Coffee,
    title: "Afternoon Focus",
    description: "Beat the midday slump without the jitters"
  },
  {
    icon: Droplets,
    title: "Creative Sessions",
    description: "Fuel your imagination and productivity"
  }
];

const MoffeeProduct = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPast(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolledPast 
            ? 'bg-background/95 backdrop-blur-md border-b border-border' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/collections"
              className={`flex items-center gap-2 transition-colors ${
                isScrolledPast 
                  ? 'text-muted-foreground hover:text-foreground' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <ArrowLeft size={20} />
              <span className="text-sm tracking-widest uppercase hidden sm:inline">Back to Collection</span>
            </Link>
            <Link
              to="/"
              className={`text-xl sm:text-2xl font-serif font-semibold tracking-wide transition-colors ${
                isScrolledPast ? 'text-foreground' : 'text-white'
              }`}
            >
              MOFFEE
            </Link>
            <div className="w-16 sm:w-32" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/stitch.jpg)',
          }}
        />
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal/90" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.4em] uppercase font-medium">
              Premium Cold Brew
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white">
              Mo<span className="italic text-gold">FF</span>ee
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light italic">
              "Where Every Sip Sparks Your Potential"
            </p>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Crafted for dreamers, creators, and go-getters. Experience the perfect balance of 
              bold flavor and natural energy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="mt-4 sm:mt-8 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-hero-button text-white text-sm sm:text-base tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                Buy Now — $4.99
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase">
              The Story
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
              What Makes Moffee <span className="italic">Special</span>
            </h2>
            <div className="mt-8 sm:mt-12 space-y-6 text-base sm:text-lg text-charcoal/70 leading-relaxed">
              <p>
                Moffee was born from a simple belief: your daily coffee should be more than just caffeine. 
                It should be a moment of pure pleasure, a catalyst for creativity, and a gentle nudge 
                towards your best self.
              </p>
              <p>
                We source our beans from the misty highlands of Colombia and Ethiopia, where altitude and 
                tradition combine to create exceptional flavor profiles. Our cold brew process, perfected 
                over years of experimentation, extracts every nuance of chocolate, caramel, and fruit notes 
                while leaving bitterness behind.
              </p>
              <p>
                But we didn't stop there. We've infused our cold brew with adaptogenic herbs—ashwagandha 
                for calm focus, lion's mane for cognitive clarity, and L-theanine for smooth, sustained 
                energy. The result? A beverage that doesn't just wake you up—it elevates you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase">
              Why Moffee
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">
              Key <span className="italic text-primary">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-foreground mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Profile Section */}
      <section className="py-20 sm:py-28 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
                Taste Profile
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
                Flavor <span className="italic text-gold-light">Notes</span>
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed text-base sm:text-lg">
                A symphony of carefully balanced flavors that dance on your palate. 
                From the first sip to the lingering finish, every note tells a story.
              </p>
              
              <div className="mt-8 sm:mt-12 space-y-5 sm:space-y-6">
                {flavorNotes.map((flavor, index) => (
                  <motion.div
                    key={flavor.note}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="font-medium">{flavor.note}</span>
                      <span className="text-white/50">{flavor.intensity}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${flavor.intensity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop"
                  alt="Moffee flavor profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-gold/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase">
              Pure & Simple
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
              Premium <span className="italic">Ingredients</span>
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto text-base sm:text-lg">
              Every ingredient is carefully selected for quality, taste, and functional benefits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-charcoal font-medium text-sm sm:text-base">{ingredient}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Moments Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase">
              Perfect For
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">
              Best Moments to <span className="italic text-primary">Enjoy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bestMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 sm:p-8 bg-card rounded-2xl border border-border text-center group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <moment.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">{moment.title}</h3>
                <p className="text-sm text-muted-foreground">{moment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="py-20 sm:py-28 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
                Transparency
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
                Nutritional <span className="italic text-gold-light">Information</span>
              </h2>
              <p className="mt-4 text-white/60 text-base sm:text-lg">Per 12 fl oz (355ml) serving</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
            >
              {nutritionFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-4 sm:p-6 text-center border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-serif text-gold mb-1">
                    {fact.value}<span className="text-sm text-gold/70">{fact.unit}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-gold/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
              Ready to <span className="italic text-primary">Elevate</span> Your Day?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Join thousands who have made Moffee their daily ritual. 
              Experience the difference that premium ingredients make.
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-hero-button text-white text-sm sm:text-base tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                Buy Now — $4.99
              </button>
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-foreground text-foreground text-sm sm:text-base tracking-widest uppercase rounded-full font-medium hover:bg-foreground hover:text-background transition-all">
                Subscribe & Save 20%
              </button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free shipping on orders over $35 • 30-day satisfaction guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Link to="/" className="text-xl font-serif font-semibold tracking-wide text-gold mb-4 inline-block">
            MOFFEE
          </Link>
          <p className="text-xs sm:text-sm text-primary-foreground/40">
            © 2025 Moffee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MoffeeProduct;
