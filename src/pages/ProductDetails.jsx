// // import { useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Star,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingCart,
// //   ChevronLeft,
// //   Truck,
// //   ShieldCheck,
// //   RotateCcw,
// // } from "lucide-react";
// // import { products } from "../data/products";
// // import { useApp } from "../context/AppContext";
// // import { BottleSilhouette } from "../components/ProductCard";
// // import ProductSection from "../components/ProductSection";

// // const categoryIngredients = {
// //   juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
// //   "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
// //   "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
// //   "sparkling-water": ["Carbonated spring water", "Natural flavour"],
// //   milk: ["Pasteurised milk", "Vitamin D"],
// //   coffee: ["Brewed coffee", "Milk", "Cane sugar"],
// //   tea: ["Tea extract", "Filtered water", "Natural flavour"],
// //   smoothies: ["Fruit puree", "Yogurt", "Honey"],
// //   "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
// //   mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
// //   "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
// // };

// // const categoryNutrition = {
// //   juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
// //   "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
// //   "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
// //   "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
// //   milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
// //   coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
// //   tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
// //   smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
// //   "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
// //   mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
// //   "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
// // };

// // const dummyReviews = [
// //   {
// //     name: "Aarav Mehta",
// //     rating: 5,
// //     date: "3 weeks ago",
// //     comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
// //   },
// //   {
// //     name: "Priya Nair",
// //     rating: 4,
// //     date: "1 month ago",
// //     comment: "Really good, I order this every week now. Packaging could be sturdier.",
// //   },
// //   {
// //     name: "Kabir Singh",
// //     rating: 5,
// //     date: "2 months ago",
// //     comment: "Best in this category I've tried so far. Highly recommend.",
// //   },
// // ];

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const product = products.find((p) => p.id === id);
// //   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

// //   const [qty, setQty] = useState(1);
// //   const [activeView, setActiveView] = useState(0);

// //   if (!product) {
// //     return (
// //       <div className="max-w-3xl mx-auto px-4 py-24 text-center">
// //         <h1 className="text-2xl font-bold text-ink">Product not found</h1>
// //         <p className="text-ink/50 mt-2">
// //           The drink you're looking for doesn't exist or was removed.
// //         </p>
// //         <Link
// //           to="/shop"
// //           className="inline-flex items-center gap-1.5 mt-6 text-primary-700 font-semibold"
// //         >
// //           <ChevronLeft size={16} /> Back to Shop
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const cartItem = cart.find((item) => item.id === product.id);
// //   const isWishlisted = wishlist.includes(product.id);
// //   const discount =
// //     product.oldPrice && product.oldPrice > product.price
// //       ? Math.round(100 - (product.price / product.oldPrice) * 100)
// //       : null;

// //   const ingredients = categoryIngredients[product.category] || [];
// //   const nutrition = categoryNutrition[product.category] || {};

// //   const related = products
// //     .filter((p) => p.category === product.category && p.id !== product.id)
// //     .slice(0, 6);

// //   const galleryViews = [
// //     { rotate: 0, scale: 1 },
// //     { rotate: -8, scale: 0.95 },
// //     { rotate: 8, scale: 0.95 },
// //   ];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
// //       <Link
// //         to="/shop"
// //         className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-primary-700 transition-colors mb-6"
// //       >
// //         <ChevronLeft size={16} /> Back to Shop
// //       </Link>

// //       <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
// //         {/* Gallery */}
// //         <div>
// //           <div
// //             className={`relative h-80 sm:h-96 rounded-xl5 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden`}
// //           >
// //             {discount && (
// //               <span className="absolute top-5 left-5 text-xs font-bold text-white bg-secondary-500 px-3 py-1.5 rounded-xl2">
// //                 {discount}% OFF
// //               </span>
// //             )}
// //             <motion.div
// //               key={activeView}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{
// //                 opacity: 1,
// //                 scale: galleryViews[activeView].scale,
// //                 rotate: galleryViews[activeView].rotate,
// //               }}
// //               transition={{ duration: 0.35 }}
// //             >
// //               <BottleSilhouette className="w-40 sm:w-48" />
// //             </motion.div>
// //           </div>

// //           <div className="flex gap-3 mt-4">
// //             {galleryViews.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setActiveView(i)}
// //                 className={`relative flex-1 h-20 rounded-xl3 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden ring-2 transition-all ${
// //                   activeView === i ? "ring-primary-500" : "ring-transparent opacity-70"
// //                 }`}
// //               >
// //                 <BottleSilhouette className="w-10" />
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Info */}
// //         <div>
// //           <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
// //             {product.category.replace("-", " ")}
// //           </span>

// //           <h1 className="text-2xl sm:text-3xl font-bold text-ink mt-3">
// //             {product.name}
// //           </h1>

// //           <div className="flex items-center gap-1.5 mt-2">
// //             <Star size={16} className="fill-secondary-500 text-secondary-500" />
// //             <span className="font-semibold text-ink/80 text-sm">{product.rating}</span>
// //             <span className="text-ink/40 text-sm">({product.reviews} reviews)</span>
// //           </div>

// //           <div className="flex items-center gap-3 mt-4">
// //             <span className="text-3xl font-bold text-ink">â‚¹{product.price}</span>
// //             {activeOldPrice && (
// //               <span className="text-lg text-ink/40 line-through">â‚¹{product.oldPrice}</span>
// //             )}
// //             <span className="text-sm text-ink/50">/ {product.size}</span>
// //           </div>

// //           <p className="text-ink/60 text-sm leading-relaxed mt-5">
// //             {product.description}
// //           </p>

// //           {/* Quantity + Add to cart */}
// //           <div className="flex items-center gap-3 mt-7">
// //             <div className="flex items-center bg-primary-50 rounded-xl3 px-1.5 py-1.5">
// //               <button
// //                 onClick={() => setQty((q) => Math.max(1, q - 1))}
// //                 className="grid place-items-center w-9 h-9 rounded-xl2 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Decrease quantity"
// //               >
// //                 <Minus size={15} />
// //               </button>
// //               <span className="w-10 text-center font-semibold text-ink">{qty}</span>
// //               <button
// //                 onClick={() => setQty((q) => q + 1)}
// //                 className="grid place-items-center w-9 h-9 rounded-xl2 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Increase quantity"
// //               >
// //                 <Plus size={15} />
// //               </button>
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={() => addToCart(activeProduct, qty)}
// //               className="flex-1 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors"
// //             >
// //               <ShoppingCart size={17} />
// //               {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
// //             </motion.button>

// //             <button
// //               onClick={() => toggleWishlist(product.id)}
// //               aria-label="Toggle wishlist"
// //               className="grid place-items-center w-12 h-12 rounded-xl3 bg-white border border-primary-100 shadow-softer shrink-0"
// //             >
// //               <Heart
// //                 size={19}
// //                 className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
// //               />
// //             </button>
// //           </div>

// //           {cartItem && (
// //             <div className="flex items-center gap-2 mt-3 text-sm text-primary-700 bg-primary-50 rounded-xl2 px-3 py-2 w-fit">
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty - 1)}
// //                 className="font-bold px-1"
// //               >
// //                 âˆ’
// //               </button>
// //               {cartItem.qty} in cart
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty + 1)}
// //                 className="font-bold px-1"
// //               >
// //                 +
// //               </button>
// //             </div>
// //           )}

// //           {/* Trust row */}
// //           <div className="flex flex-wrap gap-5 mt-7 pt-6 border-t border-primary-100/60">
// //             <div className="flex items-center gap-2 text-xs text-ink/55">
// //               <Truck size={16} className="text-primary-600" /> Fast Delivery
// //             </div>
// //             <div className="flex items-center gap-2 text-xs text-ink/55">
// //               <ShieldCheck size={16} className="text-primary-600" /> Secure Payment
// //             </div>
// //             <div className="flex items-center gap-2 text-xs text-ink/55">
// //               <RotateCcw size={16} className="text-primary-600" /> Easy Returns
// //             </div>
// //           </div>

