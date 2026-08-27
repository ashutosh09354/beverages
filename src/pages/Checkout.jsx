// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   MapPin,
//   User,
//   Clock,
//   Wallet,
//   CreditCard,
//   Landmark,
//   Banknote,
//   CheckCircle2,
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react";
// import { products } from "../data/products";
// import { useApp } from "../context/AppContext";

// const deliverySlots = [
//   { id: "express", label: "Express", time: "Within 30 mins" },
//   { id: "today-evening", label: "Today Evening", time: "5 PM – 8 PM" },
//   { id: "tomorrow-morning", label: "Tomorrow Morning", time: "9 AM – 12 PM" },
//   { id: "tomorrow-evening", label: "Tomorrow Evening", time: "5 PM – 8 PM" },
// ];

// const paymentMethods = [
//   { id: "upi", label: "UPI", icon: Wallet, description: "Pay via any UPI app" },
//   { id: "card", label: "Card", icon: CreditCard, description: "Credit or Debit card" },
//   { id: "netbanking", label: "Net Banking", icon: Landmark, description: "All major banks" },
//   { id: "cod", label: "Cash on Delivery", icon: Banknote, description: "Pay when it arrives" },
// ];

// const TAX_RATE = 0.05;
// const DELIVERY_FEE = 40;
// const FREE_DELIVERY_THRESHOLD = 499;

// export default function Checkout() {
//   const { cart, setCart } = useApp();

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });
//   const [slot, setSlot] = useState("express");
//   const [payment, setPayment] = useState("upi");
//   const [placing, setPlacing] = useState(false);
//   const [placed, setPlaced] = useState(false);
//   const [orderId] = useState(
//     () => `QN${Math.floor(100000 + Math.random() * 900000)}`
//   );

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
//   const tax = Math.round(subtotal * TAX_RATE);
//   const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
//   const total = subtotal + tax + delivery;

//   const updateField = (key) => (e) =>
//     setForm((f) => ({ ...f, [key]: e.target.value }));

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     if (items.length === 0) return;
//     setPlacing(true);
//     setTimeout(() => {
//       setPlacing(false);
//       setPlaced(true);
//       setCart([]);
//     }, 900);
//   };

//   if (placed) {
//     return (
//       <div className="max-w-lg mx-auto px-4 py-20 sm:py-28 text-center">
//         <motion.div
//           initial={{ scale: 0.6, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type: "spring", stiffness: 200, damping: 14 }}
//           className="inline-grid place-items-center w-20 h-20 rounded-full bg-primary-50 text-primary-600 mb-6"
//         >
//           <CheckCircle2 size={38} />
//         </motion.div>
//         <h1 className="text-2xl font-bold text-ink">Order placed!</h1>
//         <p className="text-ink/50 mt-2">
//           Order <span className="font-semibold text-ink">#{orderId}</span> is
//           on its way. You'll receive updates via SMS and email.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
//           <Link
//             to="/orders"
//             className="px-6 py-3 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift"
//           >
//             Track Order
//           </Link>
//           <Link
//             to="/shop"
//             className="px-6 py-3 rounded-xl3 bg-white border border-primary-100 text-ink font-semibold shadow-softer"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (items.length === 0) {
//     return (
//       <div className="max-w-lg mx-auto px-4 py-24 text-center">
//         <h1 className="text-2xl font-bold text-ink">Your cart is empty</h1>
//         <p className="text-ink/50 mt-2">Add some drinks before checking out.</p>
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-1.5 mt-6 text-primary-700 font-semibold"
//         >
//           <ArrowLeft size={16} /> Back to Shop
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//       <Link
//         to="/cart"
//         className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-primary-700 transition-colors mb-6"
//       >
//         <ArrowLeft size={16} /> Back to Cart
//       </Link>

//       <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-7">Checkout</h1>

//       <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-[1fr_360px] gap-8">
//         <div className="space-y-5">
//           {/* Contact Details */}
//           <section className="bg-white rounded-xl4 shadow-softer p-5 sm:p-6">
//             <h2 className="flex items-center gap-2 text-sm font-bold text-ink mb-4">
//               <User size={16} className="text-primary-600" /> Contact Details
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-3.5">
//               <Field
//                 label="Full Name"
//                 value={form.fullName}
//                 onChange={updateField("fullName")}
//                 placeholder="Aarav Mehta"
//                 required
//               />
//               <Field
//                 label="Phone Number"
//                 value={form.phone}
//                 onChange={updateField("phone")}
//                 placeholder="+91 98765 43210"
//                 type="tel"
//                 required
//               />
//               <Field
//                 label="Email"
//                 value={form.email}
//                 onChange={updateField("email")}
//                 placeholder="you@example.com"
//                 type="email"
//                 required
//                 className="sm:col-span-2"
//               />
//             </div>
//           </section>

