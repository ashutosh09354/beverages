// import { useState } from "react";
// import { Link, useSearchParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   User,
//   MapPin,
//   Package,
//   Heart,
//   LogOut,
//   Plus,
//   Trash2,
//   Pencil,
//   Home,
//   Briefcase,
//   ChevronRight,
//   HeartOff,
// } from "lucide-react";
// import { products } from "../data/products";
// import { useApp } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";

// const tabs = [
//   { id: "account", label: "Account", icon: User },
//   { id: "addresses", label: "Addresses", icon: MapPin },
//   { id: "orders", label: "Orders", icon: Package },
//   { id: "wishlist", label: "Wishlist", icon: Heart },
// ];

// const initialAddresses = [
//   {
//     id: 1,
//     label: "Home",
//     icon: Home,
//     text: "House 24, Sector 45, Gurugram, Haryana 122003",
//     isDefault: true,
//   },
//   {
//     id: 2,
//     label: "Work",
//     icon: Briefcase,
//     text: "Tower B, Cyber Hub, DLF Phase 2, Gurugram, Haryana 122002",
//     isDefault: false,
//   },
// ];

// export default function Profile() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const activeTab = searchParams.get("tab") || "account";
//   const navigate = useNavigate();
//   const { wishlist } = useApp();

//   const setTab = (id) => setSearchParams({ tab: id });

//   const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//       <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-7">My Account</h1>

//       <div className="grid lg:grid-cols-[240px_1fr] gap-8">
//         {/* Sidebar nav */}
//         <aside className="lg:sticky lg:top-[140px] h-fit">
//           <div className="bg-white rounded-xl4 shadow-softer p-3">
//             <div className="flex items-center gap-3 p-3 mb-1">
//               <span className="grid place-items-center w-11 h-11 rounded-full bg-primary-100 text-primary-700 font-bold">
//                 A
//               </span>
//               <div className="min-w-0">
//                 <p className="text-sm font-semibold text-ink truncate">Aarav Mehta</p>
//                 <p className="text-xs text-ink/45 truncate">aarav@example.com</p>
//               </div>
//             </div>

//             <nav className="space-y-1">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 const isActive = activeTab === tab.id;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setTab(tab.id)}
//                     className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl2 text-sm font-medium transition-colors ${
//                       isActive
//                         ? "bg-primary-500 text-white"
//                         : "text-ink/70 hover:bg-primary-50"
//                     }`}
//                   >
//                     <span className="flex items-center gap-2.5">
//                       <Icon size={16} /> {tab.label}
//                       {tab.id === "wishlist" && wishlistProducts.length > 0 && (
//                         <span
//                           className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
//                             isActive ? "bg-white/25" : "bg-primary-100 text-primary-700"
//                           }`}
//                         >
//                           {wishlistProducts.length}
//                         </span>
//                       )}
//                     </span>
//                     {isActive && <ChevronRight size={14} />}
//                   </button>
//                 );
//               })}
//             </nav>

//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center gap-2.5 px-3 py-2.5 mt-2 rounded-xl2 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
//             >
//               <LogOut size={16} /> Logout
//             </button>
//           </div>
//         </aside>

//         {/* Content */}
//         <div>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25 }}
//             >
//               {activeTab === "account" && <AccountTab />}
//               {activeTab === "addresses" && <AddressesTab />}
//               {activeTab === "orders" && <OrdersTab />}
//               {activeTab === "wishlist" && (
//                 <WishlistTab products={wishlistProducts} />
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AccountTab() {
//   const [form, setForm] = useState({
//     name: "Aarav Mehta",
//     email: "aarav@example.com",
//     phone: "+91 98765 43210",
//   });
//   const [saved, setSaved] = useState(false);

//   const handleSave = (e) => {
//     e.preventDefault();
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2500);
//   };

