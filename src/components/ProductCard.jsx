// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useApp } from "../context/AppContext";

// export default function ProductCard({ product }) {
//   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

//   const cartItem = cart.find((item) => item.id === product.id);
//   const isWishlisted = wishlist.includes(product.id);
//   const discount =
//     product.oldPrice && product.oldPrice > product.price
//       ? Math.round(100 - (product.price / product.oldPrice) * 100)
//       : null;

//   return (
//     <div className="relative flex flex-col h-full bg-white rounded-xl4 shadow-softer hover:shadow-lift transition-shadow duration-300 overflow-hidden group">
//       {/* Wishlist button */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           toggleWishlist(product.id);
//         }}
//         aria-label="Toggle wishlist"
//         className="absolute top-3 right-3 z-10 grid place-items-center w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-softer hover:scale-110 transition-transform"
//       >
//         <Heart
//           size={15}
//           className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
//         />
//       </button>

//       {/* Discount badge */}
//       {discount && (
//         <span className="absolute top-3 left-3 z-10 text-[10px] font-bold text-white bg-secondary-500 px-2 py-1 rounded-lg">
//           {discount}% OFF
//         </span>
//       )}

//       {/* Image / placeholder illustration */}
//       <Link to={`/product/${product.id}`} className="block">
//         <div
//           className={`relative h-25 sm:h-40 bg-gradient-to-br ${product.color} overflow-hidden`}
//         >
//           <motion.div
//             whileHover={{ scale: 1.08 }}
//             transition={{ duration: 0.4 }}
//             className="absolute inset-0 grid place-items-center"
//           >
//             <BottleSilhouette />
//           </motion.div>
//         </div>
//       </Link>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-3.5 sm:p-4">
//         <div className="flex items-center gap-1 text-xs text-ink/60 mb-1">
//           <Star size={12} className="fill-secondary-500 text-secondary-500" />
//           <span className="font-semibold text-ink/80">{product.rating}</span>
//           <span className="text-ink/40">({product.reviews})</span>
//         </div>

//         <Link to={`/product/${product.id}`}>
//           <h3 className="text-sm font-semibold text-ink leading-snug line-clamp-2 hover:text-primary-700 transition-colors">
//             {product.name}
//           </h3>
//         </Link>
//         <p className="text-xs text-ink/45 mt-0.5">{product.size}</p>

//         <div className="flex items-center gap-2 mt-2">
//           <span className="text-base font-bold text-ink">₹{product.price}</span>
//           {product.oldPrice && (
//             <span className="text-xs text-ink/40 line-through">₹{product.oldPrice}</span>
//           )}
//         </div>

//         <div className="mt-3 mt-auto pt-3">
//           <AnimatePresence mode="wait" initial={false}>
//             {cartItem ? (
//               <motion.div
//                 key="stepper"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="flex items-center justify-between bg-primary-50 rounded-xl2 px-1 py-1"
//               >
//                 <button
//                   onClick={() => updateQty(product.id, cartItem.qty - 1)}
//                   className="grid place-items-center w-7 h-7 rounded-xl2 bg-white text-primary-700 shadow-softer hover:bg-primary-100 transition-colors"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={13} />
//                 </button>
//                 <span className="text-sm font-semibold text-primary-800 min-w-[1.5rem] text-center">
//                   {cartItem.qty}
//                 </span>
//                 <button
//                   onClick={() => updateQty(product.id, cartItem.qty + 1)}
//                   className="grid place-items-center w-7 h-7 rounded-xl2 bg-white text-primary-700 shadow-softer hover:bg-primary-100 transition-colors"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={13} />
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.button
//                 key="add"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => addToCart(product, 1)}
//                 className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl2 py-2 transition-colors"
//               >
//                 <ShoppingCart size={14} /> Add
//               </motion.button>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function BottleSilhouette({ className = "w-14 sm:w-16" }) {
//   return (
//     <svg viewBox="0 0 100 200" className={`${className} h-auto opacity-90 drop-shadow-md`}>
//       <rect x="42" y="8" width="16" height="14" rx="3" fill="white" fillOpacity="0.9" />
//       <path
//         d="M46 22 L46 36 Q46 42 40 45 L60 45 Q54 42 54 36 L54 22 Z"
//         fill="white"
//         fillOpacity="0.85"
//       />
//       <path
//         d="M40 45
//            Q22 58 20 82
//            L20 178
//            Q20 192 34 192
//            L66 192
//            Q80 192 80 178
//            L80 82
//            Q78 58 60 45
//            Z"
//         fill="white"
//         fillOpacity="0.85"
//       />
//       <rect x="28" y="105" width="44" height="46" rx="8" fill="white" fillOpacity="0.35" />
//     </svg>
//   );
// }
















// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useApp } from "../context/AppContext";

// export default function ProductCard({ product }) {
//   const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();

//   const cartItem = cart.find((item) => item.id === product.id);
//   const isWishlisted = wishlist.includes(product.id);
//   const discount =
//     product.oldPrice && product.oldPrice > product.price
//       ? Math.round(100 - (product.price / product.oldPrice) * 100)
//       : null;

//   return (
//     <div className="relative flex flex-col h-full bg-white rounded-lg border border-ink/10 hover:border-ink/20 hover:shadow-sm transition-all duration-200 overflow-hidden group">
//       {/* Wishlist button */}
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           toggleWishlist(product.id);
//         }}
//         aria-label="Toggle wishlist"
//         className="absolute top-2 right-2 z-10 grid place-items-center w-6 h-6 rounded-full bg-white/95 border border-ink/10 hover:border-ink/20 transition-colors"
//       >
//         <Heart
//           size={12}
//           className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
//         />
//       </button>

//       {/* Discount badge */}
//       {discount && (
//         <span className="absolute top-2 left-2 z-10 text-[9px] font-semibold tracking-wide text-white bg-ink/80 px-1.5 py-0.5 rounded">
//           {discount}% OFF
//         </span>
//       )}

//       {/* Image / placeholder illustration */}
//       <Link to={`/product/${product.id}`} className="block">
//         <div
//           className={`relative h-24 sm:h-25 bg-gradient-to-br ${product.color} overflow-hidden`}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0 grid place-items-center"
//           >
//             <BottleSilhouette />
//           </motion.div>
//         </div>
//       </Link>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-2.5">
//         <div className="flex items-center gap-1 text-[11px] text-ink/55 mb-0.5">
//           <Star size={10} className="fill-secondary-500 text-secondary-500" />
//           <span className="font-medium text-ink/75">{product.rating}</span>
//           <span className="text-ink/35">({product.reviews})</span>
//         </div>

//         <Link to={`/product/${product.id}`}>
//           <h3 className="text-[13px] font-medium text-ink leading-snug line-clamp-2 hover:text-primary-700 transition-colors">
//             {product.name}
//           </h3>
//         </Link>
//         <p className="text-[11px] text-ink/40 mt-0.5">{product.size}</p>

//         <div className="flex items-center gap-1.5 mt-1.5">
//           <span className="text-sm font-semibold text-ink">₹{product.price}</span>
//           {product.oldPrice && (
//             <span className="text-[11px] text-ink/40 line-through">₹{product.oldPrice}</span>
//           )}
//         </div>

//         <div className="mt-2 mt-auto pt-2">
//           <AnimatePresence mode="wait" initial={false}>
//             {cartItem ? (
//               <motion.div
//                 key="stepper"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="flex items-center justify-between bg-ink/5 rounded-md px-0.5 py-0.5"
//               >
//                 <button
//                   onClick={() => updateQty(product.id, cartItem.qty - 1)}
//                   className="grid place-items-center w-6 h-6 rounded bg-white text-ink/70 border border-ink/10 hover:border-ink/20 transition-colors"
//                   aria-label="Decrease quantity"
//                 >
//                   <Minus size={11} />
//                 </button>
//                 <span className="text-xs font-medium text-ink min-w-[1.25rem] text-center">
//                   {cartItem.qty}
//                 </span>
//                 <button
//                   onClick={() => updateQty(product.id, cartItem.qty + 1)}
//                   className="grid place-items-center w-6 h-6 rounded bg-white text-ink/70 border border-ink/10 hover:border-ink/20 transition-colors"
//                   aria-label="Increase quantity"
//                 >
//                   <Plus size={11} />
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.button
//                 key="add"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => addToCart(product, 1)}
//                 className="w-full flex items-center justify-center gap-1 text-xs font-medium text-ink bg-white hover:bg-ink/5 border border-ink/15 hover:border-ink/25 rounded-md py-1.5 transition-colors"
//               >
//                 <ShoppingCart size={12} /> Add
//               </motion.button>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function BottleSilhouette({ className = "w-10 sm:w-11" }) {
//   return (
//     <svg viewBox="0 0 100 200" className={`${className} h-auto opacity-90 drop-shadow-sm`}>
//       <rect x="42" y="8" width="16" height="14" rx="3" fill="white" fillOpacity="0.9" />
//       <path
//         d="M46 22 L46 36 Q46 42 40 45 L60 45 Q54 42 54 36 L54 22 Z"
//         fill="white"
//         fillOpacity="0.85"
//       />
//       <path
//         d="M40 45
//            Q22 58 20 82
//            L20 178
//            Q20 192 34 192
//            L66 192
//            Q80 192 80 178
//            L80 82
//            Q78 58 60 45
//            Z"
//         fill="white"
//         fillOpacity="0.85"
//       />
//       <rect x="28" y="105" width="44" height="46" rx="8" fill="white" fillOpacity="0.35" />
//     </svg>
//   );
// }