// //           {/* Ingredients */}
// //           {ingredients.length > 0 && (
// //             <div className="mt-8">
// //               <h3 className="text-sm font-bold text-ink mb-2.5">Ingredients</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {ingredients.map((ing) => (
// //                   <span
// //                     key={ing}
// //                     className="text-xs font-medium text-ink/60 bg-primary-50 px-3 py-1.5 rounded-full"
// //                   >
// //                     {ing}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Nutrition facts */}
// //           {Object.keys(nutrition).length > 0 && (
// //             <div className="mt-6">
// //               <h3 className="text-sm font-bold text-ink mb-2.5">
// //                 Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
// //               </h3>
// //               <div className="grid grid-cols-4 gap-2">
// //                 {[
// //                   ["Calories", nutrition.calories],
// //                   ["Sugar", nutrition.sugar],
// //                   ["Protein", nutrition.protein],
// //                   ["Sodium", nutrition.sodium],
// //                 ].map(([label, value]) => (
// //                   <div
// //                     key={label}
// //                     className="bg-white border border-primary-100 rounded-xl2 py-3 text-center"
// //                   >
// //                     <p className="text-sm font-bold text-ink">{value}</p>
// //                     <p className="text-[10px] text-ink/45 mt-0.5">{label}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Reviews */}
// //       <div className="mt-14 sm:mt-16 max-w-3xl">
// //         <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">
// //           Customer Reviews
// //         </h2>
// //         <div className="space-y-4">
// //           {dummyReviews.map((review) => (
// //             <div
// //               key={review.name}
// //               className="bg-white rounded-xl4 shadow-softer p-5"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-3">
// //                   <span className="grid place-items-center w-9 h-9 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
// //                     {review.name.charAt(0)}
// //                   </span>
// //                   <div>
// //                     <p className="text-sm font-semibold text-ink">{review.name}</p>
// //                     <p className="text-xs text-ink/40">{review.date}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-0.5">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={13}
// //                       className={
// //                         i < review.rating
// //                           ? "fill-secondary-500 text-secondary-500"
// //                           : "text-ink/15"
// //                       }
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="text-sm text-ink/60 mt-3 leading-relaxed">
// //                 {review.comment}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Related products */}
// //       {related.length > 0 && (
// //         <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-4">
// //           <ProductSection
// //             title="You Might Also Like"
// //             subtitle="More from this category"
// //             products={related}
// //             viewAllLink={`/shop?category=${product.category}`}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






















// // import { useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Star,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingCart,
// //   ChevronLeft,
// //   Truck,
// //   ShieldCheck,
// //   RotateCcw,
// // } from "lucide-react";
// // import { products } from "../data/products";
// // import { useApp } from "../context/AppContext";
// // import { BottleSilhouette } from "../components/ProductCard";
// // import ProductSection from "../components/ProductSection";

// // const categoryIngredients = {
// //   juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
// //   "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
// //   "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
// //   "sparkling-water": ["Carbonated spring water", "Natural flavour"],
// //   milk: ["Pasteurised milk", "Vitamin D"],
// //   coffee: ["Brewed coffee", "Milk", "Cane sugar"],
// //   tea: ["Tea extract", "Filtered water", "Natural flavour"],
// //   smoothies: ["Fruit puree", "Yogurt", "Honey"],
// //   "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
// //   mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
// //   "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
// // };

// // const categoryNutrition = {
// //   juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
// //   "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
// //   "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
// //   "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
// //   milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
// //   coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
// //   tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
// //   smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
// //   "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
// //   mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
// //   "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
// // };

// // const dummyReviews = [
// //   {
// //     name: "Aarav Mehta",
// //     rating: 5,
// //     date: "3 weeks ago",
// //     comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
// //   },
// //   {
// //     name: "Priya Nair",
// //     rating: 4,
// //     date: "1 month ago",
// //     comment: "Really good, I order this every week now. Packaging could be sturdier.",
// //   },
// //   {
// //     name: "Kabir Singh",
// //     rating: 5,
// //     date: "2 months ago",
// //     comment: "Best in this category I've tried so far. Highly recommend.",
// //   },
// // ];

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const product = products.find((p) => p.id === id);
// //   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

// //   const [qty, setQty] = useState(1);
// //   const [activeView, setActiveView] = useState(0);

// //   if (!product) {
// //     return (
// //       <div className="max-w-3xl mx-auto px-4 py-16 text-center">
// //         <h1 className="text-xl font-bold text-ink">Product not found</h1>
// //         <p className="text-ink/50 mt-1.5 text-sm">
// //           The drink you're looking for doesn't exist or was removed.
// //         </p>
// //         <Link
// //           to="/shop"
// //           className="inline-flex items-center gap-1.5 mt-4 text-primary-700 font-semibold text-sm"
// //         >
// //           <ChevronLeft size={14} /> Back to Shop
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const cartItem = cart.find((item) => item.id === product.id);
// //   const isWishlisted = wishlist.includes(product.id);
// //   const discount =
// //     product.oldPrice && product.oldPrice > product.price
// //       ? Math.round(100 - (product.price / product.oldPrice) * 100)
// //       : null;

// //   const ingredients = categoryIngredients[product.category] || [];
// //   const nutrition = categoryNutrition[product.category] || {};

// //   const related = products
// //     .filter((p) => p.category === product.category && p.id !== product.id)
// //     .slice(0, 6);

// //   const galleryViews = [
// //     { rotate: 0, scale: 1 },
// //     { rotate: -8, scale: 0.95 },
// //     { rotate: 8, scale: 0.95 },
// //   ];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-5 sm:py-6">
// //       <Link
// //         to="/shop"
// //         className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-primary-700 transition-colors mb-4"
// //       >
// //         <ChevronLeft size={14} /> Back to Shop
// //       </Link>

// //       <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
// //         {/* Gallery */}
// //         <div>
// //           <div
// //             className={`relative h-48 sm:h-56 rounded-xl4 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden`}
// //           >
// //             {discount && (
// //               <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-secondary-500 px-2 py-1 rounded-xl2">
// //                 {discount}% OFF
// //               </span>
// //             )}
// //             <motion.div
// //               key={activeView}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{
// //                 opacity: 1,
// //                 scale: galleryViews[activeView].scale,
// //                 rotate: galleryViews[activeView].rotate,
// //               }}
// //               transition={{ duration: 0.35 }}
// //             >
// //               <BottleSilhouette className="w-24 sm:w-28" />
// //             </motion.div>
// //           </div>

// //           <div className="flex gap-2 mt-2.5">
// //             {galleryViews.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setActiveView(i)}
// //                 className={`relative flex-1 h-12 rounded-xl2 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden ring-2 transition-all ${
// //                   activeView === i ? "ring-primary-500" : "ring-transparent opacity-70"
// //                 }`}
// //               >
// //                 <BottleSilhouette className="w-6" />
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Info */}
// //         <div>
// //           <span className="inline-block text-[10px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
// //             {product.category.replace("-", " ")}
// //           </span>

// //           <h1 className="text-lg sm:text-xl font-bold text-ink mt-2">
// //             {product.name}
// //           </h1>

// //           <div className="flex items-center gap-1.5 mt-1.5">
// //             <Star size={13} className="fill-secondary-500 text-secondary-500" />
// //             <span className="font-semibold text-ink/80 text-xs">{product.rating}</span>
// //             <span className="text-ink/40 text-xs">({product.reviews} reviews)</span>
// //           </div>

// //           <div className="flex items-center gap-2 mt-2.5">
// //             <span className="text-xl font-bold text-ink">â‚¹{product.price}</span>
// //             {activeOldPrice && (
// //               <span className="text-sm text-ink/40 line-through">â‚¹{product.oldPrice}</span>
// //             )}
// //             <span className="text-xs text-ink/50">/ {product.size}</span>
// //           </div>

// //           <p className="text-ink/60 text-xs leading-relaxed mt-3">
// //             {product.description}
// //           </p>

// //           {/* Quantity + Add to cart */}
// //           <div className="flex items-center gap-2 mt-4">
// //             <div className="flex items-center bg-primary-50 rounded-xl2 px-1 py-1">
// //               <button
// //                 onClick={() => setQty((q) => Math.max(1, q - 1))}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Decrease quantity"
// //               >
// //                 <Minus size={12} />
// //               </button>
// //               <span className="w-7 text-center font-semibold text-ink text-sm">{qty}</span>
// //               <button
// //                 onClick={() => setQty((q) => q + 1)}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Increase quantity"
// //               >
// //                 <Plus size={12} />
// //               </button>
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={() => addToCart(activeProduct, qty)}
// //               className="flex-1 flex items-center justify-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl2 py-2.5 shadow-lift transition-colors"
// //             >
// //               <ShoppingCart size={14} />
// //               {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
// //             </motion.button>

// //             <button
// //               onClick={() => toggleWishlist(product.id)}
// //               aria-label="Toggle wishlist"
// //               className="grid place-items-center w-9 h-9 rounded-xl2 bg-white border border-primary-100 shadow-softer shrink-0"
// //             >
// //               <Heart
// //                 size={15}
// //                 className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
// //               />
// //             </button>
// //           </div>

// //           {cartItem && (
// //             <div className="flex items-center gap-2 mt-2 text-xs text-primary-700 bg-primary-50 rounded-xl1 px-2.5 py-1.5 w-fit">
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty - 1)}
// //                 className="font-bold px-1"
// //               >
// //                 âˆ’
// //               </button>
// //               {cartItem.qty} in cart
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty + 1)}
// //                 className="font-bold px-1"
// //               >
// //                 +
// //               </button>
// //             </div>
// //           )}

