import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import heroVideo from "@/assets/pt2.mp4";
import { createMoffeeCart, MOFFEE_VARIANT_ID } from "@/lib/shopify";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const CartSkeleton = () => (
  <div className="min-h-screen bg-charcoal">
    <div className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-white/10">
      <div className={`h-5 w-20 rounded bg-white/10 ${shimmer}`} />
      <div className={`h-6 w-28 rounded bg-white/10 ${shimmer}`} />
      <div className="w-20" />
    </div>
    <div className={`w-full h-80 sm:h-96 md:h-[420px] bg-white/5 border-b border-white/10 ${shimmer}`} />
    <div className="px-8 sm:px-12 lg:px-20 py-12 md:py-16 border-b border-white/10">
      <div className={`h-7 w-48 rounded bg-white/10 mb-8 ${shimmer}`} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-12 w-full rounded-lg bg-white/10 ${shimmer}`} />
        ))}
      </div>
    </div>
  </div>
);

type PaymentMethod = "razorpay" | "upi";

type Product = {
  id: string;
  name: string;
  eyebrow: string;
  price: number;
  size: string;
  shelfLife: string;
  video: string | null;
};

const PRODUCTS: Product[] = [
  {
    id: "moffee",
    name: "Moffee",
    eyebrow: "Premium Coffee",
    price: 40,
    size: "100ml",
    shelfLife: "1 week",
    video: heroVideo,
  },
  {
    id: "moffee-nc",
    name: "MoFFee NC",
    eyebrow: "Non-Caffeine",
    price: 40,
    size: "100ml",
    shelfLife: "2 days",
    video: "/videos/muleti-cart.mp4",
  },
];

type Field = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email";
};

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
  className,
  maxLength,
  inputMode,
}: Field) => (
  <div className={`flex flex-col gap-2 ${className || ""}`}>
    <label className="text-xs tracking-[0.2em] uppercase text-white/50">
      {label} {required && <span className="text-primary/70">*</span>}
    </label>
    <input
      type={type}
      value={value}
      maxLength={maxLength}
      inputMode={inputMode}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition-colors ${
        error ? "border-red-400/60 focus:border-red-400" : "border-white/20 focus:border-primary"
      }`}
    />
    {error && <span className="text-xs text-red-400/80">{error}</span>}
  </div>
);

