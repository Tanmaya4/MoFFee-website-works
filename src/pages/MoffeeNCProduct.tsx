import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Activity,
  Leaf,
  Moon,
  Sun,
  Droplets,
  Eye,
  Hand,
  Wind,
  Ear,
  UtensilsCrossed,
  HeartPulse,
  Sparkles,
  Flame,
  Coffee,
} from "lucide-react";
import { useState, useEffect } from "react";
import MoffeeProductSkeleton from "@/components/MoffeeProductSkeleton";

const benefits = [
  {
    icon: Leaf,
    title: "Calm, Steady Energy",
    description:
      "A grounded lift without caffeine jitters or crashes. Clarity that comes from balance, not stimulation.",
    bgImage: "/images/face.png",
  },
  {
    icon: HeartPulse,
    title: "Soothes Throat & Digestion",
    description:
      "Herbal roots have been used for centuries to ease the throat, calm acidity, and support a happy gut.",
    bgImage: "/images/stomach.png",
  },
  {
    icon: Sparkles,
    title: "Adaptogenic Wellness",
    description:
      "An Ayurvedic infusion that gently helps the body manage everyday stress and stay in rhythm.",
    bgImage: "/images/viruses.png",
  },
  {
    icon: Activity,
    title: "Controls Cholesterol",
    description:
      "Time-honored herbal roots that support healthy cholesterol levels and steady cardiovascular balance with daily use.",
    bgImage: "/images/control-cholesterol.png",
  },
];

const ingredients = [
  "Pure Herbal Root",
  "Filtered Spring Water",
  "Cardamom & Clove Aromatics",
  "Ceremonial Tulsi Leaf",
];

const fiveSenseExperience = [
  {
    icon: Eye,
    sense: "See",
    description: "A warm amber pour, glowing soft and golden in the light.",
  },
  {
    icon: Hand,
    sense: "Touch",
    description: "A cool, smooth pouch that sits effortlessly in the palm. Quiet, premium, ready.",
  },
  {
    icon: Wind,
    sense: "Smell",
    description: "Notes of herbal root, sweet cardamom, and a whisper of clove rise the moment you open it.",
  },
  {
    icon: Ear,
    sense: "Hear",
    description: "The soft, easy pour of a brew built to slow you down, not speed you up.",
  },
  {
    icon: UtensilsCrossed,
    sense: "Taste",
    description: "Naturally sweet herbal notes open first, settling into a clean finish that lingers gently.",
  },
];

const nutritionFacts = [
  { label: "Calories", value: "32", unit: "" },
  { label: "Caffeine", value: "0", unit: "mg" },
  { label: "Added Sugar", value: "0", unit: "" },
  { label: "Protein", value: "1", unit: "g" },
  { label: "Carbohydrates", value: "6", unit: "g" },
];

const bestMoments = [
  {
    icon: Moon,
    title: "Evening Wind-Down",
    description: "A calming sip to close the day without sacrificing sleep.",
  },
  {
    icon: Sun,
    title: "Midday Reset",
    description: "Soothe and reset between meetings. Focus without stimulation.",
  },
  {
    icon: Droplets,
    title: "Post-Workout Calm",
    description: "Hydrate and recover with a herbal brew that soothes from inside out.",
  },
  {
    icon: Flame,
    title: "Scorching Summers",
    description: "Built for the harsh Indian heat. A naturally cooling brew that calms inflammation and helps the body weather long, blistering heatwaves.",
  },
];