// //           {/* Trust row */}
// //           <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-primary-100/60">
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <Truck size={13} className="text-primary-600" /> Fast Delivery
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <ShieldCheck size={13} className="text-primary-600" /> Secure Payment
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <RotateCcw size={13} className="text-primary-600" /> Easy Returns
// //             </div>
// //           </div>

// //           {/* Ingredients */}
// //           {ingredients.length > 0 && (
// //             <div className="mt-5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">Ingredients</h3>
// //               <div className="flex flex-wrap gap-1.5">
// //                 {ingredients.map((ing) => (
// //                   <span
// //                     key={ing}
// //                     className="text-[11px] font-medium text-ink/60 bg-primary-50 px-2.5 py-1 rounded-full"
// //                   >
// //                     {ing}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Nutrition facts */}
// //           {Object.keys(nutrition).length > 0 && (
// //             <div className="mt-3.5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">
// //                 Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
// //               </h3>
// //               <div className="grid grid-cols-4 gap-1.5">
// //                 {[
// //                   ["Calories", nutrition.calories],
// //                   ["Sugar", nutrition.sugar],
// //                   ["Protein", nutrition.protein],
// //                   ["Sodium", nutrition.sodium],
// //                 ].map(([label, value]) => (
// //                   <div
// //                     key={label}
// //                     className="bg-white border border-primary-100 rounded-xl1 py-2 text-center"
// //                   >
// //                     <p className="text-xs font-bold text-ink">{value}</p>
// //                     <p className="text-[9px] text-ink/45 mt-0.5">{label}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Reviews */}
// //       <div className="mt-8 sm:mt-9 max-w-3xl">
// //         <h2 className="text-base sm:text-lg font-bold text-ink mb-3.5">
// //           Customer Reviews
// //         </h2>
// //         <div className="space-y-2.5">
// //           {dummyReviews.map((review) => (
// //             <div
// //               key={review.name}
// //               className="bg-white rounded-xl3 shadow-softer p-3"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <span className="grid place-items-center w-7 h-7 rounded-full bg-primary-100 text-primary-700 font-semibold text-xs">
// //                     {review.name.charAt(0)}
// //                   </span>
// //                   <div>
// //                     <p className="text-xs font-semibold text-ink">{review.name}</p>
// //                     <p className="text-[10px] text-ink/40">{review.date}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-0.5">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={11}
// //                       className={
// //                         i < review.rating
// //                           ? "fill-secondary-500 text-secondary-500"
// //                           : "text-ink/15"
// //                       }
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="text-xs text-ink/60 mt-2 leading-relaxed">
// //                 {review.comment}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Related products */}
// //       {related.length > 0 && (
// //         <div className="-mx-4 sm:-mx-5 lg:-mx-6 mt-2.5">
// //           <ProductSection
// //             title="You Might Also Like"
// //             subtitle="More from this category"
// //             products={related}
// //             viewAllLink={`/shop?category=${product.category}`}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }









// // import { useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Star,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingCart,
// //   ChevronLeft,
// //   Truck,
// //   ShieldCheck,
// //   RotateCcw,
// // } from "lucide-react";
// // import { products } from "../data/products";
// // import { useApp } from "../context/AppContext";
// // import { BottleSilhouette } from "../components/ProductCard";
// // import ProductSection from "../components/ProductSection";

// // const categoryIngredients = {
// //   juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
// //   "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
// //   "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
// //   "sparkling-water": ["Carbonated spring water", "Natural flavour"],
// //   milk: ["Pasteurised milk", "Vitamin D"],
// //   coffee: ["Brewed coffee", "Milk", "Cane sugar"],
// //   tea: ["Tea extract", "Filtered water", "Natural flavour"],
// //   smoothies: ["Fruit puree", "Yogurt", "Honey"],
// //   "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
// //   mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
// //   "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
// // };

// // const categoryNutrition = {
// //   juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
// //   "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
// //   "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
// //   "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
// //   milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
// //   coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
// //   tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
// //   smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
// //   "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
// //   mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
// //   "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
// // };

// // const dummyReviews = [
// //   {
// //     name: "Aarav Mehta",
// //     rating: 5,
// //     date: "3 weeks ago",
// //     comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
// //   },
// //   {
// //     name: "Priya Nair",
// //     rating: 4,
// //     date: "1 month ago",
// //     comment: "Really good, I order this every week now. Packaging could be sturdier.",
// //   },
// //   {
// //     name: "Kabir Singh",
// //     rating: 5,
// //     date: "2 months ago",
// //     comment: "Best in this category I've tried so far. Highly recommend.",
// //   },
// // ];

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const product = products.find((p) => p.id === id);
// //   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

// //   const [qty, setQty] = useState(1);
// //   const [activeView, setActiveView] = useState(0);
// //   const [imgError, setImgError] = useState(false);

// //   if (!product) {
// //     return (
// //       <div className="max-w-3xl mx-auto px-4 py-16 text-center">
// //         <h1 className="text-xl font-bold text-ink">Product not found</h1>
// //         <p className="text-ink/50 mt-1.5 text-sm">
// //           The drink you're looking for doesn't exist or was removed.
// //         </p>
// //         <Link
// //           to="/shop"
// //           className="inline-flex items-center gap-1.5 mt-4 text-primary-700 font-semibold text-sm"
// //         >
// //           <ChevronLeft size={14} /> Back to Shop
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const cartItem = cart.find((item) => item.id === product.id);
// //   const isWishlisted = wishlist.includes(product.id);
// //   const discount =
// //     product.oldPrice && product.oldPrice > product.price
// //       ? Math.round(100 - (product.price / product.oldPrice) * 100)
// //       : null;

// //   const ingredients = categoryIngredients[product.category] || [];
// //   const nutrition = categoryNutrition[product.category] || {};

// //   const related = products
// //     .filter((p) => p.category === product.category && p.id !== product.id)
// //     .slice(0, 6);

// //   const galleryViews = [
// //     { rotate: 0, scale: 1 },
// //     { rotate: -8, scale: 0.95 },
// //     { rotate: 8, scale: 0.95 },
// //   ];

// //   const hasImage = !imgError && !!product.image;

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-5 sm:py-6">
// //       <Link
// //         to="/shop"
// //         className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-primary-700 transition-colors mb-4"
// //       >
// //         <ChevronLeft size={14} /> Back to Shop
// //       </Link>

// //       <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
// //         {/* Gallery */}
// //         <div>
// //           <div
// //             className={`relative h-48 sm:h-56 rounded-xl4 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden`}
// //           >
// //             {discount && (
// //               <span className="absolute top-3 left-3 z-10 text-[10px] font-bold text-white bg-secondary-500 px-2 py-1 rounded-xl2">
// //                 {discount}% OFF
// //               </span>
// //             )}

// //             {hasImage ? (
// //               <motion.img
// //                 key={activeView}
// //                 src={activeImage}
// //                 alt={product.name}
// //                 onError={() => setImgError(true)}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{
// //                   opacity: 1,
// //                   scale: galleryViews[activeView].scale,
// //                   rotate: galleryViews[activeView].rotate,
// //                 }}
// //                 transition={{ duration: 0.35 }}
// //                 className="absolute inset-0 w-full h-full object-cover"
// //               />
// //             ) : (
// //               <motion.div
// //                 key={activeView}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{
// //                   opacity: 1,
// //                   scale: galleryViews[activeView].scale,
// //                   rotate: galleryViews[activeView].rotate,
// //                 }}
// //                 transition={{ duration: 0.35 }}
// //               >
// //                 <BottleSilhouette className="w-24 sm:w-28" />
// //               </motion.div>
// //             )}
// //           </div>

// //           <div className="flex gap-2 mt-2.5">
// //             {galleryViews.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setActiveView(i)}
// //                 className={`relative flex-1 h-12 rounded-xl2 bg-gradient-to-br ${product.color} grid place-items-center overflow-hidden ring-2 transition-all ${
// //                   activeView === i ? "ring-primary-500" : "ring-transparent opacity-70"
// //                 }`}
// //               >
// //                 {hasImage ? (
// //                   <img
// //                     src={activeImage}
// //                     alt={`${product.name} view ${i + 1}`}
// //                     className="absolute inset-0 w-full h-full object-cover"
// //                   />
// //                 ) : (
// //                   <BottleSilhouette className="w-6" />
// //                 )}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Info */}
// //         <div>
// //           <span className="inline-block text-[10px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
// //             {product.category.replace("-", " ")}
// //           </span>

// //           <h1 className="text-lg sm:text-xl font-bold text-ink mt-2">
// //             {product.name}
// //           </h1>

// //           <div className="flex items-center gap-1.5 mt-1.5">
// //             <Star size={13} className="fill-secondary-500 text-secondary-500" />
// //             <span className="font-semibold text-ink/80 text-xs">{product.rating}</span>
// //             <span className="text-ink/40 text-xs">({product.reviews} reviews)</span>
// //           </div>

