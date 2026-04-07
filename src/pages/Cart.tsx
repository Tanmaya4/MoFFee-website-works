import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-charcoal text-primary-foreground">
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
        {/* Product Row — full width like collections */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border-b border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center w-full">
            {/* Image side */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[420px] overflow-hidden bg-charcoal">
              <img
                src="/images/Thumbnail.png"
                alt="Moffee"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Details side */}
            <div className="w-full md:w-1/2 px-8 sm:px-12 lg:px-20 py-10 md:py-0">
              <p className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">
                Premium Coffee
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">
                Moffee
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                100ml spouch packet · Shelf life 2 weeks
              </p>

              {/* Quantity selector */}
              <div className="flex items-center gap-6 mb-10">
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
                    className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Customer Details — full width row */}
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
              {/* First Name */}
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

              {/* Last Name */}
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

              {/* Contact Number */}
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
    </div>
  );
};

export default Cart;
