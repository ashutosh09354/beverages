// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { SlidersHorizontal, X, PackageSearch } from "lucide-react";
// import { products } from "../data/products";
// import { categories } from "../data/categories";
// import ProductCard from "../components/ProductCard";

// const sortOptions = [
//   { value: "popularity", label: "Popularity" },
//   { value: "price-asc", label: "Price: Low to High" },
//   { value: "price-desc", label: "Price: High to Low" },
//   { value: "rating", label: "Rating" },
// ];

// export default function Shop() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const activeCategory = searchParams.get("category") || "all";
//   const query = searchParams.get("q") || "";

//   const [sortBy, setSortBy] = useState("popularity");
//   const [filtersOpen, setFiltersOpen] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [activeCategory, query]);

//   const filtered = useMemo(() => {
//     let list = [...products];

//     if (activeCategory !== "all") {
//       list = list.filter((p) => p.category === activeCategory);
//     }

//     if (query.trim()) {
//       const q = query.trim().toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name.toLowerCase().includes(q) ||
//           p.category.toLowerCase().includes(q)
//       );
//     }

//     switch (sortBy) {
//       case "price-asc":
//         list.sort((a, b) => a.price - b.price);
//         break;
//       case "price-desc":
//         list.sort((a, b) => b.price - a.price);
//         break;
//       case "rating":
//         list.sort((a, b) => b.rating - a.rating);
//         break;
//       default:
//         list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
//     }

//     return list;
//   }, [activeCategory, query, sortBy]);

//   const setCategory = (id) => {
//     const next = new URLSearchParams(searchParams);
//     if (id === "all") next.delete("category");
//     else next.set("category", id);
//     setSearchParams(next);
//   };

//   const clearSearch = () => {
//     const next = new URLSearchParams(searchParams);
//     next.delete("q");
//     setSearchParams(next);
//   };

//   const activeCategoryName =
//     categories.find((c) => c.id === activeCategory)?.name || "All Drinks";

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-ink">
//             {query ? `Results for "${query}"` : activeCategoryName}
//           </h1>
//           <p className="text-ink/50 text-sm mt-1">
//             {filtered.length} {filtered.length === 1 ? "product" : "products"}{" "}
//             found
//           </p>
//         </div>

//         <div className="flex items-center gap-2.5">
//           {query && (
//             <button
//               onClick={clearSearch}
//               className="flex items-center gap-1 text-xs font-medium text-ink/50 hover:text-primary-700 bg-primary-50 px-3 py-2 rounded-xl2 transition-colors"
//             >
//               <X size={13} /> Clear search
//             </button>
//           )}

//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="text-sm font-medium text-ink bg-white border border-primary-100 rounded-xl2 px-3.5 py-2.5 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15"
//           >
//             {sortOptions.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 Sort: {opt.label}
//               </option>
//             ))}
//           </select>

//           <button
//             onClick={() => setFiltersOpen((v) => !v)}
//             className="lg:hidden flex items-center gap-1.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 px-4 py-2.5 rounded-xl2 transition-colors shrink-0"
//           >
//             <SlidersHorizontal size={15} /> Filters
//           </button>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-[220px_1fr] gap-8">
//         {/* Category filter sidebar */}
//         <aside className="hidden lg:block">
//           <CategoryFilterList
//             activeCategory={activeCategory}
//             setCategory={setCategory}
//           />
//         </aside>

//         {/* Mobile filter drawer */}
//         <AnimatePresence>
//           {filtersOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="lg:hidden fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
//               onClick={() => setFiltersOpen(false)}
//             >
//               <motion.div
//                 initial={{ x: "-100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "-100%" }}
//                 transition={{ type: "spring", damping: 28, stiffness: 260 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="absolute left-0 top-0 bottom-0 w-72 bg-bg p-5 overflow-y-auto"
//               >
//                 <div className="flex items-center justify-between mb-5">
//                   <h3 className="font-bold text-ink">Filters</h3>
//                   <button
//                     onClick={() => setFiltersOpen(false)}
//                     className="grid place-items-center w-8 h-8 rounded-full bg-primary-50 text-ink/60"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//                 <CategoryFilterList
//                   activeCategory={activeCategory}
//                   setCategory={(id) => {
//                     setCategory(id);
//                     setFiltersOpen(false);
//                   }}
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Product grid */}
//         <div>
//           {filtered.length === 0 ? (
//             <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-xl4 shadow-softer">
//               <PackageSearch size={40} className="text-ink/20 mb-4" />
//               <h3 className="text-lg font-semibold text-ink">No drinks found</h3>
//               <p className="text-ink/50 text-sm mt-1 max-w-xs">
//                 Try a different category or search term.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
//               {filtered.map((product, i) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.4) }}
//                 >
//                   <ProductCard product={product} />
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function CategoryFilterList({ activeCategory, setCategory }) {
//   return (
//     <div className="bg-white rounded-xl4 shadow-softer p-4 sticky top-[140px]">
//       <h3 className="text-sm font-bold text-ink mb-3 px-1">Categories</h3>
//       <ul className="space-y-1">
//         <li>
//           <button
//             onClick={() => setCategory("all")}
//             className={`w-full text-left px-3 py-2.5 rounded-xl2 text-sm font-medium transition-colors ${
//               activeCategory === "all"
//                 ? "bg-primary-500 text-white"
//                 : "text-ink/70 hover:bg-primary-50"
//             }`}
//           >
//             All Drinks
//           </button>
//         </li>
//         {categories
//           .filter((c) => c.id !== "more")
//           .map((cat) => (
//             <li key={cat.id}>
//               <button
//                 onClick={() => setCategory(cat.id)}
//                 className={`w-full text-left px-3 py-2.5 rounded-xl2 text-sm font-medium transition-colors ${
//                   activeCategory === cat.id
//                     ? "bg-primary-500 text-white"
//                     : "text-ink/70 hover:bg-primary-50"
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }













import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, PackageSearch } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const query = searchParams.get("q") || "";

  const [sortBy, setSortBy] = useState("popularity");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory, query]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    }

    return list;
  }, [activeCategory, query, sortBy]);

  const setCategory = (id) => {
    const next = new URLSearchParams(searchParams);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    setSearchParams(next);
  };

  const clearSearch = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("q");
    setSearchParams(next);
  };

  const activeCategoryName =
    categories.find((c) => c.id === activeCategory)?.name || "All Drinks";

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-5 sm:py-7">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-ink">
            {query ? `Results for "${query}"` : activeCategoryName}
          </h1>
          <p className="text-ink/50 text-xs mt-0.5">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}{" "}
            found
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {query && (
            <button
              onClick={clearSearch}
              className="flex items-center gap-1 text-[11px] font-medium text-ink/50 hover:text-primary-700 bg-primary-50 px-2 py-1.5 rounded-xl2 transition-colors"
            >
              <X size={9} /> Clear search
            </button>
          )}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-medium text-ink bg-white border border-primary-100 rounded-xl2 px-2.5 py-1.5 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                Sort: {opt.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="lg:hidden flex items-center gap-1 text-xs font-semibold text-white bg-primary-500 hover:bg-primary-600 px-2.5 py-1.5 rounded-xl2 transition-colors shrink-0"
          >
            <SlidersHorizontal size={10} /> Filters
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[162px_1fr] gap-5">
        {/* Category filter sidebar */}
        <aside className="hidden lg:block">
          <CategoryFilterList
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        </aside>

        {/* Mobile filter drawer */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
              onClick={() => setFiltersOpen(false)}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                onClick={(e) => e.stopPropagation()}
                className="absolute left-0 top-0 bottom-0 w-[211px] bg-bg p-[15px] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-[15px]">
                  <h3 className="font-bold text-ink text-[15px]">Filters</h3>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="grid place-items-center w-[26px] h-[26px] rounded-full bg-primary-50 text-ink/60"
                  >
                    <X size={12} />
                  </button>
                </div>
                <CategoryFilterList
                  activeCategory={activeCategory}
                  setCategory={(id) => {
                    setCategory(id);
                    setFiltersOpen(false);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16 bg-white rounded-xl4 shadow-softer">
              <PackageSearch size={27} className="text-ink/20 mb-3" />
              <h3 className="text-sm font-semibold text-ink">No drinks found</h3>
              <p className="text-ink/50 text-xs mt-1 max-w-xs">
                Try a different category or search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.4) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryFilterList({ activeCategory, setCategory }) {
  return (
    <div className="bg-white rounded-xl4 shadow-softer p-[11px] sticky top-[140px]">
      <h3 className="text-[13px] font-bold text-ink mb-[9px] px-1">Categories</h3>
      <ul className="space-y-[2px]">
        <li>
          <button
            onClick={() => setCategory("all")}
            className={`w-full text-left px-[9px] py-[7px] rounded-xl2 text-[13px] font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary-500 text-white"
                : "text-ink/70 hover:bg-primary-50"
            }`}
          >
            All Drinks
          </button>
        </li>
        {categories
          .filter((c) => c.id !== "more")
          .map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setCategory(cat.id)}
                className={`w-full text-left px-[9px] py-[7px] rounded-xl2 text-[13px] font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary-500 text-white"
                    : "text-ink/70 hover:bg-primary-50"
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}