// //           <div className="flex items-center gap-2 mt-2.5">
// //             <span className="text-xl font-bold text-ink">â‚¹{product.price}</span>
// //             {activeOldPrice && (
// //               <span className="text-sm text-ink/40 line-through">â‚¹{product.oldPrice}</span>
// //             )}
// //             <span className="text-xs text-ink/50">/ {product.size}</span>
// //           </div>

// //           <p className="text-ink/60 text-xs leading-relaxed mt-3">
// //             {product.description}
// //           </p>

// //           {/* Quantity + Add to cart */}
// //           <div className="flex items-center gap-2 mt-4">
// //             <div className="flex items-center bg-primary-50 rounded-xl2 px-1 py-1">
// //               <button
// //                 onClick={() => setQty((q) => Math.max(1, q - 1))}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Decrease quantity"
// //               >
// //                 <Minus size={12} />
// //               </button>
// //               <span className="w-7 text-center font-semibold text-ink text-sm">{qty}</span>
// //               <button
// //                 onClick={() => setQty((q) => q + 1)}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Increase quantity"
// //               >
// //                 <Plus size={12} />
// //               </button>
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={() => addToCart(activeProduct, qty)}
// //               className="flex-1 flex items-center justify-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl2 py-2.5 shadow-lift transition-colors"
// //             >
// //               <ShoppingCart size={14} />
// //               {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
// //             </motion.button>

// //             <button
// //               onClick={() => toggleWishlist(product.id)}
// //               aria-label="Toggle wishlist"
// //               className="grid place-items-center w-9 h-9 rounded-xl2 bg-white border border-primary-100 shadow-softer shrink-0"
// //             >
// //               <Heart
// //                 size={15}
// //                 className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
// //               />
// //             </button>
// //           </div>

// //           {cartItem && (
// //             <div className="flex items-center gap-2 mt-2 text-xs text-primary-700 bg-primary-50 rounded-xl1 px-2.5 py-1.5 w-fit">
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty - 1)}
// //                 className="font-bold px-1"
// //               >
// //                 âˆ’
// //               </button>
// //               {cartItem.qty} in cart
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty + 1)}
// //                 className="font-bold px-1"
// //               >
// //                 +
// //               </button>
// //             </div>
// //           )}

// //           {/* Trust row */}
// //           <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-primary-100/60">
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <Truck size={13} className="text-primary-600" /> Fast Delivery
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <ShieldCheck size={13} className="text-primary-600" /> Secure Payment
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <RotateCcw size={13} className="text-primary-600" /> Easy Returns
// //             </div>
// //           </div>

// //           {/* Ingredients */}
// //           {ingredients.length > 0 && (
// //             <div className="mt-5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">Ingredients</h3>
// //               <div className="flex flex-wrap gap-1.5">
// //                 {ingredients.map((ing) => (
// //                   <span
// //                     key={ing}
// //                     className="text-[11px] font-medium text-ink/60 bg-primary-50 px-2.5 py-1 rounded-full"
// //                   >
// //                     {ing}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Nutrition facts */}
// //           {Object.keys(nutrition).length > 0 && (
// //             <div className="mt-3.5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">
// //                 Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
// //               </h3>
// //               <div className="grid grid-cols-4 gap-1.5">
// //                 {[
// //                   ["Calories", nutrition.calories],
// //                   ["Sugar", nutrition.sugar],
// //                   ["Protein", nutrition.protein],
// //                   ["Sodium", nutrition.sodium],
// //                 ].map(([label, value]) => (
// //                   <div
// //                     key={label}
// //                     className="bg-white border border-primary-100 rounded-xl1 py-2 text-center"
// //                   >
// //                     <p className="text-xs font-bold text-ink">{value}</p>
// //                     <p className="text-[9px] text-ink/45 mt-0.5">{label}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Reviews */}
// //       <div className="mt-8 sm:mt-9 max-w-3xl">
// //         <h2 className="text-base sm:text-lg font-bold text-ink mb-3.5">
// //           Customer Reviews
// //         </h2>
// //         <div className="space-y-2.5">
// //           {dummyReviews.map((review) => (
// //             <div
// //               key={review.name}
// //               className="bg-white rounded-xl3 shadow-softer p-3"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <span className="grid place-items-center w-7 h-7 rounded-full bg-primary-100 text-primary-700 font-semibold text-xs">
// //                     {review.name.charAt(0)}
// //                   </span>
// //                   <div>
// //                     <p className="text-xs font-semibold text-ink">{review.name}</p>
// //                     <p className="text-[10px] text-ink/40">{review.date}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-0.5">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={11}
// //                       className={
// //                         i < review.rating
// //                           ? "fill-secondary-500 text-secondary-500"
// //                           : "text-ink/15"
// //                       }
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="text-xs text-ink/60 mt-2 leading-relaxed">
// //                 {review.comment}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Related products */}
// //       {related.length > 0 && (
// //         <div className="-mx-4 sm:-mx-5 lg:-mx-6 mt-2.5">
// //           <ProductSection
// //             title="You Might Also Like"
// //             subtitle="More from this category"
// //             products={related}
// //             viewAllLink={`/shop?category=${product.category}`}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }












// // import { useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Star,
// //   Heart,
// //   Minus,
// //   Plus,
// //   ShoppingCart,
// //   ChevronLeft,
// //   Truck,
// //   ShieldCheck,
// //   RotateCcw,
// // } from "lucide-react";
// // import { products } from "../data/products";
// // import { useApp } from "../context/AppContext";
// // import { BottleSilhouette } from "../components/ProductCard";
// // import ProductSection from "../components/ProductSection";

// // const categoryIngredients = {
// //   juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
// //   "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
// //   "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
// //   "sparkling-water": ["Carbonated spring water", "Natural flavour"],
// //   milk: ["Pasteurised milk", "Vitamin D"],
// //   coffee: ["Brewed coffee", "Milk", "Cane sugar"],
// //   tea: ["Tea extract", "Filtered water", "Natural flavour"],
// //   smoothies: ["Fruit puree", "Yogurt", "Honey"],
// //   "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
// //   mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
// //   "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
// // };

// // const categoryNutrition = {
// //   juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
// //   "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
// //   "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
// //   "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
// //   milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
// //   coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
// //   tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
// //   smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
// //   "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
// //   mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
// //   "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
// // };

// // const dummyReviews = [
// //   {
// //     name: "Aarav Mehta",
// //     rating: 5,
// //     date: "3 weeks ago",
// //     comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
// //   },
// //   {
// //     name: "Priya Nair",
// //     rating: 4,
// //     date: "1 month ago",
// //     comment: "Really good, I order this every week now. Packaging could be sturdier.",
// //   },
// //   {
// //     name: "Kabir Singh",
// //     rating: 5,
// //     date: "2 months ago",
// //     comment: "Best in this category I've tried so far. Highly recommend.",
// //   },
// // ];

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const product = products.find((p) => p.id === id);
// //   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

// //   const [qty, setQty] = useState(1);
// //   const [imgError, setImgError] = useState(false);

// //   if (!product) {
// //     return (
// //       <div className="max-w-3xl mx-auto px-4 py-16 text-center">
// //         <h1 className="text-xl font-bold text-ink">Product not found</h1>
// //         <p className="text-ink/50 mt-1.5 text-sm">
// //           The drink you're looking for doesn't exist or was removed.
// //         </p>
// //         <Link
// //           to="/shop"
// //           className="inline-flex items-center gap-1.5 mt-4 text-primary-700 font-semibold text-sm"
// //         >
// //           <ChevronLeft size={14} /> Back to Shop
// //         </Link>
// //       </div>
// //     );
// //   }

// //   const cartItem = cart.find((item) => item.id === product.id);
// //   const isWishlisted = wishlist.includes(product.id);
// //   const discount =
// //     product.oldPrice && product.oldPrice > product.price
// //       ? Math.round(100 - (product.price / product.oldPrice) * 100)
// //       : null;

// //   const ingredients = categoryIngredients[product.category] || [];
// //   const nutrition = categoryNutrition[product.category] || {};

// //   const related = products
// //     .filter((p) => p.category === product.category && p.id !== product.id)
// //     .slice(0, 6);

// //   const hasImage = !imgError && !!product.image;

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-5 sm:py-6">
// //       <Link
// //         to="/shop"
// //         className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-primary-700 transition-colors mb-4"
// //       >
// //         <ChevronLeft size={14} /> Back to Shop
// //       </Link>

// //       <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
// //         {/* Gallery */}
// //         <div>
// //           <div
// //             className={`relative h-64 sm:h-80 rounded-xl4 grid place-items-center overflow-hidden ${
// //               hasImage ? "" : `bg-gradient-to-br ${product.color}`
// //             }`}
// //           >
// //             {discount && (
// //               <span className="absolute top-3 left-3 z-10 text-[10px] font-bold text-white bg-secondary-500 px-2 py-1 rounded-xl2">
// //                 {discount}% OFF
// //               </span>
// //             )}

