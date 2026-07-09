import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductSection({
  id,
  title,
  subtitle,
  products,
  viewAllLink = "/shop",
}) {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8 * dir;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (!products || products.length === 0) return null;

  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">{title}</h2>
          {subtitle && <p className="text-ink/50 text-sm mt-1">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={viewAllLink}
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            View all <ArrowRight size={15} />
          </Link>
          <div className="hidden md:flex items-center gap-1.5">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="grid place-items-center w-9 h-9 rounded-full bg-white shadow-softer text-ink/60 hover:text-primary-700 hover:shadow-soft transition-all"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="grid place-items-center w-9 h-9 rounded-full bg-white shadow-softer text-ink/60 hover:text-primary-700 hover:shadow-soft transition-all"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="w-[46%] xs:w-[42%] sm:w-[30%] md:w-[22%] lg:w-[18%] shrink-0"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <Link
        to={viewAllLink}
        className="sm:hidden mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-primary-700"
      >
        View all <ArrowRight size={15} />
      </Link>
    </section>
  );
}