//           {/* Shipping Address */}
//           <section className="bg-white rounded-xl4 shadow-softer p-5 sm:p-6">
//             <h2 className="flex items-center gap-2 text-sm font-bold text-ink mb-4">
//               <MapPin size={16} className="text-primary-600" /> Shipping Address
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-3.5">
//               <Field
//                 label="Address"
//                 value={form.address}
//                 onChange={updateField("address")}
//                 placeholder="House no., street, area"
//                 required
//                 className="sm:col-span-2"
//               />
//               <Field
//                 label="City"
//                 value={form.city}
//                 onChange={updateField("city")}
//                 placeholder="Gurugram"
//                 required
//               />
//               <Field
//                 label="Pincode"
//                 value={form.pincode}
//                 onChange={updateField("pincode")}
//                 placeholder="122001"
//                 required
//               />
//             </div>
//           </section>

//           {/* Delivery Slot */}
//           <section className="bg-white rounded-xl4 shadow-softer p-5 sm:p-6">
//             <h2 className="flex items-center gap-2 text-sm font-bold text-ink mb-4">
//               <Clock size={16} className="text-primary-600" /> Delivery Slot
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-3">
//               {deliverySlots.map((s) => (
//                 <button
//                   type="button"
//                   key={s.id}
//                   onClick={() => setSlot(s.id)}
//                   className={`text-left px-4 py-3 rounded-xl2 border-2 transition-colors ${
//                     slot === s.id
//                       ? "border-primary-500 bg-primary-50"
//                       : "border-primary-100 hover:border-primary-200"
//                   }`}
//                 >
//                   <p className="text-sm font-semibold text-ink">{s.label}</p>
//                   <p className="text-xs text-ink/45 mt-0.5">{s.time}</p>
//                 </button>
//               ))}
//             </div>
//           </section>

//           {/* Payment Method */}
//           <section className="bg-white rounded-xl4 shadow-softer p-5 sm:p-6">
//             <h2 className="flex items-center gap-2 text-sm font-bold text-ink mb-4">
//               <Wallet size={16} className="text-primary-600" /> Payment Method
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-3">
//               {paymentMethods.map((m) => {
//                 const Icon = m.icon;
//                 const isActive = payment === m.id;
//                 return (
//                   <button
//                     type="button"
//                     key={m.id}
//                     onClick={() => setPayment(m.id)}
//                     className={`flex items-center gap-3 text-left px-4 py-3.5 rounded-xl2 border-2 transition-colors ${
//                       isActive
//                         ? "border-primary-500 bg-primary-50"
//                         : "border-primary-100 hover:border-primary-200"
//                     }`}
//                   >
//                     <span
//                       className={`grid place-items-center w-9 h-9 rounded-xl2 shrink-0 ${
//                         isActive ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-600"
//                       }`}
//                     >
//                       <Icon size={16} />
//                     </span>
//                     <div>
//                       <p className="text-sm font-semibold text-ink">{m.label}</p>
//                       <p className="text-xs text-ink/45">{m.description}</p>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </section>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:sticky lg:top-[140px] h-fit">
//           <div className="bg-white rounded-xl4 shadow-softer p-5 sm:p-6">
//             <h3 className="text-sm font-bold text-ink mb-4">Order Summary</h3>

//             <div className="space-y-3 max-h-56 overflow-y-auto thin-scrollbar pr-1 mb-4">
//               {items.map((item) => (
//                 <div key={item.id} className="flex items-center justify-between text-sm">
//                   <span className="text-ink/70 truncate pr-2">
//                     {item.name} <span className="text-ink/40">× {item.qty}</span>
//                   </span>
//                   <span className="font-medium text-ink shrink-0">
//                     ₹{item.price * item.qty}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-primary-100 pt-4 space-y-2.5 text-sm">
//               <div className="flex justify-between text-ink/60">
//                 <span>Subtotal</span>
//                 <span className="text-ink font-medium">₹{subtotal}</span>
//               </div>
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
//             </div>