//   return (
//     <div className="bg-white rounded-xl4 shadow-softer p-5 sm:p-7">
//       <h2 className="text-lg font-bold text-ink mb-5">Account Information</h2>
//       <form onSubmit={handleSave} className="grid sm:grid-cols-2 gap-4">
//         <label className="block">
//           <span className="text-xs font-medium text-ink/50 mb-1.5 block">
//             Full Name
//           </span>
//           <input
//             value={form.name}
//             onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
//             className="w-full px-3.5 py-2.5 rounded-xl2 bg-primary-50/50 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15"
//           />
//         </label>
//         <label className="block">
//           <span className="text-xs font-medium text-ink/50 mb-1.5 block">
//             Email
//           </span>
//           <input
//             value={form.email}
//             onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
//             className="w-full px-3.5 py-2.5 rounded-xl2 bg-primary-50/50 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15"
//           />
//         </label>
//         <label className="block sm:col-span-2">
//           <span className="text-xs font-medium text-ink/50 mb-1.5 block">
//             Phone
//           </span>
//           <input
//             value={form.phone}
//             onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
//             className="w-full px-3.5 py-2.5 rounded-xl2 bg-primary-50/50 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15"
//           />
//         </label>

//         <div className="sm:col-span-2 flex items-center gap-3 mt-2">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="px-6 py-2.5 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold shadow-softer transition-colors"
//           >
//             Save Changes
//           </motion.button>
//           {saved && (
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-sm text-primary-600 font-medium"
//             >
//               Saved!
//             </motion.span>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// function AddressesTab() {
//   const [addresses, setAddresses] = useState(initialAddresses);

//   const removeAddress = (id) =>
//     setAddresses((prev) => prev.filter((a) => a.id !== id));

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-bold text-ink">Saved Addresses</h2>
//         <button className="flex items-center gap-1.5 text-sm font-semibold text-primary-700 bg-primary-50 px-3.5 py-2 rounded-xl2 hover:bg-primary-100 transition-colors">
//           <Plus size={15} /> Add New
//         </button>
//       </div>

//       <AnimatePresence>
//         {addresses.map((addr) => {
//           const Icon = addr.icon;
//           return (
//             <motion.div
//               key={addr.id}
//               layout
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="bg-white rounded-xl4 shadow-softer p-4 sm:p-5 flex items-start gap-4"
//             >
//               <span className="grid place-items-center w-10 h-10 rounded-xl2 bg-primary-50 text-primary-600 shrink-0">
//                 <Icon size={18} />
//               </span>
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2">
//                   <h3 className="text-sm font-semibold text-ink">{addr.label}</h3>
//                   {addr.isDefault && (
//                     <span className="text-[10px] font-bold text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full">
//                       DEFAULT
//                     </span>
//                   )}
//                 </div>
//                 <p className="text-sm text-ink/55 mt-1">{addr.text}</p>
//               </div>
//               <div className="flex items-center gap-1.5 shrink-0">
//                 <button
//                   className="grid place-items-center w-8 h-8 rounded-xl2 text-ink/40 hover:bg-primary-50 hover:text-primary-700 transition-colors"
//                   aria-label="Edit address"
//                 >
//                   <Pencil size={14} />
//                 </button>
//                 <button
//                   onClick={() => removeAddress(addr.id)}
//                   className="grid place-items-center w-8 h-8 rounded-xl2 text-ink/40 hover:bg-red-50 hover:text-red-500 transition-colors"
//                   aria-label="Delete address"
//                 >
//                   <Trash2 size={14} />
//                 </button>
//               </div>
//             </motion.div>
//           );
//         })}
//       </AnimatePresence>

//       {addresses.length === 0 && (
//         <div className="bg-white rounded-xl4 shadow-softer p-10 text-center text-ink/50 text-sm">
//           No saved addresses yet.
//         </div>
//       )}
//     </div>
//   );
// }

