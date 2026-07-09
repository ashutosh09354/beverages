import { motion } from "framer-motion";
import { featuredCategories } from "../data/categories";
import { getBestSellers, getTrending, getNewArrivals } from "../data/products";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductSection from "../components/ProductSection";
import OfferBanner from "../components/OfferBanner";
import PopularBrands from "../components/PopularBrands";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const bestSellers = getBestSellers();
  const trending = getTrending();
  const newArrivals = getNewArrivals();

  return (
    <div>
      <Hero />

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl sm:text-2xl font-bold text-ink">
              Featured Categories
            </h2>
            <p className="text-ink/50 text-sm mt-1">
              Shop by what you're craving
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featuredCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <ProductSection
        title="Best Sellers"
        subtitle="Top products loved by our customers"
        products={bestSellers}
      />

      {/* Offer Banner */}
      <OfferBanner />

      {/* Trending Drinks */}
      <ProductSection
        title="Trending Drinks"
        subtitle="Most popular right now"
        products={trending}
      />

      {/* New Arrivals */}
      <ProductSection
        title="New Arrivals"
        subtitle="Freshly added to the shelf"
        products={newArrivals}
      />

      {/* Popular Brands */}
      <PopularBrands />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