//             <div className="border-t border-primary-100 mt-4 pt-4 flex justify-between items-center">
//               <span className="font-bold text-ink">Grand Total</span>
//               <span className="text-xl font-bold text-ink">₹{total}</span>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               disabled={placing}
//               className="w-full mt-5 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors"
//             >
//               {placing ? "Placing Order..." : "Place Order"}
//               {!placing && <ArrowRight size={16} />}
//             </motion.button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// function Field({ label, className = "", ...props }) {
//   return (
//     <label className={`block ${className}`}>
//       <span className="text-xs font-medium text-ink/50 mb-1.5 block">{label}</span>
//       <input
//         {...props}
//         className="w-full px-3.5 py-2.5 rounded-xl2 bg-primary-50/50 border border-primary-100 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
//       />
//     </label>
//   );
// }















import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Clock,
  Wallet,
  CreditCard,
  Landmark,
  Banknote,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";

const deliverySlots = [
  { id: "express", label: "Express", time: "Within 30 mins" },
  { id: "today-evening", label: "Today Evening", time: "5 PM – 8 PM" },
  { id: "tomorrow-morning", label: "Tomorrow Morning", time: "9 AM – 12 PM" },
  { id: "tomorrow-evening", label: "Tomorrow Evening", time: "5 PM – 8 PM" },
];

const paymentMethods = [
  { id: "upi", label: "UPI", icon: Wallet, description: "Pay via any UPI app" },
  { id: "card", label: "Card", icon: CreditCard, description: "Credit or Debit card" },
  { id: "netbanking", label: "Net Banking", icon: Landmark, description: "All major banks" },
  { id: "cod", label: "Cash on Delivery", icon: Banknote, description: "Pay when it arrives" },
];

const TAX_RATE = 0.05;
const DELIVERY_FEE = 40;
const FREE_DELIVERY_THRESHOLD = 499;