// //             {hasImage ? (
// //               <motion.img
// //                 src={activeImage}
// //                 alt={product.name}
// //                 onError={() => setImgError(true)}
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.35 }}
// //                 className="w-full h-full object-cover"
// //               />
// //             ) : (
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.35 }}
// //               >
// //                 <BottleSilhouette className="w-24 sm:w-28" />
// //               </motion.div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Info */}
// //         <div>
// //           <span className="inline-block text-[10px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
// //             {product.category.replace("-", " ")}
// //           </span>

// //           <h1 className="text-lg sm:text-xl font-bold text-ink mt-2">
// //             {product.name}
// //           </h1>

// //           <div className="flex items-center gap-1.5 mt-1.5">
// //             <Star size={13} className="fill-secondary-500 text-secondary-500" />
// //             <span className="font-semibold text-ink/80 text-xs">{product.rating}</span>
// //             <span className="text-ink/40 text-xs">({product.reviews} reviews)</span>
// //           </div>

// //           <div className="flex items-center gap-2 mt-2.5">
// //             <span className="text-xl font-bold text-ink">â‚¹{product.price}</span>
// //             {activeOldPrice && (
// //               <span className="text-sm text-ink/40 line-through">â‚¹{product.oldPrice}</span>
// //             )}
// //             <span className="text-xs text-ink/50">/ {product.size}</span>
// //           </div>

// //           <p className="text-ink/60 text-xs leading-relaxed mt-3">
// //             {product.description}
// //           </p>

// //           {/* Quantity + Add to cart */}
// //           <div className="flex items-center gap-2 mt-4">
// //             <div className="flex items-center bg-primary-50 rounded-xl2 px-1 py-1">
// //               <button
// //                 onClick={() => setQty((q) => Math.max(1, q - 1))}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Decrease quantity"
// //               >
// //                 <Minus size={12} />
// //               </button>
// //               <span className="w-7 text-center font-semibold text-ink text-sm">{qty}</span>
// //               <button
// //                 onClick={() => setQty((q) => q + 1)}
// //                 className="grid place-items-center w-7 h-7 rounded-xl1 bg-white text-primary-700 shadow-softer"
// //                 aria-label="Increase quantity"
// //               >
// //                 <Plus size={12} />
// //               </button>
// //             </div>

// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.97 }}
// //               onClick={() => addToCart(activeProduct, qty)}
// //               className="flex-1 flex items-center justify-center gap-1.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl2 py-2.5 shadow-lift transition-colors"
// //             >
// //               <ShoppingCart size={14} />
// //               {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
// //             </motion.button>

// //             <button
// //               onClick={() => toggleWishlist(product.id)}
// //               aria-label="Toggle wishlist"
// //               className="grid place-items-center w-9 h-9 rounded-xl2 bg-white border border-primary-100 shadow-softer shrink-0"
// //             >
// //               <Heart
// //                 size={15}
// //                 className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
// //               />
// //             </button>
// //           </div>

// //           {cartItem && (
// //             <div className="flex items-center gap-2 mt-2 text-xs text-primary-700 bg-primary-50 rounded-xl1 px-2.5 py-1.5 w-fit">
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty - 1)}
// //                 className="font-bold px-1"
// //               >
// //                 âˆ’
// //               </button>
// //               {cartItem.qty} in cart
// //               <button
// //                 onClick={() => updateQty(product.id, cartItem.qty + 1)}
// //                 className="font-bold px-1"
// //               >
// //                 +
// //               </button>
// //             </div>
// //           )}

// //           {/* Trust row */}
// //           <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-primary-100/60">
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <Truck size={13} className="text-primary-600" /> Fast Delivery
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <ShieldCheck size={13} className="text-primary-600" /> Secure Payment
// //             </div>
// //             <div className="flex items-center gap-1.5 text-[11px] text-ink/55">
// //               <RotateCcw size={13} className="text-primary-600" /> Easy Returns
// //             </div>
// //           </div>

// //           {/* Ingredients */}
// //           {ingredients.length > 0 && (
// //             <div className="mt-5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">Ingredients</h3>
// //               <div className="flex flex-wrap gap-1.5">
// //                 {ingredients.map((ing) => (
// //                   <span
// //                     key={ing}
// //                     className="text-[11px] font-medium text-ink/60 bg-primary-50 px-2.5 py-1 rounded-full"
// //                   >
// //                     {ing}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Nutrition facts */}
// //           {Object.keys(nutrition).length > 0 && (
// //             <div className="mt-3.5">
// //               <h3 className="text-xs font-bold text-ink mb-1.5">
// //                 Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
// //               </h3>
// //               <div className="grid grid-cols-4 gap-1.5">
// //                 {[
// //                   ["Calories", nutrition.calories],
// //                   ["Sugar", nutrition.sugar],
// //                   ["Protein", nutrition.protein],
// //                   ["Sodium", nutrition.sodium],
// //                 ].map(([label, value]) => (
// //                   <div
// //                     key={label}
// //                     className="bg-white border border-primary-100 rounded-xl1 py-2 text-center"
// //                   >
// //                     <p className="text-xs font-bold text-ink">{value}</p>
// //                     <p className="text-[9px] text-ink/45 mt-0.5">{label}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Reviews */}
// //       <div className="mt-8 sm:mt-9 max-w-3xl">
// //         <h2 className="text-base sm:text-lg font-bold text-ink mb-3.5">
// //           Customer Reviews
// //         </h2>
// //         <div className="space-y-2.5">
// //           {dummyReviews.map((review) => (
// //             <div
// //               key={review.name}
// //               className="bg-white rounded-xl3 shadow-softer p-3"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <span className="grid place-items-center w-7 h-7 rounded-full bg-primary-100 text-primary-700 font-semibold text-xs">
// //                     {review.name.charAt(0)}
// //                   </span>
// //                   <div>
// //                     <p className="text-xs font-semibold text-ink">{review.name}</p>
// //                     <p className="text-[10px] text-ink/40">{review.date}</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-0.5">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={11}
// //                       className={
// //                         i < review.rating
// //                           ? "fill-secondary-500 text-secondary-500"
// //                           : "text-ink/15"
// //                       }
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="text-xs text-ink/60 mt-2 leading-relaxed">
// //                 {review.comment}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Related products */}
// //       {related.length > 0 && (
// //         <div className="-mx-4 sm:-mx-5 lg:-mx-6 mt-2.5">
// //           <ProductSection
// //             title="You Might Also Like"
// //             subtitle="More from this category"
// //             products={related}
// //             viewAllLink={`/shop?category=${product.category}`}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }







// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Heart,
//   Minus,
//   Plus,
//   ShoppingCart,
//   ChevronLeft,
//   Truck,
//   ShieldCheck,
//   RotateCcw,
// } from "lucide-react";
// import { products } from "../data/products";
// import { useApp } from "../context/AppContext";
// import { BottleSilhouette } from "../components/ProductCard";
// import ProductSection from "../components/ProductSection";

// const categoryIngredients = {
//   juices: ["Fruit pulp/juice concentrate", "Filtered water", "Natural flavour", "Vitamin C"],
//   "soft-drinks": ["Carbonated water", "Sugar", "Natural flavour", "Citric acid"],
//   "energy-drinks": ["Carbonated water", "Caffeine", "Taurine", "B-vitamins", "Sugar"],
//   "sparkling-water": ["Carbonated spring water", "Natural flavour"],
//   milk: ["Pasteurised milk", "Vitamin D"],
//   coffee: ["Brewed coffee", "Milk", "Cane sugar"],
//   tea: ["Tea extract", "Filtered water", "Natural flavour"],
//   smoothies: ["Fruit puree", "Yogurt", "Honey"],
//   "protein-drinks": ["Whey protein isolate", "Cocoa/vanilla flavour", "Milk", "Stevia"],
//   mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
//   "health-drinks": ["Malt extract", "Milk solids", "Vitamins & minerals", "Cocoa"],
// };

// const categoryNutrition = {
//   juices: { calories: 110, sugar: "22g", protein: "1g", sodium: "10mg" },
//   "soft-drinks": { calories: 140, sugar: "35g", protein: "0g", sodium: "25mg" },
//   "energy-drinks": { calories: 120, sugar: "27g", protein: "0g", sodium: "100mg" },
//   "sparkling-water": { calories: 0, sugar: "0g", protein: "0g", sodium: "5mg" },
//   milk: { calories: 150, sugar: "12g", protein: "8g", sodium: "105mg" },
//   coffee: { calories: 90, sugar: "10g", protein: "3g", sodium: "40mg" },
//   tea: { calories: 60, sugar: "14g", protein: "0g", sodium: "5mg" },
//   smoothies: { calories: 180, sugar: "24g", protein: "4g", sodium: "35mg" },
//   "protein-drinks": { calories: 210, sugar: "6g", protein: "20g", sodium: "150mg" },
//   mocktails: { calories: 95, sugar: "20g", protein: "0g", sodium: "15mg" },
//   "health-drinks": { calories: 130, sugar: "16g", protein: "5g", sodium: "80mg" },
// };

