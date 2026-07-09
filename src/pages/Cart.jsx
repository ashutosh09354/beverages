// // import { useMemo, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Minus,
// //   Plus,
// //   Trash2,
// //   ShoppingBag,
// //   Tag,
// //   CheckCircle2,
// //   ArrowRight,
// //   XCircle,
// // } from "lucide-react";
// // import { products } from "../data/products";
// // import { useApp } from "../context/AppContext";
// // import { BottleSilhouette } from "../components/ProductCard";

// // const FREE_DELIVERY_THRESHOLD = 499;
// // const DELIVERY_FEE = 40;
// // const TAX_RATE = 0.05;
// // const VALID_COUPON = "FRESH10";

// // export default function Cart() {
// //   const { cart, updateQty, removeFromCart } = useApp();
// //   const [couponInput, setCouponInput] = useState("");
// //   const [appliedCoupon, setAppliedCoupon] = useState(null);
// //   const [couponError, setCouponError] = useState("");

// //   const items = useMemo(
// //     () =>
// //       cart
// //         .map((item) => {
// //           const product = products.find((p) => p.id === item.id);
// //           return product ? { ...product, qty: item.qty } : null;
// //         })
// //         .filter(Boolean),
// //     [cart]
// //   );

// //   const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
// //   const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
// //   const taxable = subtotal - discount;
// //   const tax = Math.round(taxable * TAX_RATE);
// //   const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
// //   const total = taxable + tax + delivery;

// //   const handleApplyCoupon = (e) => {
// //     e.preventDefault();
// //     if (couponInput.trim().toUpperCase() === VALID_COUPON) {
// //       setAppliedCoupon(VALID_COUPON);
// //       setCouponError("");
// //     } else {
// //       setCouponError("Invalid or expired coupon code.");
// //       setAppliedCoupon(null);
// //     }
// //   };

// //   const removeCoupon = () => {
// //     setAppliedCoupon(null);
// //     setCouponInput("");
// //     setCouponError("");
// //   };

// //   if (items.length === 0) {
// //     return (
// //       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
// //         <motion.div
// //           animate={{ y: [0, -10, 0] }}
// //           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //           className="inline-grid place-items-center w-24 h-24 rounded-full bg-primary-50 text-primary-400 mb-6"
// //         >
// //           <ShoppingBag size={40} />
// //         </motion.div>
// //         <h1 className="text-2xl font-bold text-ink">Your cart is empty</h1>
// //         <p className="text-ink/50 mt-2 max-w-sm mx-auto">
// //           Looks like you haven't added any drinks yet. Let's fix that.
// //         </p>
// //         <Link to="/shop">
// //           <motion.span
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.97 }}
// //             className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift"
// //           >
// //             Shop Now <ArrowRight size={16} />
// //           </motion.span>
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
// //       <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-1">Your Cart</h1>
// //       <p className="text-ink/50 text-sm mb-7">
// //         {items.length} {items.length === 1 ? "item" : "items"} in your cart
// //       </p>

// //       <div className="grid lg:grid-cols-[1fr_360px] gap-8">
// //         {/* Items */}
// //         <div className="space-y-3">
// //           <AnimatePresence>
// //             {items.map((item) => (
// //               <motion.div
// //                 key={item.id}
// //                 layout
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="flex items-center gap-4 bg-white rounded-xl4 shadow-softer p-3.5 sm:p-4"
// //               >
// //                 <Link
// //                   to={`/product/${item.id}`}
// //                   className={`shrink-0 grid place-items-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl3 bg-gradient-to-br ${item.color}`}
// //                 >
// //                   <BottleSilhouette className="w-10 sm:w-12" />
// //                 </Link>