export default function Checkout() {
  const { cart, setCart } = useApp();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [slot, setSlot] = useState("express");
  const [payment, setPayment] = useState("upi");
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [orderId] = useState(
    () => `QN${Math.floor(100000 + Math.random() * 900000)}`
  );

  const items = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((p) => p.id === item.id);
          return product ? { ...product, ...item, qty: item.qty } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
  const total = subtotal + tax + delivery;

  const updateField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setPlacing(true);
    setTimeout(() => {
      setPlacing(false);
      setPlaced(true);
      setCart([]);
    }, 900);
  };

  if (placed) {
    return (
      <div className="max-w-sm mx-auto px-3 py-14 sm:py-20 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="inline-grid place-items-center w-14 h-14 rounded-full bg-primary-50 text-primary-600 mb-4"
        >
          <CheckCircle2 size={25} />
        </motion.div>
        <h1 className="text-base font-bold text-ink">Order placed!</h1>
        <p className="text-ink/50 mt-1.5 text-[11px]">
          Order <span className="font-semibold text-ink">#{orderId}</span> is
          on its way. You'll receive updates via SMS and email.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-5">
          <Link
            to="/orders"
            className="px-4 py-2 rounded-xl2 bg-primary-500 text-white font-semibold text-[11px] shadow-lift"
          >
            Track Order
          </Link>
          <Link
            to="/shop"
            className="px-4 py-2 rounded-xl2 bg-white border border-primary-100 text-ink font-semibold text-[11px] shadow-softer"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-sm mx-auto px-3 py-16 text-center">
        <h1 className="text-base font-bold text-ink">Your cart is empty</h1>
        <p className="text-ink/50 mt-1.5 text-[11px]">Add some drinks before checking out.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 mt-4 text-primary-700 font-semibold text-[11px]"
        >
          <ArrowLeft size={11} /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4 sm:py-5">
      <Link
        to="/cart"
        className="inline-flex items-center gap-1 text-[11px] font-medium text-ink/50 hover:text-primary-700 transition-colors mb-4"
      >
        <ArrowLeft size={11} /> Back to Cart
      </Link>

      <h1 className="text-base sm:text-lg font-bold text-ink mb-4">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-[1fr_240px] gap-4">
        <div className="space-y-3">
          {/* Contact Details */}
          <section className="bg-white rounded-xl2 shadow-softer p-3 sm:p-3.5">
            <h2 className="flex items-center gap-1.5 text-[11px] font-bold text-ink mb-2.5">
              <User size={11} className="text-primary-600" /> Contact Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <Field
                label="Full Name"
                value={form.fullName}
                onChange={updateField("fullName")}
                placeholder="Aarav Mehta"
                required
              />
              <Field
                label="Phone Number"
                value={form.phone}
                onChange={updateField("phone")}
                placeholder="+91 98765 43210"
                type="tel"
                required
              />
              <Field
                label="Email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="you@example.com"
                type="email"
                required
                className="sm:col-span-2"
              />
            </div>
          </section>

          {/* Shipping Address */}
          <section className="bg-white rounded-xl2 shadow-softer p-3 sm:p-3.5">
            <h2 className="flex items-center gap-1.5 text-[11px] font-bold text-ink mb-2.5">
              <MapPin size={11} className="text-primary-600" /> Shipping Address
            </h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <Field
                label="Address"
                value={form.address}
                onChange={updateField("address")}
                placeholder="House no., street, area"
                required
                className="sm:col-span-2"
              />
              <Field
                label="City"
                value={form.city}
                onChange={updateField("city")}
                placeholder="Gurugram"
                required
              />
              <Field
                label="Pincode"
                value={form.pincode}
                onChange={updateField("pincode")}
                placeholder="122001"
                required
              />
            </div>
          </section>

          {/* Delivery Slot */}
          <section className="bg-white rounded-xl2 shadow-softer p-3 sm:p-3.5">
            <h2 className="flex items-center gap-1.5 text-[11px] font-bold text-ink mb-2.5">
              <Clock size={11} className="text-primary-600" /> Delivery Slot
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {deliverySlots.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSlot(s.id)}
                  className={`text-left px-2.5 py-2 rounded-lg border-2 transition-colors ${
                    slot === s.id
                      ? "border-primary-500 bg-primary-50"
                      : "border-primary-100 hover:border-primary-200"
                  }`}
                >
                  <p className="text-[11px] font-semibold text-ink">{s.label}</p>
                  <p className="text-[10px] text-ink/45 mt-0.5">{s.time}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white rounded-xl2 shadow-softer p-3 sm:p-3.5">
            <h2 className="flex items-center gap-1.5 text-[11px] font-bold text-ink mb-2.5">
              <Wallet size={11} className="text-primary-600" /> Payment Method
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {paymentMethods.map((m) => {
                const Icon = m.icon;
                const isActive = payment === m.id;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPayment(m.id)}
                    className={`flex items-center gap-2 text-left px-2.5 py-2.25 rounded-lg border-2 transition-colors ${
                      isActive
                        ? "border-primary-500 bg-primary-50"
                        : "border-primary-100 hover:border-primary-200"
                    }`}
                  >
                    <span
                      className={`grid place-items-center w-6 h-6 rounded-lg shrink-0 ${
                        isActive ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-600"
                      }`}
                    >
                      <Icon size={11} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-ink">{m.label}</p>
                      <p className="text-[10px] text-ink/45">{m.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-[94px] h-fit">
          <div className="bg-white rounded-xl2 shadow-softer p-3 sm:p-3.5">
            <h3 className="text-[11px] font-bold text-ink mb-2.5">Order Summary</h3>

            <div className="space-y-2 max-h-36 overflow-y-auto thin-scrollbar pr-1 mb-2.5">
              {items.map((item) => (
                <div key={item.cartKey || item.id} className="flex items-center justify-between text-[11px]">
                  <span className="text-ink/70 truncate pr-2">
                    {item.name} <span className="text-ink/40">× {item.qty}</span>
                  </span>
                  <span className="font-medium text-ink shrink-0">
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-primary-100 pt-2.5 space-y-[0.4375rem] text-[11px]">
              <div className="flex justify-between text-ink/60">
                <span>Subtotal</span>
                <span className="text-ink font-medium">₹{subtotal}</span>
              </div>
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
            </div>

            <div className="border-t border-primary-100 mt-2.5 pt-2.5 flex justify-between items-center">
              <span className="font-bold text-[11px] text-ink">Grand Total</span>
              <span className="text-sm font-bold text-ink">₹{total}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={placing}
              className="w-full mt-3 flex items-center justify-center gap-1.5 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-lg py-2.25 text-[11px] shadow-lift transition-colors"
            >
              {placing ? "Placing Order..." : "Place Order"}
              {!placing && <ArrowRight size={11} />}
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] font-medium text-ink/50 mb-1 block">{label}</span>
      <input
        {...props}
        className="w-full px-2.5 py-1.75 rounded-lg bg-primary-50/50 border border-primary-100 text-[11px] text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
      />
    </label>
  );
}