// function OrdersTab() {
//   return (
//     <div className="bg-white rounded-xl4 shadow-softer p-8 sm:p-10 text-center">
//       <Package size={32} className="text-primary-400 mx-auto mb-4" />
//       <h2 className="text-lg font-bold text-ink">View your orders</h2>
//       <p className="text-ink/50 text-sm mt-1.5 max-w-sm mx-auto">
//         Track current deliveries and browse your past orders in one place.
//       </p>
//       <Link
//         to="/orders"
//         className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold shadow-softer transition-colors"
//       >
//         Go to Orders <ChevronRight size={15} />
//       </Link>
//     </div>
//   );
// }

// function WishlistTab({ products: wishlistProducts }) {
//   if (wishlistProducts.length === 0) {
//     return (
//       <div className="bg-white rounded-xl4 shadow-softer p-10 text-center">
//         <HeartOff size={32} className="text-ink/20 mx-auto mb-4" />
//         <h2 className="text-lg font-bold text-ink">Your wishlist is empty</h2>
//         <p className="text-ink/50 text-sm mt-1.5">
//           Tap the heart icon on any drink to save it here.
//         </p>
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold shadow-softer transition-colors"
//         >
//           Browse Drinks <ChevronRight size={15} />
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-lg font-bold text-ink mb-4">
//         Wishlist ({wishlistProducts.length})
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
//         {wishlistProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MapPin,
  Package,
  Heart,
  LogOut,
  Plus,
  Trash2,
  Pencil,
  Home,
  Briefcase,
  ChevronRight,
  HeartOff,
} from "lucide-react";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const tabs = [
  { id: "account", label: "Account", icon: User },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
];

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    icon: Home,
    text: "House 24, Sector 45, Gurugram, Haryana 122003",
    isDefault: true,
  },
  {
    id: 2,
    label: "Work",
    icon: Briefcase,
    text: "Tower B, Cyber Hub, DLF Phase 2, Gurugram, Haryana 122002",
    isDefault: false,
  },
];

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "account";
  const navigate = useNavigate();
  const { wishlist } = useApp();

  const setTab = (id) => setSearchParams({ tab: id });

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-5 lg:px-6 py-6 sm:py-7">
      <h1 className="text-xl sm:text-2xl font-bold text-ink mb-5">My Account</h1>

      <div className="grid lg:grid-cols-[190px_1fr] gap-6">
        {/* Sidebar nav */}
        <aside className="lg:sticky lg:top-[110px] h-fit">
          <div className="bg-white rounded-xl4 shadow-softer p-2.5">
            <div className="flex items-center gap-2.5 p-2.5 mb-1">
              <span className="grid place-items-center w-20 h-8 rounded-full bg-primary-100 text-primary-700 font-bold text-sm">
                A
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-ink truncate">Aarav Mehta</p>
                <p className="text-[11px] text-ink/45 truncate">aarav@example.com</p>
              </div>
            </div>

            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setTab(tab.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "text-ink/70 hover:bg-primary-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={12} /> {tab.label}
                      {tab.id === "wishlist" && wishlistProducts.length > 0 && (
                        <span
                          className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                            isActive ? "bg-white/25" : "bg-primary-100 text-primary-700"
                          }`}
                        >
                          {wishlistProducts.length}
                        </span>
                      )}
                    </span>
                    {isActive && <ChevronRight size={11} />}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-2.5 py-2 mt-2 rounded-xl2 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut size={12} /> Logout
            </button>
          </div>
        </aside>

        {/* Content */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "account" && <AccountTab />}
              {activeTab === "addresses" && <AddressesTab />}
              {activeTab === "orders" && <OrdersTab />}
              {activeTab === "wishlist" && (
                <WishlistTab products={wishlistProducts} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function AccountTab() {
  const [form, setForm] = useState({
    name: "Aarav Mehta",
    email: "aarav@example.com",
    phone: "+91 98765 43210",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-white rounded-xl4 shadow-softer p-4 sm:p-5">
      <h2 className="text-base font-bold text-ink mb-4">Account Information</h2>
      <form onSubmit={handleSave} className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-[11px] font-medium text-ink/50 mb-1 block">
            Full Name
          </span>
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full px-3 py-2 rounded-xl2 bg-primary-50/50 border border-primary-100 text-xs focus:outline-none focus:ring-4 focus:ring-primary-500/15"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-medium text-ink/50 mb-1 block">
            Email
          </span>
          <input
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full px-3 py-2 rounded-xl2 bg-primary-50/50 border border-primary-100 text-xs focus:outline-none focus:ring-4 focus:ring-primary-500/15"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] font-medium text-ink/50 mb-1 block">
            Phone
          </span>
          <input
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full px-3 py-2 rounded-xl2 bg-primary-50/50 border border-primary-100 text-xs focus:outline-none focus:ring-4 focus:ring-primary-500/15"
          />
        </label>

        <div className="sm:col-span-2 flex items-center gap-2.5 mt-1.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="px-4 py-2 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold shadow-softer transition-colors"
          >
            Save Changes
          </motion.button>
          {saved && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-primary-600 font-medium"
            >
              Saved!
            </motion.span>
          )}
        </div>
      </form>
    </div>
  );
}

function AddressesTab() {
  const [addresses, setAddresses] = useState(initialAddresses);

  const removeAddress = (id) =>
    setAddresses((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-ink">Saved Addresses</h2>
        <button className="flex items-center gap-1 text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-xl2 hover:bg-primary-100 transition-colors">
          <Plus size={12} /> Add New
        </button>
      </div>

      <AnimatePresence>
        {addresses.map((addr) => {
          const Icon = addr.icon;
          return (
            <motion.div
              key={addr.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl4 shadow-softer p-3 sm:p-4 flex items-start gap-3"
            >
              <span className="grid place-items-center w-8 h-8 rounded-xl2 bg-primary-50 text-primary-600 shrink-0">
                <Icon size={14} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-semibold text-ink">{addr.label}</h3>
                  {addr.isDefault && (
                    <span className="text-[8px] font-bold text-primary-700 bg-primary-100 px-1.5 py-0.5 rounded-full">
                      DEFAULT
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink/55 mt-0.5">{addr.text}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  className="grid place-items-center w-6 h-6 rounded-xl2 text-ink/40 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  aria-label="Edit address"
                >
                  <Pencil size={11} />
                </button>
                <button
                  onClick={() => removeAddress(addr.id)}
                  className="grid place-items-center w-6 h-6 rounded-xl2 text-ink/40 hover:bg-red-50 hover:text-red-500 transition-colors"
                  aria-label="Delete address"
                >
                  <Trash2 size={11} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {addresses.length === 0 && (
        <div className="bg-white rounded-xl4 shadow-softer p-7 text-center text-ink/50 text-xs">
          No saved addresses yet.
        </div>
      )}
    </div>
  );
}

function OrdersTab() {
  return (
    <div className="bg-white rounded-xl4 shadow-softer p-6 sm:p-7 text-center">
      <Package size={24} className="text-primary-400 mx-auto mb-3" />
      <h2 className="text-base font-bold text-ink">View your orders</h2>
      <p className="text-ink/50 text-xs mt-1 max-w-sm mx-auto">
        Track current deliveries and browse your past orders in one place.
      </p>
      <Link
        to="/orders"
        className="inline-flex items-center gap-1 mt-4 px-4 py-2 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold shadow-softer transition-colors"
      >
        Go to Orders <ChevronRight size={11} />
      </Link>
    </div>
  );
}

function WishlistTab({ products: wishlistProducts }) {
  if (wishlistProducts.length === 0) {
    return (
      <div className="bg-white rounded-xl4 shadow-softer p-7 text-center">
        <HeartOff size={24} className="text-ink/20 mx-auto mb-3" />
        <h2 className="text-base font-bold text-ink">Your wishlist is empty</h2>
        <p className="text-ink/50 text-xs mt-1">
          Tap the heart icon on any drink to save it here.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 mt-4 px-4 py-2 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold shadow-softer transition-colors"
        >
          Browse Drinks <ChevronRight size={11} />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-base font-bold text-ink mb-3">
        Wishlist ({wishlistProducts.length})
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {wishlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}