// //                 <div className="flex-1 min-w-0">
// //                   <Link to={`/product/${item.id}`}>
// //                     <h3 className="text-sm sm:text-base font-semibold text-ink hover:text-primary-700 transition-colors truncate">
// //                       {item.name}
// //                     </h3>
// //                   </Link>
// //                   <p className="text-xs text-ink/45 mt-0.5">{item.size}</p>
// //                   <p className="text-sm font-bold text-ink mt-1.5">
// //                     ₹{item.price}
// //                     <span className="text-xs text-ink/40 font-normal"> / unit</span>
// //                   </p>
// //                 </div>

// //                 <div className="flex flex-col items-end gap-2 shrink-0">
// //                   <button
// //                     onClick={() => removeFromCart(item.id)}
// //                     aria-label="Remove item"
// //                     className="text-ink/30 hover:text-red-500 transition-colors"
// //                   >
// //                     <Trash2 size={16} />
// //                   </button>

// //                   <div className="flex items-center bg-primary-50 rounded-xl2 px-1 py-1">
// //                     <button
// //                       onClick={() => updateQty(item.id, item.qty - 1)}
// //                       className="grid place-items-center w-7 h-7 rounded-xl2 bg-white text-primary-700 shadow-softer"
// //                       aria-label="Decrease quantity"
// //                     >
// //                       <Minus size={12} />
// //                     </button>
// //                     <span className="w-7 text-center text-sm font-semibold text-ink">
// //                       {item.qty}
// //                     </span>
// //                     <button
// //                       onClick={() => updateQty(item.id, item.qty + 1)}
// //                       className="grid place-items-center w-7 h-7 rounded-xl2 bg-white text-primary-700 shadow-softer"
// //                       aria-label="Increase quantity"
// //                     >
// //                       <Plus size={12} />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

// //         {/* Order summary */}
// //         <div className="lg:sticky lg:top-[140px] h-fit space-y-4">
// //           {/* Coupon */}
// //           <div className="bg-white rounded-xl4 shadow-softer p-4 sm:p-5">
// //             <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-1.5">
// //               <Tag size={15} className="text-primary-600" /> Coupon Code
// //             </h3>

// //             {appliedCoupon ? (
// //               <div className="flex items-center justify-between bg-primary-50 rounded-xl2 px-3.5 py-2.5">
// //                 <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-700">
// //                   <CheckCircle2 size={15} /> {appliedCoupon} applied
// //                 </span>
// //                 <button
// //                   onClick={removeCoupon}
// //                   className="text-ink/40 hover:text-red-500"
// //                   aria-label="Remove coupon"
// //                 >
// //                   <XCircle size={16} />
// //                 </button>
// //               </div>
// //             ) : (
// //               <form onSubmit={handleApplyCoupon} className="flex gap-2">
// //                 <input
// //                   type="text"
// //                   value={couponInput}
// //                   onChange={(e) => setCouponInput(e.target.value)}
// //                   placeholder="Try FRESH10"
// //                   className="flex-1 px-3.5 py-2.5 rounded-xl2 bg-primary-50/60 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15"
// //                 />
// //                 <button
// //                   type="submit"
// //                   className="px-4 py-2.5 rounded-xl2 bg-ink text-white text-sm font-semibold shrink-0"
// //                 >
// //                   Apply
// //                 </button>
// //               </form>
// //             )}
// //             {couponError && (
// //               <p className="text-xs text-red-500 mt-2">{couponError}</p>
// //             )}
// //           </div>

// //           {/* Summary */}
// //           <div className="bg-white rounded-xl4 shadow-softer p-4 sm:p-5">
// //             <h3 className="text-sm font-bold text-ink mb-4">Order Summary</h3>
// //             <div className="space-y-2.5 text-sm">
// //               <div className="flex justify-between text-ink/60">
// //                 <span>Subtotal</span>
// //                 <span className="text-ink font-medium">₹{subtotal}</span>
// //               </div>
// //               {appliedCoupon && (
// //                 <div className="flex justify-between text-primary-600">
// //                   <span>Coupon discount</span>
// //                   <span className="font-medium">−₹{discount}</span>
// //                 </div>
// //               )}
// //               <div className="flex justify-between text-ink/60">
// //                 <span>Tax (5%)</span>
// //                 <span className="text-ink font-medium">₹{tax}</span>
// //               </div>
// //               <div className="flex justify-between text-ink/60">
// //                 <span>Delivery</span>
// //                 <span className={`font-medium ${delivery === 0 ? "text-primary-600" : "text-ink"}`}>
// //                   {delivery === 0 ? "FREE" : `₹${delivery}`}
// //                 </span>
// //               </div>
// //               {delivery > 0 && (
// //                 <p className="text-[11px] text-ink/40">
// //                   Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more for free delivery
// //                 </p>
// //               )}
// //             </div>

