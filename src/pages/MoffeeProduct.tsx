import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Worm,
  Zap,
  Coffee,
  Sun,
  Droplets,
  Eye,
  Hand,
  Wind,
  Ear,
  UtensilsCrossed,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";
import { useState, useEffect } from "react";
import MoffeeProductSkeleton from "@/components/MoffeeProductSkeleton";
import testReportPage1 from "@/assets/test-report-page1.jpg";
import testReportPage2 from "@/assets/test-report-page2.jpg";

const benefits = [
  {
    icon: Zap,
    title: "Natural Energy Boost",
    description:
      "Sustained energy without the crash, powered by natural caffeine and adaptogens. Solves tiredness, brain fog, work fatigue.",
    bgImage: "/images/face.png"
  },
  {
    icon: Worm,
    title: "Gut Parasite Killer",
    description: "Eliminates harmful intestinal worms and supports a healthier digestive system.",
    bgImage: "/images/worm.png"
  },
  {
    icon: ShieldPlus,
    title: "Strengthens immunity",
    description:
      "Fights everyday infections. Solves frequent colds, weak immunity, pollution impact.",
    bgImage: "/images/viruses.png"
  },
  {
    icon: Stethoscope,
    title: "Aids in digestion",
    description: "Fixes digestion, acidity & bloating naturally, gas, heartburn, heavy stomach after meals",
    bgImage: "/images/stomach.png"
  }
];

const ingredients = [
  "Organic Cold Brew Coffee",
  "Filtered Spring Water",
  "Earthly Atimadhuram Root",
  "Aromatic Clove",
];

const fiveSenseExperience = [
  {
    icon: Eye,
    sense: "See",
    description: "A dark, rich brew that instantly sparks craving."
  },
  {
    icon: Hand,
    sense: "Touch",
    description: "Cool and smooth liquid pouch bed in hand, crafted to feel premium from the first hold."
  },
  {
    icon: Wind,
    sense: "Smell",
    description: "Warm clove aromatics rise the moment it opens, fresh and inviting."
  },
  {
    icon: Ear,
    sense: "Hear",
    description: "The deep, satisfying gulp sounds of bold black coffee as you drinks down."
  },
  {
    icon: UtensilsCrossed,
    sense: "Taste",
    description: "Earthy mulethi opens softly, leaving a natural sweetness that lingers long after the sip."
  }
];

const nutritionFacts = [
  { label: "Calories", value: "88", unit: "" },
  { label: "Caffeine", value: "120", unit: "mg" },
  { label: "Added Sugar", value: "0", unit: "" },
  { label: "Protein", value: "6", unit: "g" },
  { label: "Carbohydrates", value: "14", unit: "g" }
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPast(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Moffee Premium Cold Brew | Energy for the Grind"
        description="Experience the perfect balance of bold flavor and natural energy. Moffee is a premium cold brew crafted with organic coffee, spring water, atimadhuram root, and clove."
        path="/product/moffee"
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
        <motion.div
          key="skeleton"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <MoffeeProductSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
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
      {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
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
              <Link to="/cart">
                <button className="mt-4 sm:mt-8 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-hero-button text-white text-sm sm:text-base tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                  Buy Now
                </button>
              </Link>
              <p className="mt-6 sm:mt-8 text-sm sm:text-base text-white/70">
                Moffee is served in 100ml spouch packet with the shelf life of 1 week
              </p>
            </motion.div>
          </motion.div>
        </div>

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
                The idea behind Moffee was born at home. Growing up, my mother would prepare different types of traditional kashayam using fresh leaves, roots, and healing herbs. Because of this daily ritual, I rarely fell sick: no common flu, no frequent viruses, and I can hardly remember the last time I even had a simple nose block. Along with strong immunity, it helped me grow physically healthier and stronger. This lived experience became the foundation of Moffee, a blend of ancient wisdom and everyday wellness.
              </p>
              <p>
                Moffee isn't just a simple coffee, it's inspired by the ancient Indian framework of kashayam, a time-honored Ayurvedic herbal decoction that uses the healing power of liquids to support body and mind. In Ayurveda, kashayam refers to medicinal brews made by simmering herbs and spices to extract their therapeutic essence, promoting digestion, immunity, detoxification, and overall well-being. Our Moffee carries forward this holistic legacy, blending traditional wisdom with modern taste to nourish both health and spirit.
              </p>
              <p>
                Guided by our vision and mission, Moffee aims to take this ancient wisdom to the world, sharing the truth that true greatness often comes from the knowledge of earlier generations. Their understanding of natural healing is timeless and unparalleled, and through Moffee, we honor that legacy while making it accessible for modern lives everywhere and everyday life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img src="/images/coffee-beans-pattern.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
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
                className="relative overflow-hidden bg-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-shadow duration-300 border-2 border-gold/40"
              >
                {benefit.bgImage && (
                  <img
                    src={benefit.bgImage}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
                  />
                )}

                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-foreground mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five-Sense Experience Section */}
      <section className="py-20 sm:py-28 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase">
              Taste Profile
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
              The Lifecycle of <span className="italic text-primary">Five-Sense</span> Experience
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {fiveSenseExperience.map((item, index) => (
              <motion.div
                key={item.sense}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-5 sm:gap-6 p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-gold/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-gold mb-1">{item.sense}</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
              Premium <span className="italic text-gold">Ingredients</span>
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
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  <span className="text-charcoal font-medium text-sm sm:text-base">{ingredient}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Moments Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img src="/images/coffee-beans-pattern.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
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
                className="relative p-6 sm:p-8 bg-card rounded-2xl border-2 border-gold/40 text-center group hover:border-gold/60 transition-colors"
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
      <section className="relative py-20 sm:py-28 text-white overflow-hidden">
        <img
          src="/images/nutrition-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
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

      {/* Test Report Section */}
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
              Lab Certified
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
              Test <span className="italic text-gold">Report</span>
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto text-base sm:text-lg">
              Government approved and NABL accredited lab certified results.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[testReportPage1, testReportPage2].map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gold/20"
              >
                <img
                  src={page}
                  alt={`Test Report Page ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
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
              <Link to="/cart">
                <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-hero-button text-white text-sm sm:text-base tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                  Buy Now
                </button>
              </Link>
            </div>
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
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default MoffeeProduct;
