import { motion } from "framer-motion";
import { Leaf, Truck, ShieldCheck, Heart, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "Freshness First",
    description:
      "Every drink is sourced with care and delivered at peak freshness — no shortcuts, no compromises.",
  },
  {
    icon: Truck,
    title: "Fast, Reliable Delivery",
    description:
      "From our warehouse to your door in minutes, so your drinks arrive as cold and fresh as intended.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Clear ingredients, honest pricing, and secure checkout — every single time you order.",
  },
  {
    icon: Heart,
    title: "Made for You",
    description:
      "We obsess over the little details, from packaging to flavour, because every sip should feel premium.",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "300+", label: "Beverages" },
  { value: "12", label: "Categories" },
  { value: "4.8★", label: "Average Rating" },
];

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-bg to-secondary-50">
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-10 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary-200/40 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="grid place-items-center w-14 h-14 rounded-xl3 bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lift mx-auto mb-5">
              <Droplet size={26} fill="white" strokeWidth={0} />
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-ink leading-tight">
              We believe every sip
              <br />
              should feel <span className="text-primary-600">good</span>.
            </h1>
            <p className="text-ink/60 text-base sm:text-lg mt-5 max-w-xl mx-auto">
              Quenchly started with a simple idea: premium, fresh beverages
              shouldn't be hard to find or slow to arrive. So we built a
              place where they're both — every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-xl4 shadow-lift p-6 sm:p-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary-600">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-ink/50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">Our Story</h2>
          <div className="space-y-4 text-ink/60 text-sm sm:text-base leading-relaxed">
            <p>
              Quenchly was born out of a frustration we all know too well —
              wanting a really good drink, right now, without settling for
              whatever's warm and half-stocked at the nearest store.
            </p>
            <p>
              We started by curating the categories people actually reach
              for — juices, energy drinks, coffee, protein shakes — and
              built a delivery experience fast enough to keep every bottle
              as fresh as the day it was made.
            </p>
            <p>
              Today, Quenchly is a home for anyone who takes their drinks
              seriously: the after-workout protein shake, the 4pm coffee
              save, the sparkling water that makes a Tuesday feel a little
              more special. We're just getting started.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-ink mb-8 text-center"
        >
          What We Stand For
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 bg-white rounded-xl4 shadow-softer hover:shadow-lift p-5 sm:p-6 transition-shadow"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl2 bg-primary-50 text-primary-600 shrink-0">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-ink">{title}</h3>
                <p className="text-xs sm:text-sm text-ink/55 mt-1.5 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-ink">
            Ready to find your next favourite drink?
          </h2>
          <Link to="/shop">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift"
            >
              Start Shopping
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