// //             <div className="border-t border-primary-100 mt-4 pt-4 flex justify-between items-center">
// //               <span className="font-bold text-ink">Grand Total</span>
// //               <span className="text-xl font-bold text-ink">₹{total}</span>
// //             </div>

// //             <Link to="/checkout">
// //               <motion.button
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.97 }}
// //                 className="w-full mt-5 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors"
// //               >
// //                 Proceed to Checkout <ArrowRight size={16} />
// //               </motion.button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }












// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Minus,
//   Plus,
//   Trash2,
//   ShoppingBag,
//   Tag,
//   CheckCircle2,
//   ArrowRight,
//   XCircle,
// } from "lucide-react";
// import { products } from "../data/products";
// import { useApp } from "../context/AppContext";
// import { BottleSilhouette } from "../components/ProductCard";

// const FREE_DELIVERY_THRESHOLD = 499;
// const DELIVERY_FEE = 40;
// const TAX_RATE = 0.05;
// const VALID_COUPON = "FRESH10";

// export default function Cart() {
//   const { cart, updateQty, removeFromCart } = useApp();
//   const [couponInput, setCouponInput] = useState("");
//   const [appliedCoupon, setAppliedCoupon] = useState(null);
//   const [couponError, setCouponError] = useState("");

//   const items = useMemo(
//     () =>
//       cart
//         .map((item) => {
//           const product = products.find((p) => p.id === item.id);
//           return product ? { ...product, qty: item.qty } : null;
//         })
//         .filter(Boolean),
//     [cart]
//   );

//   const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
//   const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
//   const taxable = subtotal - discount;
//   const tax = Math.round(taxable * TAX_RATE);
//   const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
//   const total = taxable + tax + delivery;

//   const handleApplyCoupon = (e) => {
//     e.preventDefault();
//     if (couponInput.trim().toUpperCase() === VALID_COUPON) {
//       setAppliedCoupon(VALID_COUPON);
//       setCouponError("");
//     } else {
//       setCouponError("Invalid or expired coupon code.");
//       setAppliedCoupon(null);
//     }
//   };

//   const removeCoupon = () => {
//     setAppliedCoupon(null);
//     setCouponInput("");
//     setCouponError("");
//   };

//   if (items.length === 0) {
//     return (
//       <div className="max-w-3xl mx-auto px-2 sm:px-3 lg:px-4 py-10 sm:py-14 text-center">
//         <motion.div
//           animate={{ y: [0, -5, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           className="inline-grid place-items-center w-12 h-12 rounded-full bg-primary-50 text-primary-400 mb-3"
//         >
//           <ShoppingBag size={20} />
//         </motion.div>
//         <h1 className="text-base font-bold text-ink">Your cart is empty</h1>
//         <p className="text-ink/50 mt-1 max-w-[10rem] mx-auto text-[11px]">
//           Looks like you haven't added any drinks yet. Let's fix that.
//         </p>
//         <Link to="/shop">
//           <motion.span
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center gap-1 mt-3.5 px-3.5 py-[0.4375rem] rounded-lg bg-primary-500 text-white font-semibold text-[11px] shadow-lift"
//           >
//             Shop Now <ArrowRight size={9} />
//           </motion.span>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4 sm:py-5">
//       <h1 className="text-base sm:text-lg font-bold text-ink mb-0.5">Your Cart</h1>
//       <p className="text-ink/50 text-[11px] mb-3.5">
//         {items.length} {items.length === 1 ? "item" : "items"} in your cart
//       </p>