const MoffeeNCProduct = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPast(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Moffee NC | Caffeine-Free Cold Brew"
        description="A caffeine-free Ayurvedic cold brew built around herbal roots. Calm, clean, and crafted for any moment of the day."
        path="/product/moffee-nc"
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
                    ? "bg-background/95 backdrop-blur-md border-b border-border"
                    : "bg-transparent border-b border-transparent"
                }`}
              >
                <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/collections"
                      className={`flex items-center gap-2 transition-colors ${
                        isScrolledPast
                          ? "text-muted-foreground hover:text-foreground"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      <ArrowLeft size={20} />
                      <span className="text-sm tracking-widest uppercase hidden sm:inline">
                        Back to Collection
                      </span>
                    </Link>
                    <Link
                      to="/"
                      className={`text-xl sm:text-2xl font-serif font-semibold tracking-wide transition-colors ${
                        isScrolledPast ? "text-foreground" : "text-white"
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/mulethi-head.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal/90" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-32">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <span className="inline-block text-gold text-xs sm:text-sm tracking-[0.4em] uppercase font-medium">
                      Caffeine-Free Cold Brew
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white">
                      Mo<span className="italic text-gold">FF</span>ee NC
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light italic">
                      "Stillness in a sip."
                    </p>
                    <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                      An Ayurvedic infusion built around pure herbal roots, with no caffeine
                      and no compromise. Made for evenings, mindful breaks, and every quiet hour
                      in between.
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
                        Moffee NC is served in a 100ml spouch packet with a shelf life of 2 days
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
                      A Quieter Side of <span className="italic">Moffee</span>
                    </h2>
                    <div className="mt-8 sm:mt-12 space-y-6 text-base sm:text-lg text-charcoal/70 leading-relaxed">
                      <p>
                        Not every moment calls for caffeine. Some call for stillness: a slow evening, a
                        cool-down after a workout, a quiet hour before sleep. Moffee NC was built for
                        those moments, the pause, the reset, the breath between two busy hours.
                      </p>
                      <p>
                        At its heart sits a herbal blend of sweet, soothing roots with a long-standing place
                        in Ayurvedic kitchens. Brewed slowly with cardamom, clove, and tulsi, it delivers
                        the same craft and ritual as our original Moffee, simply without the kick. No
                        stimulants, no shortcuts. Just a clean, herbal cold brew you can return to any
                        time of day.
                      </p>
                      <p>
                        Moffee NC isn't a smaller version of Moffee. It's the other half of the
                        conversation, a brew that honors rest as much as we honor energy, and proves
                        that wellness can taste as deliberate as it feels.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="relative py-20 sm:py-28 overflow-hidden">
                <img
                  src="/images/coffee-beans-pattern.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                      Why Moffee NC
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-foreground">
                      Built for <span className="italic text-primary">Balance</span>
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
                      A <span className="italic text-primary">Five-Sense</span> Slowdown
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
                          <h3 className="text-lg sm:text-xl font-serif text-gold mb-1">
                            {item.sense}
                          </h3>
                          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                            {item.description}
                          </p>
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
                      Nothing Hidden, Nothing <span className="italic text-gold">Added</span>
                    </h2>
                    <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto text-base sm:text-lg">
                      A short ingredient list, chosen with care. Every entry pulls its weight.
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
                          <span className="text-charcoal font-medium text-sm sm:text-base">
                            {ingredient}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Best Moments Section */}
              <section className="relative py-20 sm:py-28 overflow-hidden">
                <img
                  src="/images/coffee-beans-pattern.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                      When to <span className="italic text-primary">Slow Down</span>
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
                        <h3 className="text-lg font-serif text-foreground mb-2">
                          {moment.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{moment.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Nutrition Section */}
              <section className="relative py-20 sm:py-28 text-white overflow-hidden">
                <img
                  src="/images/moffee-nc-nutrition-bg.jpg"
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
                      <p className="mt-4 text-white/60 text-base sm:text-lg">
                        Per 100ml serving
                      </p>
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
                            {fact.value}
                            <span className="text-sm text-gold/70">{fact.unit}</span>
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

              {/* Companion CTA: pair with the caffeinated version */}
              <section className="py-20 sm:py-28 bg-cream">
                <div className="container mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                  >
                    <span className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase">
                      The Other Half
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
                      Need a <span className="italic text-gold">Lift</span> Instead?
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed">
                      For mornings, pre-workouts, and afternoons that need a push, meet our
                      caffeinated original. Same craft, opposite intent.
                    </p>
                    <Link
                      to="/product/moffee"
                      className="inline-flex items-center gap-3 mt-8 px-6 py-3 border-2 border-charcoal text-charcoal text-sm font-medium tracking-widest uppercase rounded-full hover:bg-charcoal hover:text-white transition-colors group"
                    >
                      <Coffee className="w-4 h-4" />
                      Discover Moffee C
                    </Link>
                  </motion.div>
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
                      Make Stillness a <span className="italic text-primary">Ritual</span>
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                      A caffeine-free brew, ready when the day asks for calm. Pour a glass, your
                      evening will thank you.
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
                  <Link
                    to="/"
                    className="text-xl font-serif font-semibold tracking-wide text-gold mb-4 inline-block"
                  >
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

export default MoffeeNCProduct;
