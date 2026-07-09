// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Search, Heart, ShoppingCart, Droplet, User } from "lucide-react";
// import { useApp } from "../context/AppContext";

// export default function Navbar() {
//   const { cartCount, wishlistCount } = useApp();
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-primary-100/60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-3 py-3 md:py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 shrink-0 group">
//             <motion.span
//               whileHover={{ rotate: -8, scale: 1.06 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="grid place-items-center w-10 h-10 rounded-xl2 bg-gradient-to-br from-primary-500 to-primary-700 shadow-lift text-white"
//             >
//               <Droplet size={20} fill="white" strokeWidth={0} />
//             </motion.span>
//             <span className="text-xl md:text-2xl font-bold tracking-tight text-ink">
//               Quench<span className="text-primary-600">ly</span>
//             </span>
//           </Link>

//           {/* Search - center, large */}
//           <form
//             onSubmit={handleSearch}
//             className="hidden md:flex flex-1 max-w-xl mx-4"
//           >
//             <div className="relative w-full">
//               <Search
//                 size={19}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
//               />
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search for juices, energy drinks, coffee..."
//                 className="w-full pl-11 pr-4 py-3 rounded-xl3 bg-white border border-primary-100 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all placeholder:text-ink/35 text-sm"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-xl2 bg-primary-500 text-white hover:bg-primary-600 transition-colors"
//                 aria-label="Search"
//               >
//                 <Search size={16} />
//               </button>
//             </div>
//           </form>

//           {/* Right actions */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0">
//             <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
//               <Link
//                 to="/login"
//                 className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl2 text-ink/80 hover:text-primary-700 hover:bg-primary-50 transition-colors"
//               >
//                 <User size={17} />
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-2.5 rounded-xl2 bg-primary-500 text-white hover:bg-primary-600 shadow-lift transition-colors"
//               >
//                 Sign up
//               </Link>
//             </div>

//             <Link
//               to="/profile"
//               className="lg:hidden grid place-items-center w-10 h-10 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
//               aria-label="Account"
//             >
//               <User size={20} />
//             </Link>

//             <Link
//               to="/profile?tab=wishlist"
//               className="relative grid place-items-center w-10 h-10 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
//               aria-label="Wishlist"
//             >
//               <Heart size={20} />
//               {wishlistCount > 0 && (
//                 <motion.span
//                   key={wishlistCount}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-secondary-500 text-white text-[10px] font-bold"
//                 >
//                   {wishlistCount}
//                 </motion.span>
//               )}
//             </Link>

//             <Link
//               to="/cart"
//               className="relative grid place-items-center w-10 h-10 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} />
//               {cartCount > 0 && (
//                 <motion.span
//                   key={cartCount}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-primary-600 text-white text-[10px] font-bold"
//                 >
//                   {cartCount}
//                 </motion.span>
//               )}
//             </Link>
//           </div>
//         </div>

//         {/* Mobile search */}
//         <form onSubmit={handleSearch} className="md:hidden pb-3">
//           <div className="relative">
//             <Search
//               size={18}
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40"
//             />
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search drinks..."
//               className="w-full pl-10 pr-4 py-2.5 rounded-xl3 bg-white border border-primary-100 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15 text-sm"
//             />
//           </div>
//         </form>
//       </div>
//     </header>
//   );
// }









import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingCart, Droplet, User } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { cartCount, wishlistCount } = useApp();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-primary-100/60">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 py-2 md:py-2.5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 shrink-0 group">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="grid place-items-center w-7 h-7 rounded-xl2 bg-gradient-to-br from-primary-500 to-primary-700 shadow-lift text-white"
            >
              <Droplet size={14} fill="white" strokeWidth={0} />
            </motion.span>
            <span className="text-base md:text-lg font-bold tracking-tight text-ink">
              Quench<span className="text-primary-600">ly</span>
            </span>
          </Link>

          {/* Search - center, large */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-3"
          >
            <div className="relative w-full">
              <Search
                size={13}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for juices, energy drinks, coffee..."
                className="w-full pl-8 pr-3 py-2 rounded-xl3 bg-white border border-primary-100 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all placeholder:text-ink/35 text-xs"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 grid place-items-center w-6 h-6 rounded-xl2 bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                aria-label="Search"
              >
                <Search size={11} />
              </button>
            </div>
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden lg:flex items-center gap-0.5 text-xs font-medium">
              <Link
                to="/login"
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl2 text-ink/80 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <User size={12} />
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1.5 rounded-xl2 bg-primary-500 text-white hover:bg-primary-600 shadow-lift transition-colors"
              >
                Sign up
              </Link>
            </div>

            <Link
              to="/profile"
              className="lg:hidden grid place-items-center w-7 h-7 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              aria-label="Account"
            >
              <User size={14} />
            </Link>

            <Link
              to="/profile?tab=wishlist"
              className="relative grid place-items-center w-7 h-7 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={14} />
              {wishlistCount > 0 && (
                <motion.span
                  key={wishlistCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[13px] h-[13px] px-0.5 rounded-full bg-secondary-500 text-white text-[8px] font-bold"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative grid place-items-center w-7 h-7 rounded-xl2 text-ink/70 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart size={14} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[13px] h-[13px] px-0.5 rounded-full bg-primary-600 text-white text-[8px] font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden pb-2">
          <div className="relative">
            <Search
              size={12}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search drinks..."
              className="w-full pl-7 pr-3 py-1.5 rounded-xl3 bg-white border border-primary-100 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15 text-xs"
            />
          </div>
        </form>
      </div>
    </header>
  );
}