//       <div className="grid lg:grid-cols-[1fr_180px] gap-4">
//         {/* Items */}
//         <div className="space-y-1.5">
//           <AnimatePresence>
//             {items.map((item) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, y: 5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, x: -15, height: 0, marginBottom: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex items-center gap-2 bg-white rounded-xl2 shadow-softer p-1.75 sm:p-2"
//               >
//                 <Link
//                   to={`/product/${item.id}`}
//                   className={`shrink-0 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${item.color}`}
//                 >
//                   <BottleSilhouette className="w-5 sm:w-6" />
//                 </Link>

//                 <div className="flex-1 min-w-0">
//                   <Link to={`/product/${item.id}`}>
//                     <h3 className="text-[11px] sm:text-xs font-semibold text-ink hover:text-primary-700 transition-colors truncate">
//                       {item.name}
//                     </h3>
//                   </Link>
//                   <p className="text-[10px] text-ink/45 mt-[0.0625rem]">{item.size}</p>
//                   <p className="text-[11px] font-bold text-ink mt-[0.1875rem]">
//                     ₹{item.price}
//                     <span className="text-[10px] text-ink/40 font-normal"> / unit</span>
//                   </p>
//                 </div>

//                 <div className="flex flex-col items-end gap-1 shrink-0">
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     aria-label="Remove item"
//                     className="text-ink/30 hover:text-red-500 transition-colors"
//                   >
//                     <Trash2 size={9} />
//                   </button>

//                   <div className="flex items-center bg-primary-50 rounded-lg px-0.5 py-0.5">
//                     <button
//                       onClick={() => updateQty(item.id, item.qty - 1)}
//                       className="grid place-items-center w-3.5 h-3.5 rounded-lg bg-white text-primary-700 shadow-softer"
//                       aria-label="Decrease quantity"
//                     >
//                       <Minus size={7} />
//                     </button>
//                     <span className="w-3.5 text-center text-[11px] font-semibold text-ink">
//                       {item.qty}
//                     </span>
//                     <button
//                       onClick={() => updateQty(item.id, item.qty + 1)}
//                       className="grid place-items-center w-3.5 h-3.5 rounded-lg bg-white text-primary-700 shadow-softer"
//                       aria-label="Increase quantity"
//                     >
//                       <Plus size={7} />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Order summary */}
//         <div className="lg:sticky lg:top-[70px] h-fit space-y-2">
//           {/* Coupon */}
//           <div className="bg-white rounded-xl shadow-softer p-2 sm:p-2.5">
//             <h3 className="text-[11px] font-bold text-ink mb-1.5 flex items-center gap-[0.1875rem]">
//               <Tag size={8} className="text-primary-600" /> Coupon Code
//             </h3>

//             {appliedCoupon ? (
//               <div className="flex items-center justify-between bg-primary-50 rounded-lg px-[0.4375rem] py-[0.3125rem]">
//                 <span className="flex items-center gap-[0.1875rem] text-[11px] font-semibold text-primary-700">
//                   <CheckCircle2 size={8} /> {appliedCoupon} applied
//                 </span>
//                 <button
//                   onClick={removeCoupon}
//                   className="text-ink/40 hover:text-red-500"
//                   aria-label="Remove coupon"
//                 >
//                   <XCircle size={9} />
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleApplyCoupon} className="flex gap-1">
//                 <input
//                   type="text"
//                   value={couponInput}
//                   onChange={(e) => setCouponInput(e.target.value)}
//                   placeholder="Try FRESH10"
//                   className="flex-1 px-[0.3rem] py-[0.3125rem] rounded-lg bg-primary-50/60 border border-primary-100 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary-500/15"
//                 />
//                 <button
//                   type="submit"
//                   className="px-2 py-[0.3125rem] rounded-lg bg-ink text-white text-[11px] font-semibold shrink-0"
//                 >
//                   Apply
//                 </button>
//               </form>
//             )}
//             {couponError && (
//               <p className="text-[10px] text-red-500 mt-1">{couponError}</p>
//             )}
//           </div>