// const dummyReviews = [
//   {
//     name: "Aarav Mehta",
//     rating: 5,
//     date: "3 weeks ago",
//     comment: "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
//   },
//   {
//     name: "Priya Nair",
//     rating: 4,
//     date: "1 month ago",
//     comment: "Really good, I order this every week now. Packaging could be sturdier.",
//   },
//   {
//     name: "Kabir Singh",
//     rating: 5,
//     date: "2 months ago",
//     comment: "Best in this category I've tried so far. Highly recommend.",
//   },
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);
//   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

//   const [qty, setQty] = useState(1);
//   const [imgError, setImgError] = useState(false);

//   if (!product) {
//     return (
//       <div className="max-w-3xl mx-auto px-3 py-11 text-center">
//         <h1 className="text-base font-bold text-ink">Product not found</h1>
//         <p className="text-ink/50 mt-1 text-xs">
//           The drink you're looking for doesn't exist or was removed.
//         </p>
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-1 mt-3 text-primary-700 font-semibold text-xs"
//         >
//           <ChevronLeft size={10} /> Back to Shop
//         </Link>
//       </div>
//     );
//   }

//   const cartItem = cart.find((item) => item.id === product.id);
//   const isWishlisted = wishlist.includes(product.id);
//   const discount =
//     product.oldPrice && product.oldPrice > product.price
//       ? Math.round(100 - (product.price / product.oldPrice) * 100)
//       : null;

//   const ingredients = categoryIngredients[product.category] || [];
//   const nutrition = categoryNutrition[product.category] || {};

//   const related = products
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 6);

//   const hasImage = !imgError && !!product.image;

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-3.5 lg:px-4 py-3.5 sm:py-4">
//       <Link
//         to="/shop"
//         className="inline-flex items-center gap-1 text-[10px] font-medium text-ink/50 hover:text-primary-700 transition-colors mb-3"
//       >
//         <ChevronLeft size={10} /> Back to Shop
//       </Link>

//       <div className="grid lg:grid-cols-2 gap-4 lg:gap-5.5">
//         {/* Gallery */}
//         <div>

//          <div
//   className={`relative h-64 sm:h-80 lg:h-[420px] rounded-xl overflow-hidden ${
//     hasImage ? "bg-white" : `bg-gradient-to-br ${product.color}`
//   }`}
// >
//   {discount && (
//     <span className="absolute top-3 left-3 z-10 text-xs font-bold text-white bg-secondary-500 px-2.5 py-1 rounded-full">
//       {discount}% OFF
//     </span>
//   )}

//   {hasImage ? (
//     <motion.img
//       src={activeImage}
//       alt={product.name}
//       onError={() => setImgError(true)}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.35 }}
//       className="w-full h-full object-contain"
//     />
//   ) : (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.35 }}
//     >
//       <BottleSilhouette className="w-20 sm:w-24" />
//     </motion.div>
//   )}
// </div>
//         </div>

//         {/* Info */}
//         <div>
//           <span className="inline-block text-[8px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
//             {product.category.replace("-", " ")}
//           </span>

//           <h1 className="text-sm sm:text-base font-bold text-ink mt-1.5">
//             {product.name}
//           </h1>

//           <div className="flex items-center gap-1 mt-1">
//             <Star size={9} className="fill-secondary-500 text-secondary-500" />
//             <span className="font-semibold text-ink/80 text-[10px]">{product.rating}</span>
//             <span className="text-ink/40 text-[10px]">({product.reviews} reviews)</span>
//           </div>

//           <div className="flex items-center gap-1.5 mt-2">
//             <span className="text-base font-bold text-ink">₹{activePrice}</span>
//             {activeOldPrice && (
//               <span className="text-xs text-ink/40 line-through">₹{activeOldPrice}</span>
//             )}
//             <span className="text-[10px] text-ink/50">/ {product.size}</span>
//           </div>

//           <p className="text-ink/60 text-[10px] leading-relaxed mt-2">
//             {product.description}
//           </p>

//           {/* Quantity + Add to cart */}
//           <div className="flex items-center gap-1.5 mt-3">
//             <div className="flex items-center bg-primary-50 rounded-xl2 px-0.5 py-0.5">
//               <button
//                 onClick={() => setQty((q) => Math.max(1, q - 1))}
//                 className="grid place-items-center w-5 h-5 rounded-xl1 bg-white text-primary-700 shadow-softer"
//                 aria-label="Decrease quantity"
//               >
//                 <Minus size={8} />
//               </button>
//               <span className="w-5 text-center font-semibold text-ink text-xs">{qty}</span>
//               <button
//                 onClick={() => setQty((q) => q + 1)}
//                 className="grid place-items-center w-5 h-5 rounded-xl1 bg-white text-primary-700 shadow-softer"
//                 aria-label="Increase quantity"
//               >
//                 <Plus size={8} />
//               </button>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => addToCart(activeProduct, qty)}
//               className="flex-1 flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs rounded-xl2 py-2 shadow-lift transition-colors"
//             >
//               <ShoppingCart size={10} />
//               {cartItem ? `Add More (${cartItem.qty} in cart)` : "Add to Cart"}
//             </motion.button>

//             <button
//               onClick={() => toggleWishlist(product.id)}
//               aria-label="Toggle wishlist"
//               className="grid place-items-center w-6 h-6 rounded-xl2 bg-white border border-primary-100 shadow-softer shrink-0"
//             >
//               <Heart
//                 size={11}
//                 className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
//               />
//             </button>
//           </div>

//           {cartItem && (
//             <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-primary-700 bg-primary-50 rounded-xl1 px-2 py-1 w-fit">
//               <button
//                 onClick={() => updateQty(product.id, cartItem.qty - 1)}
//                 className="font-bold px-1"
//               >
//                 âˆ’
//               </button>
//               {cartItem.qty} in cart
//               <button
//                 onClick={() => updateQty(product.id, cartItem.qty + 1)}
//                 className="font-bold px-1"
//               >
//                 +
//               </button>
//             </div>
//           )}

//           {/* Trust row */}
//           <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-primary-100/60">
//             <div className="flex items-center gap-1 text-[9px] text-ink/55">
//               <Truck size={9} className="text-primary-600" /> Fast Delivery
//             </div>
//             <div className="flex items-center gap-1 text-[9px] text-ink/55">
//               <ShieldCheck size={9} className="text-primary-600" /> Secure Payment
//             </div>
//             <div className="flex items-center gap-1 text-[9px] text-ink/55">
//               <RotateCcw size={9} className="text-primary-600" /> Easy Returns
//             </div>
//           </div>

//           {/* Ingredients */}
//           {ingredients.length > 0 && (
//             <div className="mt-3.5">
//               <h3 className="text-[10px] font-bold text-ink mb-1">Ingredients</h3>
//               <div className="flex flex-wrap gap-1">
//                 {ingredients.map((ing) => (
//                   <span
//                     key={ing}
//                     className="text-[9px] font-medium text-ink/60 bg-primary-50 px-2 py-0.5 rounded-full"
//                   >
//                     {ing}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Nutrition facts */}
//           {Object.keys(nutrition).length > 0 && (
//             <div className="mt-2.5">
//               <h3 className="text-[10px] font-bold text-ink mb-1">
//                 Nutrition Facts <span className="text-ink/40 font-normal">(per serving)</span>
//               </h3>
//               <div className="grid grid-cols-4 gap-1">
//                 {[
//                   ["Calories", nutrition.calories],
//                   ["Sugar", nutrition.sugar],
//                   ["Protein", nutrition.protein],
//                   ["Sodium", nutrition.sodium],
//                 ].map(([label, value]) => (
//                   <div
//                     key={label}
//                     className="bg-white border border-primary-100 rounded-xl1 py-1.5 text-center"
//                   >
//                     <p className="text-[10px] font-bold text-ink">{value}</p>
//                     <p className="text-[7px] text-ink/45 mt-0.5">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Reviews */}
//       <div className="mt-5.5 sm:mt-6 max-w-3xl">
//         <h2 className="text-sm sm:text-base font-bold text-ink mb-2.5">
//           Customer Reviews
//         </h2>
//         <div className="space-y-2">
//           {dummyReviews.map((review) => (
//             <div
//               key={review.name}
//               className="bg-white rounded-xl3 shadow-softer p-2"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-1.5">
//                   <span className="grid place-items-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 font-semibold text-[10px]">
//                     {review.name.charAt(0)}
//                   </span>
//                   <div>
//                     <p className="text-[10px] font-semibold text-ink">{review.name}</p>
//                     <p className="text-[8px] text-ink/40">{review.date}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={8}
//                       className={
//                         i < review.rating
//                           ? "fill-secondary-500 text-secondary-500"
//                           : "text-ink/15"
//                       }
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-[10px] text-ink/60 mt-1.5 leading-relaxed">
//                 {review.comment}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Related products */}
//       {related.length > 0 && (
//         <div className="-mx-3 sm:-mx-3.5 lg:-mx-4 mt-2">
//           <ProductSection
//             title="You Might Also Like"
//             subtitle="More from this category"
//             products={related}
//             viewAllLink={`/shop?category=${product.category}`}
//           />
//         </div>
//       )}
//     </div>
//   );
// }