import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQty, wishlist, toggleWishlist } = useApp();
  const [imgError, setImgError] = useState(false);

  const cartItem = cart.find((item) => item.id === product.id);
  const isWishlisted = wishlist.includes(product.id);
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(100 - (product.price / product.oldPrice) * 100)
      : null;

  return (
    <div className="relative flex flex-col h-full bg-white rounded-lg border border-ink/10 hover:border-ink/20 hover:shadow-sm transition-all duration-200 overflow-hidden group">
      {/* Wishlist button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        aria-label="Toggle wishlist"
        className="absolute top-2 right-2 z-10 grid place-items-center w-6 h-6 rounded-full bg-white/95 border border-ink/10 hover:border-ink/20 transition-colors"
      >
        <Heart
          size={12}
          className={isWishlisted ? "fill-secondary-500 text-secondary-500" : "text-ink/40"}
        />
      </button>

      {/* Discount badge */}
      {discount && (
        <span className="absolute top-2 left-2 z-10 text-[9px] font-semibold tracking-wide text-white bg-ink/80 px-1.5 py-0.5 rounded">
          {discount}% OFF
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div
          className={`relative h-24 sm:h-25 bg-gradient-to-br ${product.color} overflow-hidden`}
        >
          {!imgError && product.image ? (
            <motion.img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 grid place-items-center"
            >
              <BottleSilhouette />
            </motion.div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-2.5">
        <div className="flex items-center gap-1 text-[11px] text-ink/55 mb-0.5">
          <Star size={10} className="fill-secondary-500 text-secondary-500" />
          <span className="font-medium text-ink/75">{product.rating}</span>
          <span className="text-ink/35">({product.reviews})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-[13px] font-medium text-ink leading-snug line-clamp-2 hover:text-primary-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] text-ink/40 mt-0.5">{product.size}</p>

        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-sm font-semibold text-ink">₹{product.price}</span>
          {product.oldPrice && (
            <span className="text-[11px] text-ink/40 line-through">₹{product.oldPrice}</span>
          )}
        </div>

        <div className="mt-2 mt-auto pt-2">
          <AnimatePresence mode="wait" initial={false}>
            {cartItem ? (
              <motion.div
                key="stepper"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-between bg-ink/5 rounded-md px-0.5 py-0.5"
              >
                <button
                  onClick={() => updateQty(product.id, cartItem.qty - 1)}
                  className="grid place-items-center w-6 h-6 rounded bg-white text-ink/70 border border-ink/10 hover:border-ink/20 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={11} />
                </button>
                <span className="text-xs font-medium text-ink min-w-[1.25rem] text-center">
                  {cartItem.qty}
                </span>
                <button
                  onClick={() => updateQty(product.id, cartItem.qty + 1)}
                  className="grid place-items-center w-6 h-6 rounded bg-white text-ink/70 border border-ink/10 hover:border-ink/20 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={11} />
                </button>
              </motion.div>
            ) : (
              <motion.button
                key="add"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(product, 1)}
                className="w-full flex items-center justify-center gap-1 text-xs font-medium text-ink bg-white hover:bg-ink/5 border border-ink/15 hover:border-ink/25 rounded-md py-1.5 transition-colors"
              >
                <ShoppingCart size={12} /> Add
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function BottleSilhouette({ className = "w-10 sm:w-11" }) {
  return (
    <svg viewBox="0 0 100 200" className={`${className} h-auto opacity-90 drop-shadow-sm`}>
      <rect x="42" y="8" width="16" height="14" rx="3" fill="white" fillOpacity="0.9" />
      <path
        d="M46 22 L46 36 Q46 42 40 45 L60 45 Q54 42 54 36 L54 22 Z"
        fill="white"
        fillOpacity="0.85"
      />
      <path
        d="M40 45
           Q22 58 20 82
           L20 178
           Q20 192 34 192
           L66 192
           Q80 192 80 178
           L80 82
           Q78 58 60 45
           Z"
        fill="white"
        fillOpacity="0.85"
      />
      <rect x="28" y="105" width="44" height="46" rx="8" fill="white" fillOpacity="0.35" />
    </svg>
  );
}