//           {/* Summary */}
//           <div className="bg-white rounded-xl2 shadow-softer p-2 sm:p-2.5">
//             <h3 className="text-[11px] font-bold text-ink mb-2">Order Summary</h3>
//             <div className="space-y-[0.3125rem] text-[11px]">
//               <div className="flex justify-between text-ink/60">
//                 <span>Subtotal</span>
//                 <span className="text-ink font-medium">₹{subtotal}</span>
//               </div>
//               {appliedCoupon && (
//                 <div className="flex justify-between text-primary-600">
//                   <span>Coupon discount</span>
//                   <span className="font-medium">−₹{discount}</span>
//                 </div>
//               )}
//               <div className="flex justify-between text-ink/60">
//                 <span>Tax (5%)</span>
//                 <span className="text-ink font-medium">₹{tax}</span>
//               </div>
//               <div className="flex justify-between text-ink/60">
//                 <span>Delivery</span>
//                 <span className={`font-medium ${delivery === 0 ? "text-primary-600" : "text-ink"}`}>
//                   {delivery === 0 ? "FREE" : `₹${delivery}`}
//                 </span>
//               </div>
//               {delivery > 0 && (
//                 <p className="text-[9px] text-ink/40">
//                   Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more for free delivery
//                 </p>
//               )}
//             </div>

//             <div className="border-t border-primary-100 mt-2 pt-2 flex justify-between items-center">
//               <span className="font-bold text-[11px] text-ink">Grand Total</span>
//               <span className="text-sm font-bold text-ink">₹{total}</span>
//             </div>

//             <Link to="/checkout">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="w-full mt-2.5 flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg py-[0.4375rem] text-[11px] shadow-lift transition-colors"
//               >
//                 Proceed to Checkout <ArrowRight size={9} />
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Tag,
  CheckCircle2,
  ArrowRight,
  XCircle,
} from "lucide-react";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";
import { BottleSilhouette } from "../components/ProductCard";

