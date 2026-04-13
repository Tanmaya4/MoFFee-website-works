import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import heroVideo from "@/assets/pt2.mp4";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const CartSkeleton = () => (
  <div className="min-h-screen bg-charcoal">
    {/* Header skeleton */}
    <div className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-white/10">
      <div className={`h-5 w-20 rounded bg-white/10 ${shimmer}`} />
      <div className={`h-6 w-28 rounded bg-white/10 ${shimmer}`} />
      <div className="w-20" />
    </div>

    {/* Video section skeleton */}
    <div className={`w-full h-80 sm:h-96 md:h-[420px] bg-white/5 border-b border-white/10 ${shimmer}`}>
      <div className="flex flex-col justify-center items-start h-full px-8 sm:px-12 lg:px-20 gap-4">
        <div className={`h-3 w-32 rounded bg-white/10 ${shimmer}`} />
        <div className={`h-10 w-48 rounded bg-white/10 ${shimmer}`} />
        <div className={`h-4 w-64 rounded bg-white/10 ${shimmer}`} />
        <div className={`h-12 w-52 rounded-full bg-white/10 mt-4 ${shimmer}`} />
      </div>
    </div>

    {/* Customer details skeleton */}
    <div className="px-8 sm:px-12 lg:px-20 py-12 md:py-16 border-b border-white/10">
      <div className={`h-7 w-48 rounded bg-white/10 mb-8 ${shimmer}`} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className={`h-3 w-24 rounded bg-white/10 ${shimmer}`} />
            <div className={`h-12 w-full rounded-lg bg-white/10 ${shimmer}`} />
          </div>
        ))}
      </div>
    </div>

    {/* Order summary skeleton */}
    <div className="px-8 sm:px-12 lg:px-20 py-12 md:py-16 flex items-center justify-between max-w-5xl gap-6">
      <div className="flex flex-col gap-2">
        <div className={`h-3 w-28 rounded bg-white/10 ${shimmer}`} />
        <div className={`h-5 w-36 rounded bg-white/10 ${shimmer}`} />
      </div>
      <div className={`h-14 w-44 rounded-full bg-white/10 ${shimmer}`} />
    </div>
  </div>
);

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Checkout | Moffee"
        description="Complete your order for Moffee premium cold brew beverages."
        path="/cart"
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CartSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-charcoal text-primary-foreground"
        >
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between px-6 sm:px-12 py-4">
              <Link
                to="/product/moffee"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm tracking-wider uppercase">Back</span>
              </Link>
              <h1 className="text-lg sm:text-xl font-serif tracking-wider text-white">
                Your Cart
              </h1>
              <div className="w-20" />
            </div>
          </header>

          <main className="pt-24 pb-16">
            {/* Product Row */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full border-b border-white/10"
            >
              <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 sm:px-12 lg:px-20">
                  <p className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">
                    Premium Coffee
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
                    Moffee
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                    100ml spouch packet · Shelf life 1 week
                  </p>

                  <div className="flex items-center gap-6">
                    <span className="text-sm tracking-wider uppercase text-white/50">
                      Quantity
                    </span>
                    <div className="flex items-center border border-white/20 rounded-full overflow-hidden">
                      <button
                        onClick={decrement}
                        className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-3 text-white font-medium min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={increment}
                        className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors active:text-primary"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Customer Details */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full border-b border-white/10"
            >
              <div className="px-8 sm:px-12 lg:px-20 py-12 md:py-16">
                <h3 className="text-xl sm:text-2xl font-serif text-white mb-8 tracking-wide">
                  Customer Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-white/50">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-white/50">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter last name"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-white/50">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Enter contact number"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Place Order */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full px-8 sm:px-12 lg:px-20 py-12 md:py-16"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl gap-6">
                <div>
                  <p className="text-white/50 text-sm tracking-wider uppercase mb-1">
                    Order Summary
                  </p>
                  <p className="text-white text-lg">
                    Moffee × <span className="font-medium">{quantity}</span>
                  </p>
                </div>
                <button className="px-12 py-4 bg-gradient-hero-button text-white text-sm tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                  Place Order
                </button>
              </div>
            </motion.section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Cart;