import { useEffect, useMemo, useState } from "react";
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
import { commonPackSizes, products, teaPackSizes } from "../data/products";
import { useApp } from "../context/AppContext";
import { BottleSilhouette } from "../components/ProductCard";
import ProductSection from "../components/ProductSection";

const categoryIngredients = {
  juices: [
    "Fruit pulp/juice concentrate",
    "Filtered water",
    "Natural flavour",
    "Vitamin C",
  ],
  "soft-drinks": [
    "Carbonated water",
    "Sugar",
    "Natural flavour",
    "Citric acid",
  ],
  "energy-drinks": [
    "Carbonated water",
    "Caffeine",
    "Taurine",
    "B-vitamins",
    "Sugar",
  ],
  "sparkling-water": ["Carbonated spring water", "Natural flavour"],
  milk: ["Pasteurised milk", "Vitamin D"],
  coffee: ["Brewed coffee", "Milk", "Cane sugar"],
  tea: ["Tea extract", "Filtered water", "Natural flavour"],
  smoothies: ["Fruit puree", "Yogurt", "Honey"],
  "protein-drinks": [
    "Whey protein isolate",
    "Cocoa/vanilla flavour",
    "Milk",
    "Stevia",
  ],
  mocktails: ["Fruit juice blend", "Soda water", "Natural flavour"],
  "health-drinks": [
    "Malt extract",
    "Milk solids",
    "Vitamins & minerals",
    "Cocoa",
  ],
};

const categoryNutrition = {
  juices: {
    calories: 110,
    sugar: "22g",
    protein: "1g",
    sodium: "10mg",
  },
  "soft-drinks": {
    calories: 140,
    sugar: "35g",
    protein: "0g",
    sodium: "25mg",
  },
  "energy-drinks": {
    calories: 120,
    sugar: "27g",
    protein: "0g",
    sodium: "100mg",
  },
  "sparkling-water": {
    calories: 0,
    sugar: "0g",
    protein: "0g",
    sodium: "5mg",
  },
  milk: {
    calories: 150,
    sugar: "12g",
    protein: "8g",
    sodium: "105mg",
  },
  coffee: {
    calories: 90,
    sugar: "10g",
    protein: "3g",
    sodium: "40mg",
  },
  tea: {
    calories: 60,
    sugar: "14g",
    protein: "0g",
    sodium: "5mg",
  },
  smoothies: {
    calories: 180,
    sugar: "24g",
    protein: "4g",
    sodium: "35mg",
  },
  "protein-drinks": {
    calories: 210,
    sugar: "6g",
    protein: "20g",
    sodium: "150mg",
  },
  mocktails: {
    calories: 95,
    sugar: "20g",
    protein: "0g",
    sodium: "15mg",
  },
  "health-drinks": {
    calories: 130,
    sugar: "16g",
    protein: "5g",
    sodium: "80mg",
  },
};

const inferBrand = (product) => {
  if (product.brand) return product.brand;
  const raw = product.name.split("|")[0].trim();
  const parts = raw.split(" ");
  return parts.length > 1 ? parts.slice(0, 2).join(" ") : raw;
};

const inferFlavour = (product) => {
  if (product.flavour) return product.flavour;
  const name = product.name.toLowerCase();
  if (name.includes("cola")) return "Cola";
  if (name.includes("mango")) return "Mango";
  if (name.includes("lemon")) return "Lemon";
  if (name.includes("lime")) return "Lime";
  if (name.includes("apple")) return "Apple";
  if (name.includes("orange")) return "Orange";
  if (name.includes("berry")) return "Berry";
  if (name.includes("litchi") || name.includes("lychee")) return "Litchi";
  if (name.includes("guava")) return "Guava";
  if (name.includes("watermelon")) return "Watermelon";
  return "Classic";
};

const inferPackType = (product, size) => {
  if (product.packType) return product.packType;
  const lower = String(size).toLowerCase();
  if (lower.includes("ml")) {
    const amount = parseFloat(lower);
    return amount <= 330 ? "Can" : "PET Bottle";
  }
  if (lower.includes("l")) return "PET Bottle";
  return "Pack";
};

const formatMoney = (value) => `₹${value}`;

const dummyReviews = [
  {
    name: "Aarav Mehta",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Genuinely tastes fresh, not overly sweet. Delivery was quick too.",
  },
  {
    name: "Priya Nair",
    rating: 4,
    date: "1 month ago",
    comment:
      "Really good, I order this every week now. Packaging could be sturdier.",
  },
  {
    name: "Kabir Singh",
    rating: 5,
    date: "2 months ago",
    comment:
      "Best in this category I've tried so far. Highly recommend.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

  const [qty, setQty] = useState(1);
  const [imgError, setImgError] = useState(false);
  const [selectedPackSize, setSelectedPackSize] = useState("");

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-3 py-11 text-center">
        <h1 className="text-base font-bold text-ink">
          Product not found
        </h1>

        <p className="text-ink/50 mt-1 text-xs">
          The drink you're looking for doesn't exist or was removed.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-1 mt-3 text-primary-700 font-semibold text-xs"
        >
          <ChevronLeft size={10} />
          Back to Shop
        </Link>
      </div>
    );
  }

const isSoftDrink =
  product.category === "soft-drinks" ||
  product.category === "energy-drinks" ||
  product.category === "juices" ||
  product.category === "water";

const isTea = product.category === "tea";

const hasPackSizeSelector = isSoftDrink || isTea;

const packVariants =
  product.variants?.length > 0
    ? product.variants
    : isTea
      ? teaPackSizes.map((size) => ({
          size,
          price: product.price,
          image: product.image,
        }))
      : [{ size: product.size, price: product.price, image: product.image }];

const displayPackSize =
  selectedPackSize ||
  packVariants[0]?.size ||
  product.size ||
  commonPackSizes[0];

const activeVariant =
  packVariants.find(
    (variant) => variant.size === displayPackSize
  ) || packVariants[0];