const FREE_DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 40;
const TAX_RATE = 0.05;
const VALID_COUPON = "FRESH10";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useApp();
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  const items = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((p) => p.id === item.id);
          return product ? { ...product, qty: item.qty } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const taxable = subtotal - discount;
  const tax = Math.round(taxable * TAX_RATE);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = taxable + tax + delivery;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim().toUpperCase() === VALID_COUPON) {
      setAppliedCoupon(VALID_COUPON);
      setCouponError("");
    } else {
      setCouponError("Invalid or expired coupon code.");
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponError("");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-2 sm:px-3 lg:px-4 py-10 sm:py-14 text-center">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-grid place-items-center w-12 h-12 rounded-full bg-primary-50 text-primary-400 mb-3"
        >
          <ShoppingBag size={20} />
        </motion.div>
        <h1 className="text-base font-bold text-ink">Your cart is empty</h1>
        <p className="text-ink/50 mt-1 max-w-[10rem] mx-auto text-[11px]">
          Looks like you haven't added any drinks yet. Let's fix that.
        </p>
        <Link to="/shop">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1 mt-3.5 px-3.5 py-[0.4375rem] rounded-lg bg-primary-500 text-white font-semibold text-[11px] shadow-lift"
          >
            Shop Now <ArrowRight size={9} />
          </motion.span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4 sm:py-5">
      <h1 className="text-base sm:text-lg font-bold text-ink mb-0.5">Your Cart</h1>
      <p className="text-ink/50 text-[11px] mb-3.5">
        {items.length} {items.length === 1 ? "item" : "items"} in your cart
      </p>

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Items */}
        <div className="space-y-1.5">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -15, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-1.5 bg-white rounded-xl2 shadow-softer p-1.75 sm:p-2"
              >
                <div className="flex items-center gap-2">
                  <Link
                    to={`/product/${item.id}`}
                    className={`shrink-0 grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br ${item.color}`}
                  >
                    <BottleSilhouette className="w-4" />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-[11px] font-semibold text-ink hover:text-primary-700 transition-colors truncate">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-[10px] text-ink/45 mt-[0.0625rem]">{item.size}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    className="text-ink/30 hover:text-red-500 transition-colors shrink-0"
                  >
                    <Trash2 size={9} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-ink">
                    ₹{item.price}
                    <span className="text-[10px] text-ink/40 font-normal"> / unit</span>
                  </p>

                  <div className="flex items-center bg-primary-50 rounded-lg px-0.5 py-0.5 shrink-0">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="grid place-items-center w-3.5 h-3.5 rounded-lg bg-white text-primary-700 shadow-softer"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={7} />
                    </button>
                    <span className="w-3.5 text-center text-[11px] font-semibold text-ink">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="grid place-items-center w-3.5 h-3.5 rounded-lg bg-white text-primary-700 shadow-softer"
                      aria-label="Increase quantity"
                    >
                      <Plus size={7} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order summary */}
        <div className="h-fit space-y-2">
          {/* Coupon */}
          <div className="bg-white rounded-xl2 shadow-softer p-2 sm:p-2.5">
            <h3 className="text-[11px] font-bold text-ink mb-1.5 flex items-center gap-[0.1875rem]">
              <Tag size={8} className="text-primary-600" /> Coupon Code
            </h3>

            {appliedCoupon ? (
              <div className="flex items-center justify-between bg-primary-50 rounded-lg px-[0.4375rem] py-[0.3125rem]">
                <span className="flex items-center gap-[0.1875rem] text-[11px] font-semibold text-primary-700">
                  <CheckCircle2 size={8} /> {appliedCoupon} applied
                </span>
                <button
                  onClick={removeCoupon}
                  className="text-ink/40 hover:text-red-500"
                  aria-label="Remove coupon"
                >
                  <XCircle size={9} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-1">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Try FRESH10"
                  className="flex-1 px-[0.4375rem] py-[0.3125rem] rounded-lg bg-primary-50/60 border border-primary-100 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary-500/15"
                />
                <button
                  type="submit"
                  className="px-2 py-[0.3125rem] rounded-lg bg-ink text-white text-[11px] font-semibold shrink-0"
                >
                  Apply
                </button>
              </form>
            )}
            {couponError && (
              <p className="text-[10px] text-red-500 mt-1">{couponError}</p>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl2 shadow-softer p-2 sm:p-2.5">
            <h3 className="text-[11px] font-bold text-ink mb-2">Order Summary</h3>
            <div className="space-y-[0.3125rem] text-[11px]">
              <div className="flex justify-between text-ink/60">
                <span>Subtotal</span>
                <span className="text-ink font-medium">₹{subtotal}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-primary-600">
                  <span>Coupon discount</span>
                  <span className="font-medium">−₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between text-ink/60">
                <span>Tax (5%)</span>
                <span className="text-ink font-medium">₹{tax}</span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Delivery</span>
                <span className={`font-medium ${delivery === 0 ? "text-primary-600" : "text-ink"}`}>
                  {delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>
              {delivery > 0 && (
                <p className="text-[9px] text-ink/40">
                  Add ₹{FREE_DELIVERY_THRESHOLD - subtotal} more for free delivery
                </p>
              )}
            </div>

            <div className="border-t border-primary-100 mt-2 pt-2 flex justify-between items-center">
              <span className="font-bold text-[11px] text-ink">Grand Total</span>
              <span className="text-sm font-bold text-ink">₹{total}</span>
            </div>

            <Link to="/checkout">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-2.5 flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg py-[0.4375rem] text-[11px] shadow-lift transition-colors"
              >
                Proceed to Checkout <ArrowRight size={9} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}