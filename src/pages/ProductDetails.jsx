import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  ChevronLeft,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";
import { BottleSilhouette } from "../components/ProductCard";
import ProductSection from "../components/ProductSection";

const categoryIngredients = {
  juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
  "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
  "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
  "sparkling-water": ["Carbonated spring water", "Natural flavour"],
  milk: ["Pasteurised milk", "Vitamin D"],
  coffee: ["Brewed coffee", "Milk", "Cane sugar"],
  tea: ["Tea extract", "Filtered water", "Natural flavour"],
  smoothies: ["Fruit puree", "Yogurt", "Honey"],
  "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
  mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
  "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
};

const categoryNutrition = {
  juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
  "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
  "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
  "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
  milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
  coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
  tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
  smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
  "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
  mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
  "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
};

const dummyReviews = [
  {
    name: "Aarav Mehta",
    rating: 5,
    date: "3 weeks ago",
    comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
  },
  {
    name: "Priya Nair",
    rating: 4,
    date: "1 month ago",
    comment: "Really good, I order this every week now. Packaging could be sturdier.",
  },
  {
    name: "Kabir Singh",
    rating: 5,
    date: "2 months ago",
    comment: "Best in this category I've tried so far. Highly recommend.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

  const [qty, setQty] = useState(1);
  const [activeView, setActiveView] = useState(0);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-ink">Product not found</h1>
        <p className="text-ink/50 mt-2">
          The drink you're looking for doesn't exist or was removed.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 mt-6 text-primary-700 font-semibold"
        >
          <ChevronLeft size={16} /> Back to Shop
        </Link>
      </div>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isWishlisted = wishlist.includes(product.id);
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(100 - (product.price / product.oldPrice) * 100)
      : null;

  const ingredients = categoryIngredients[product.category] || [];
  const nutrition = categoryNutrition[product.category] || {};

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const galleryViews = [
    { rotate: 0, scale: 1 },
    { rotate: -8, scale: 0.95 },
    { rotate: 8, scale: 0.95 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-primary-700 transition-colors mb-6"
      >
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Gallery */}
        <div>
          <div
            className={`relative h-80 sm:h-96 rounded-xl5 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden`}
          >
            {discount && (
              <span className="absolute top-5 left-5 text-xs font-bold text-white bg-secondary-500 px-3 py-1.5 rounded-xl2">
                {discount}% OFF
              </span>
            )}
            <motion.div
              key={activeView}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: galleryViews[activeView].scale,
                rotate: galleryViews[activeView].rotate,
              }}
              transition={{ duration: 0.35 }}
            >
              <BottleSilhouette className="w-40 sm:w-48" />
            </motion.div>
          </div>

          <div className="flex gap-3 mt-4">
            {galleryViews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveView(i)}
                className={`relative flex-1 h-20 rounded-xl3 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden ring-2 transition-all ${
                  activeView === i ? "ring-primary-500" : "ring-transparent opacity-70"
                }`}
              >
                <BottleSilhouette className="w-10" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
            {product.category.replace("-", " ")}
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-ink mt-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-1.5 mt-2">
            <Star size={16} className="fill-secondary-500 text-secondary-500" />
            <span className="font-semibold text-ink/80 text-sm">{product.rating}</span>
            <span className="text-ink/40 text-sm">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-ink">₹{product.price}</span>
            {product.oldPrice && (
              <span className="text-lg text-ink/40 line-through">₹{product.oldPrice}</span>
            )}
            <span className="text-sm text-ink/50">/ {product.size}</span>
          </div>

          <p className="text-ink/60 text-sm leading-relaxed mt-5">
            {product.description}
          </p>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3 mt-7">
            <div className="flex items-center bg-primary-50 rounded-xl3 px-1.5 py-1.5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid place-items-center w-9 h-9 rounded-xl2 bg-white text-primary-700 shadow-softer"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-10 text-center font-semibold text-ink">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid place-items-center w-9 h-9 rounded-xl2 bg-white text-primary-700 shadow-softer"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => addToCart(product, qty)}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors"
            >
              <ShoppingCart size={17} />
              {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
            </motion.button>

            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="grid place-items-center w-12 h-12 rounded-xl3 bg-white border border-primary-100 shadow-softer shrink-0"
            >
              <Heart
                size={19}
                className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
              />
            </button>
          </div>

          {cartItem && (
            <div className="flex items-center gap-2 mt-3 text-sm text-primary-700 bg-primary-50 rounded-xl2 px-3 py-2 w-fit">
              <button
                onClick={() => updateQty(product.id, cartItem.qty - 1)}
                className="font-bold px-1"
              >
                −
              </button>
              {cartItem.qty} in cart
              <button
                onClick={() => updateQty(product.id, cartItem.qty + 1)}
                className="font-bold px-1"
              >
                +
              </button>
            </div>
          )}

          {/* Trust row */}
          <div className="flex flex-wrap gap-5 mt-7 pt-6 border-t border-primary-100/60">
            <div className="flex items-center gap-2 text-xs text-ink/55">
              <Truck size={16} className="text-primary-600" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2 text-xs text-ink/55">
              <ShieldCheck size={16} className="text-primary-600" /> Secure Payment
            </div>
            <div className="flex items-center gap-2 text-xs text-ink/55">
              <RotateCcw size={16} className="text-primary-600" /> Easy Returns
            </div>
          </div>

          {/* Ingredients */}
          {ingredients.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-ink mb-2.5">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs font-medium text-ink/60 bg-primary-50 px-3 py-1.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition facts */}
          {Object.keys(nutrition).length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-ink mb-2.5">
                Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  ["Calories", nutrition.calories],
                  ["Sugar", nutrition.sugar],
                  ["Protein", nutrition.protein],
                  ["Sodium", nutrition.sodium],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-white border border-primary-100 rounded-xl2 py-3 text-center"
                  >
                    <p className="text-sm font-bold text-ink">{value}</p>
                    <p className="text-[10px] text-ink/45 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-14 sm:mt-16 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">
          Customer Reviews
        </h2>
        <div className="space-y-4">
          {dummyReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl4 shadow-softer p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-xs text-ink/40">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={
                        i < review.rating
                          ? "fill-secondary-500 text-secondary-500"
                          : "text-ink/15"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-ink/60 mt-3 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-4">
          <ProductSection
            title="You Might Also Like"
            subtitle="More from this category"
            products={related}
            viewAllLink={`/shop?category=${product.category}`}
          />
        </div>
      )}
    </div>
  );
}