const activePrice =
  activeVariant?.price ?? product.price;
  const activeImage =
    product.category === "juices" || product.category === "water"
      ? product.image
      : activeVariant?.image || product.image;
  const activeOldPrice = activeVariant?.oldPrice || product.oldPrice;
  const activeCartKey = hasPackSizeSelector ? `${product.id}::${displayPackSize}` : product.id;
  const activeProduct = {
    ...product,
    size: activeVariant?.size || product.size,
    price: activePrice,
    image: activeImage,
    cartKey: activeCartKey,
  };

  const cartItem = cart.find((item) => (item.cartKey || item.id) === activeCartKey);
  const isWishlisted = wishlist.includes(product.id);

  const discount =
    activeOldPrice && activeOldPrice > activePrice
      ? Math.round(100 - (activePrice / activeOldPrice) * 100)
      : null;

  const ingredients = categoryIngredients[product.category] || [];
  const nutrition = categoryNutrition[product.category] || {};

  const related = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 6);

  const displayedImage = activeImage;
  const hasImage = !imgError && !!displayedImage;
  const productBrand = inferBrand(product);
  const productFlavour = inferFlavour(product);
  const productPackType = inferPackType(product, displayPackSize);
  const productStatus = product.status || (product.stockQuantity === 0 ? "Out of Stock" : "Active");
  const productSubCategory =
    product.subCategory || product.subcategory || (isSoftDrink ? "Carbonated soft drink" : product.category.replace("-", " "));
  const productStock = product.stockQuantity ?? 24;
  const productPurchasePrice = product.purchasePrice ?? Math.max(1, Math.round(activePrice * 0.7));
  const productSku = product.sku || `${product.id}-${displayPackSize.replace(/\s+/g, "")}`;
  const productBarcode = product.barcode || "N/A";
  const productGst = product.gst || "18%";
  const productManufacturer =
    product.manufacturer || product.packer || `${productBrand} Beverages Pvt. Ltd.`;
  const productCountry = product.countryOfOrigin || "India";
  const productBestBefore = product.bestBefore || "Refer to package";
  const productDescription = product.description || "No description available.";
  const productSpecs = [
    ["Product Name", product.name],
    ["Category", product.category.replace("-", " ")],
    ["Sub Category", productSubCategory],
    ["Brand", productBrand],
    ["Flavour", productFlavour],
    ["Pack Size", displayPackSize],
    ["Pack Type", productPackType],
    ["MRP", activeOldPrice ? formatMoney(activeOldPrice) : "Not set"],
    ["Selling Price", formatMoney(activePrice)],
    ["Purchase Price", formatMoney(productPurchasePrice)],
    ["Discount", discount ? `${discount}% OFF` : "No discount"],
    ["Stock Quantity", String(productStock)],
    ["SKU", productSku],
    ["Barcode", productBarcode],
    ["GST", productGst],
    ["Manufacturer / Packer", productManufacturer],
    ["Country of Origin", productCountry],
    ["Best Before / Expiry", productBestBefore],
    ["Status", productStatus],
  ];

  useEffect(() => {
    setQty(1);
    setImgError(false);
    setSelectedPackSize(packVariants[0]?.size || product.size || commonPackSizes[0]);
  }, [product.id]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-3.5 lg:px-4 py-3.5 sm:py-4">
      {/* Back to Shop */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-1 text-[10px] font-medium text-ink/50 hover:text-primary-700 transition-colors mb-3"
      >
        <ChevronLeft size={10} />
        Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-5.5">
        {/* =========================
            Gallery
        ========================== */}
        <div>
          <div
            className={`relative h-64 sm:h-80 lg:h-[420px] rounded-xl overflow-hidden ${hasImage
                ? "bg-white"
                : `bg-gradient-to-br ${product.color}`
              }`}
          >
            {discount && (
              <span className="absolute top-3 left-3 z-10 text-xs font-bold text-white bg-secondary-500 px-2.5 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}

            {hasImage ? (
              <motion.img
                src={displayedImage}
                alt={product.name}
                onError={() => setImgError(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-contain"
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <BottleSilhouette className="w-20 sm:w-24" />
              </motion.div>
            )}
          </div>

        </div>

        {/* =========================
            Product Info
        ========================== */}
        <div>
          {/* Category */}
          <span className="inline-block text-[8px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
            {product.category.replace("-", " ")}
          </span>

          {/* Product Name */}
          <h1 className="text-sm sm:text-base font-bold text-ink mt-1.5">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <Star
              size={9}
              className="fill-secondary-500 text-secondary-500"
            />

            <span className="font-semibold text-ink/80 text-[10px]">
              {product.rating}
            </span>

            <span className="text-ink/40 text-[10px]">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-base font-bold text-ink">₹{activePrice}</span>

            {activeOldPrice && (
              <span className="text-xs text-ink/40 line-through">₹{activeOldPrice}</span>
            )}

            <span className="text-[10px] text-ink/50">
              / {hasPackSizeSelector ? displayPackSize : product.size}
            </span>
          </div>

          {/* =========================
              Available Pack Sizes
          ========================== */}
          {hasPackSizeSelector && (
            <div className="mt-3">
              <h3 className="text-[10px] font-bold text-ink mb-1.5">
                {isTea ? "Available Pack Sizes" : "Common Pack Sizes"}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {packVariants.map((variant) => {
                  const { size } = variant;
                  const isSelected =
                    displayPackSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedPackSize(size)
                      }
                      className={`px-2.5 py-1 rounded-full text-[9px] font-semibold border transition-all ${isSelected
                          ? "bg-primary-500 text-white border-primary-500 shadow-softer"
                          : "bg-white text-ink/60 border-primary-100 hover:border-primary-300 hover:text-primary-700"
                        }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-ink/60 text-[10px] leading-relaxed mt-2">
            {productDescription}
          </p>

          {/* =========================
              Quantity + Add to Cart
          ========================== */}
          <div className="flex items-center gap-1.5 mt-3">
            {/* Quantity */}
            <div className="flex items-center bg-primary-50 rounded-xl2 px-0.5 py-0.5">
              <button
                onClick={() =>
                  setQty((q) => Math.max(1, q - 1))
                }
                className="grid place-items-center w-5 h-5 rounded-xl1 bg-white text-primary-700 shadow-softer"
                aria-label="Decrease quantity"
              >
                <Minus size={8} />
              </button>

              <span className="w-5 text-center font-semibold text-ink text-xs">
                {qty}
              </span>

              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid place-items-center w-5 h-5 rounded-xl1 bg-white text-primary-700 shadow-softer"
                aria-label="Increase quantity"
              >
                <Plus size={8} />
              </button>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => addToCart(activeProduct, qty)}
              className="flex-1 flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs rounded-xl2 py-2 shadow-lift transition-colors"
            >
              <ShoppingCart size={10} />

              {cartItem
                ? `Add More (${cartItem.qty} in cart)`
                : "Add to Cart"}
            </motion.button>

            {/* Wishlist */}
            <button
              onClick={() =>
                toggleWishlist(product.id)
              }
              aria-label="Toggle wishlist"
              className="grid place-items-center w-6 h-6 rounded-xl2 bg-white border border-primary-100 shadow-softer shrink-0"
            >
              <Heart
                size={11}
                className={
                  isWishlisted
                    ? "fill-secondary-500 text-secondary-500"
                    : "text-ink/40"
                }
              />
            </button>
          </div>

          {/* Cart Status */}
          {cartItem && (
            <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-primary-700 bg-primary-50 rounded-xl1 px-2 py-1 w-fit">
              <button
                onClick={() =>
                  updateQty(
                    activeCartKey,
                    cartItem.qty - 1
                  )
                }
                className="font-bold px-1"
              >
                âˆ’
              </button>

              {cartItem.qty} in cart

              <button
                onClick={() =>
                  updateQty(
                    activeCartKey,
                    cartItem.qty + 1
                  )
                }
                className="font-bold px-1"
              >
                +
              </button>
            </div>
          )}

          {/* =========================
              Trust Row
          ========================== */}
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-primary-100/60">
            <div className="flex items-center gap-1 text-[9px] text-ink/55">
              <Truck
                size={9}
                className="text-primary-600"
              />
              Fast Delivery
            </div>

            <div className="flex items-center gap-1 text-[9px] text-ink/55">
              <ShieldCheck
                size={9}
                className="text-primary-600"
              />
              Secure Payment
            </div>

            <div className="flex items-center gap-1 text-[9px] text-ink/55">
              <RotateCcw
                size={9}
                className="text-primary-600"
              />
              Easy Returns
            </div>
          </div>

          {/* =========================
              Product Details
          ========================== */}
          <div className="mt-3.5">
            <h3 className="text-[10px] font-bold text-ink mb-1.5">
              Product Details
            </h3>

            <div className="grid gap-1.5 sm:grid-cols-2">
              {productSpecs.map(([label, value]) => (
                <div
                  key={label}
                  className="bg-white border border-primary-100 rounded-xl2 px-2 py-1.5"
                >
                  <p className="text-[8px] uppercase tracking-wide text-ink/40">
                    {label}
                  </p>
                  <p className="text-[10px] font-semibold text-ink mt-0.5 leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              Ingredients
          ========================== */}
          {ingredients.length > 0 && (
            <div className="mt-3.5">
              <h3 className="text-[10px] font-bold text-ink mb-1">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-1">
                {ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-[9px] font-medium text-ink/60 bg-primary-50 px-2 py-0.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =========================
              Nutrition Facts
          ========================== */}
          {Object.keys(nutrition).length > 0 && (
            <div className="mt-2.5">
              <h3 className="text-[10px] font-bold text-ink mb-1">
                Nutrition Facts{" "}
                <span className="text-ink/40 font-normal">
                  (per serving)
                </span>
              </h3>

              <div className="grid grid-cols-4 gap-1">
                {[
                  ["Calories", nutrition.calories],
                  ["Sugar", nutrition.sugar],
                  ["Protein", nutrition.protein],
                  ["Sodium", nutrition.sodium],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-white border border-primary-100 rounded-xl1 py-1.5 text-center"
                  >
                    <p className="text-[10px] font-bold text-ink">
                      {value}
                    </p>

                    <p className="text-[7px] text-ink/45 mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =========================
          Reviews
      ========================== */}
      <div className="mt-5.5 sm:mt-6 max-w-3xl">
        <h2 className="text-sm sm:text-base font-bold text-ink mb-2.5">
          Customer Reviews
        </h2>

        <div className="space-y-2">
          {dummyReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl3 shadow-softer p-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-primary-100 text-primary-700 font-semibold text-[10px]">
                    {review.name.charAt(0)}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold text-ink">
                      {review.name}
                    </p>

                    <p className="text-[8px] text-ink/40">
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={8}
                      className={
                        i < review.rating
                          ? "fill-secondary-500 text-secondary-500"
                          : "text-ink/15"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="text-[10px] text-ink/60 mt-1.5 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          Related Products
      ========================== */}
      {related.length > 0 && (
        <div className="-mx-3 sm:-mx-3.5 lg:-mx-4 mt-2">
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