const Cart = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    () => Object.fromEntries(PRODUCTS.map((p) => [p.id, 1]))
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isLoading, setIsLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const increment = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: (q[id] ?? 0) + 1 }));
  const decrement = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) - 1) }));

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const total = PRODUCTS.reduce(
    (sum, p) => sum + p.price * (quantities[p.id] ?? 0),
    0
  );
  const hasItems = total > 0;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Required";
    if (!/^\d{10}$/.test(contact.trim())) e.contact = "Enter a 10-digit phone";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";
    if (!line1.trim()) e.line1 = "Required";
    if (!city.trim()) e.city = "Required";
    if (!stateName.trim()) e.stateName = "Required";
    if (!/^\d{6}$/.test(pincode.trim())) e.pincode = "Enter a 6-digit pincode";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!hasItems) {
      toast.error("Add at least one item to place your order");
      return;
    }
    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSubmitting(true);
    try {
      const result = await createMoffeeCart(MOFFEE_VARIANT_ID, quantity);
      if (!result?.checkoutUrl) {
        toast.error("Couldn't reach checkout. Please try again.");
        setSubmitting(false);
        return;
      }
      // Open Shopify's secure hosted checkout in a new tab
      window.open(result.checkoutUrl, "_blank");
      setSubmitting(false);
      setSuccess(
        "MOF-" + Math.random().toString(36).slice(2, 8).toUpperCase()
      );
      toast.success("Redirecting to secure checkout…");
    } catch (err) {
      console.error("Checkout failed:", err);
      toast.error("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Checkout | Moffee"
        description="Complete your order for Moffee premium cold brew beverages."
        path="/cart"
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="skeleton" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
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
            <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center justify-between px-6 sm:px-12 py-4">
                <Link
                  to="/product/moffee"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-sm tracking-wider uppercase">Back</span>
                </Link>
                <h1 className="text-lg sm:text-xl font-serif tracking-wider text-white">Your Cart</h1>
                <div className="w-20" />
              </div>
            </header>

            <main className="pt-24 pb-16">
              {/* Hero / products */}
              {PRODUCTS.map((product, idx) => (
                <motion.section
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`w-full border-b border-white/10 ${idx > 0 ? "mt-4 sm:mt-6" : ""}`}
                >
                  <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden">
                    {product.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                      >
                        <source src={product.video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-black" />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 sm:px-12 lg:px-20">
                      <p className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-2">{product.eyebrow}</p>
                      <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3">{product.name}</h2>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                        {product.size} spouch packet · Shelf life {product.shelfLife} · ₹{product.price}
                      </p>
                      <div className="flex items-center gap-6">
                        <span className="text-sm tracking-wider uppercase text-white/50">Quantity</span>
                        <div className="flex items-center border border-white/20 rounded-full overflow-hidden">
                          <button
                            onClick={() => decrement(product.id)}
                            className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-6 py-3 text-white font-medium min-w-[3rem] text-center">
                            {quantities[product.id] ?? 0}
                          </span>
                          <button
                            onClick={() => increment(product.id)}
                            className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors active:text-primary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              ))}

              <div className="px-8 sm:px-12 lg:px-20 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 max-w-7xl mx-auto">
                {/* Left: forms */}
                <div className="flex flex-col gap-12">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 tracking-wide">Contact Details</h3>
                    <p className="text-white/50 text-sm mb-8">We'll use this to update you about your order.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="First Name" value={firstName} onChange={setFirstName} required error={errors.firstName} placeholder="John" />
                      <Input label="Last Name" value={lastName} onChange={setLastName} placeholder="Doe" />
                      <Input
                        label="Phone"
                        value={contact}
                        onChange={setContact}
                        required
                        error={errors.contact}
                        placeholder="10-digit mobile"
                        type="tel"
                        inputMode="tel"
                        maxLength={10}
                      />
                      <Input
                        label="Email (optional)"
                        value={email}
                        onChange={setEmail}
                        error={errors.email}
                        placeholder="you@example.com"
                        type="email"
                        inputMode="email"
                      />
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 tracking-wide">Delivery Address</h3>
                    <p className="text-white/50 text-sm mb-8">Where should we send your Moffee?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input
                        label="Address Line 1"
                        value={line1}
                        onChange={setLine1}
                        required
                        error={errors.line1}
                        placeholder="House no., street"
                        className="md:col-span-2"
                      />
                      <Input
                        label="Address Line 2"
                        value={line2}
                        onChange={setLine2}
                        placeholder="Apartment, landmark (optional)"
                        className="md:col-span-2"
                      />
                      <Input label="City" value={city} onChange={setCity} required error={errors.city} placeholder="Bengaluru" />
                      <Input label="State" value={stateName} onChange={setStateName} required error={errors.stateName} placeholder="Karnataka" />
                      <Input
                        label="Pincode"
                        value={pincode}
                        onChange={setPincode}
                        required
                        error={errors.pincode}
                        placeholder="560001"
                        inputMode="numeric"
                        maxLength={6}
                      />
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 tracking-wide">Payment Method</h3>
                    <p className="text-white/50 text-sm mb-8">Choose how you'd like to pay.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(
                        [
                          {
                            key: "upi" as const,
                            title: "UPI",
                            desc: "Pay directly to our UPI ID",
                          },
                          {
                            key: "razorpay" as const,
                            title: "Card / Netbanking",
                            desc: "Via Razorpay: cards, UPI, wallets",
                          },
                        ] as const
                      ).map((opt) => {
                        const selected = paymentMethod === opt.key;
                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setPaymentMethod(opt.key)}
                            className={`text-left p-5 rounded-xl border transition-all ${
                              selected
                                ? "border-primary bg-primary/10"
                                : "border-white/15 hover:border-white/30 bg-white/[0.02]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{opt.title}</span>
                              <span
                                className={`w-4 h-4 rounded-full border ${
                                  selected ? "border-primary bg-primary" : "border-white/30"
                                }`}
                              />
                            </div>
                            <p className="text-white/50 text-xs">{opt.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </motion.section>
                </div>

                {/* Right: summary */}
                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="lg:sticky lg:top-28 self-start w-full"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                    <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 mb-5">Order Summary</h4>
                    {PRODUCTS.filter((p) => (quantities[p.id] ?? 0) > 0).map((p) => {
                      const qty = quantities[p.id] ?? 0;
                      return (
                        <div key={p.id} className="flex items-center justify-between py-3 border-b border-white/10">
                          <div>
                            <p className="text-white font-medium">{p.name}</p>
                            <p className="text-white/50 text-xs mt-0.5">
                              ₹{p.price} × {qty}
                            </p>
                          </div>
                          <p className="text-white font-medium">₹{p.price * qty}</p>
                        </div>
                      );
                    })}
                    {!hasItems && (
                      <p className="py-4 text-white/40 text-sm text-center border-b border-white/10">
                        No items selected.
                      </p>
                    )}
                    <div className="flex items-center justify-between py-3 text-sm">
                      <span className="text-white/60">Delivery</span>
                      <span className="text-white/60">Free</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-t border-white/10 mt-2">
                      <span className="text-white/70 text-sm tracking-wider uppercase">Total</span>
                      <span className="text-white text-2xl font-serif">₹{total}</span>
                    </div>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={submitting || !hasItems}
                      className="w-full mt-4 px-8 py-4 bg-gradient-hero-button text-white text-sm tracking-widest uppercase rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Processing…
                        </>
                      ) : (
                        `Place Order · ₹${total}`
                      )}
                    </button>
                    <p className="text-center text-white/40 text-[11px] mt-4 leading-relaxed">
                      By placing the order you agree to our terms. Payment is processed securely.
                    </p>
                  </div>
                </motion.aside>
              </div>
            </main>

            {/* Success Modal */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full max-w-md rounded-2xl bg-charcoal border border-white/10 p-8 text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-9 h-9 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Order Confirmed</h3>
                    <p className="text-white/60 text-sm mb-5 leading-relaxed">
                      Thank you! We've received your order and will be in touch shortly.
                    </p>
                    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 mb-6">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-white/40">Order ID</p>
                      <p className="text-white font-mono text-sm mt-1 break-all">{success}</p>
                    </div>
                    <button
                      onClick={() => navigate("/")}
                      className="w-full px-8 py-3.5 rounded-full bg-gradient-hero-button text-white text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
                    >
                      Back to Home
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
