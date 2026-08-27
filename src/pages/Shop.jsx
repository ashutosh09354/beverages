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
import { commonPackSizes, products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "discount", label: "Discount" },
  { value: "rating", label: "Customer Rating" },
];

const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "under-50", label: "Under ₹50" },
  { value: "50-100", label: "₹50 - ₹100" },
  { value: "100-250", label: "₹100 - ₹250" },
  { value: "250-plus", label: "₹250+" },
];

const availabilityOptions = [
  { value: "all", label: "Any Availability" },
  { value: "in-stock", label: "In Stock" },
  { value: "out-of-stock", label: "Out of Stock" },
];

const discountOptions = [
  { value: "all", label: "Any Discount" },
  { value: "with-discount", label: "With Discount" },
  { value: "10-plus", label: "10% or more" },
  { value: "20-plus", label: "20% or more" },
  { value: "30-plus", label: "30% or more" },
];

const ratingOptions = [
  { value: "all", label: "Any Rating" },
  { value: "4plus", label: "4★ & up" },
  { value: "4.5plus", label: "4.5★ & up" },
  { value: "5", label: "5★ only" },
];

const productTypeMap = {
  juices: "Juice",
  "soft-drinks": "Soft Drink",
  "energy-drinks": "Energy Drink",
  "sparkling-water": "Sparkling Water",
  milk: "Milk",
  coffee: "Coffee",
  tea: "Tea",
  smoothies: "Smoothie",
  "protein-drinks": "Protein Drink",
  mocktails: "Mocktail",
  "health-drinks": "Health Drink",
  "flavored-water": "Flavored Water",
  kombucha: "Kombucha",
  water: "Water",
};

const filterDefaults = {
  brand: "all",
  price: "all",
  packSize: "all",
  flavour: "all",
  availability: "all",
  discount: "all",
  rating: "all",
  productType: "all",
  packType: "all",
};

const inferBrand = (product) => {
  if (product.brand) return product.brand;
  if (product.manufacturer) return product.manufacturer;
  const raw = product.name.split("|")[0].trim();
  return raw.split(" ").slice(0, 2).join(" ");
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

const inferPackType = (product) => {
  if (product.packType) return product.packType;
  const text = `${product.name} ${product.size}`.toLowerCase();
  if (text.includes("tetra")) return "Tetra Pack";
  if (text.includes("glass")) return "Glass Bottle";
  if (text.includes("pouch")) return "Pouch";
  if (text.includes("can")) return "Can";
  if (text.includes("pet")) return "PET Bottle";
  return "Bottle";
};

const inferAvailability = (product) => {
  if (product.status) return product.status.toLowerCase();
  if (product.stockQuantity === 0) return "out-of-stock";
  return "in-stock";
};

const getPackSizes = (product) => {
  if (Array.isArray(product.variants) && product.variants.length > 0) {
    return [...new Set(product.variants.map((variant) => variant.size).filter(Boolean))];
  }
  return product.size ? [product.size] : [];
};

const getDiscountPercent = (product) => {
  if (!product.oldPrice || product.oldPrice <= product.price) return 0;
  return Math.round(100 - (product.price / product.oldPrice) * 100);
};

const matchesPriceRange = (price, range) => {
  switch (range) {
    case "under-50":
      return price < 50;
    case "50-100":
      return price >= 50 && price <= 100;
    case "100-250":
      return price > 100 && price <= 250;
    case "250-plus":
      return price > 250;
    default:
      return true;
  }
};

const productTypeLabel = (product) =>
  product.productType || productTypeMap[product.category] || product.category;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const query = searchParams.get("q") || "";

  const [sortBy, setSortBy] = useState("popularity");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(filterDefaults);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory, query]);

  const filterChoices = useMemo(() => {
    const uniq = (items) => [...new Set(items.filter(Boolean))];
    const packSizes = uniq([
      ...commonPackSizes,
      ...products.flatMap(getPackSizes),
    ]);

    return {
      brands: uniq(products.map(inferBrand)).sort(),
      flavours: uniq(products.map(inferFlavour)).sort(),
      packSizes,
      packTypes: uniq(products.map(inferPackType)).sort(),
      productTypes: uniq(products.map(productTypeLabel)).sort(),
    };
  }, []);

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
            p.category.toLowerCase().includes(q) ||
            inferBrand(p).toLowerCase().includes(q) ||
            inferFlavour(p).toLowerCase().includes(q) ||
            productTypeLabel(p).toLowerCase().includes(q)
        );
    }

    if (filters.brand !== "all") {
      list = list.filter((p) => inferBrand(p) === filters.brand);
    }

    if (filters.price !== "all") {
      list = list.filter((p) => matchesPriceRange(p.price, filters.price));
    }

    if (filters.packSize !== "all") {
      list = list.filter((p) => getPackSizes(p).includes(filters.packSize));
    }

    if (filters.flavour !== "all") {
      list = list.filter((p) => inferFlavour(p) === filters.flavour);
    }

    if (filters.availability !== "all") {
      list = list.filter((p) => inferAvailability(p) === filters.availability);
    }

    if (filters.discount !== "all") {
      list = list.filter((p) => {
        const discount = getDiscountPercent(p);
        switch (filters.discount) {
          case "with-discount":
            return discount > 0;
          case "10-plus":
            return discount >= 10;
          case "20-plus":
            return discount >= 20;
          case "30-plus":
            return discount >= 30;
          default:
            return true;
        }
      });
    }

    if (filters.rating !== "all") {
      list = list.filter((p) => {
        switch (filters.rating) {
          case "4plus":
            return (p.rating || 0) >= 4;
          case "4.5plus":
            return (p.rating || 0) >= 4.5;
          case "5":
            return (p.rating || 0) >= 5;
          default:
            return true;
        }
      });
    }

    if (filters.productType !== "all") {
      list = list.filter((p) => productTypeLabel(p) === filters.productType);
    }

    if (filters.packType !== "all") {
      list = list.filter((p) => inferPackType(p) === filters.packType);
    }

    switch (sortBy) {
      case "newest":
        list.sort((a, b) => {
          if (!!a.isNew !== !!b.isNew) return Number(!!b.isNew) - Number(!!a.isNew);
          return (b.reviews || 0) - (a.reviews || 0);
        });
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        list.sort((a, b) => getDiscountPercent(b) - getDiscountPercent(a));
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => {
          const aScore =
            (a.isBestSeller ? 4 : 0) +
            (a.isTrending ? 2 : 0) +
            (a.isNew ? 1 : 0) +
            (a.reviews || 0) / 100;
          const bScore =
            (b.isBestSeller ? 4 : 0) +
            (b.isTrending ? 2 : 0) +
            (b.isNew ? 1 : 0) +
            (b.reviews || 0) / 100;
          return bScore - aScore;
        });
    }

    return list;
  }, [activeCategory, filters, query, sortBy]);

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

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(filterDefaults);
    setSortBy("popularity");
  };

  const activeFilterCount = Object.values(filters).filter((value) => value !== "all").length;

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

        <div className="flex items-center gap-1.5 flex-wrap justify-start sm:justify-end">
          {query && (
            <button
              onClick={clearSearch}
              className="flex items-center gap-1 text-[11px] font-medium text-ink/50 hover:text-primary-700 bg-primary-50 px-2 py-1.5 rounded-xl2 transition-colors"
            >
              <X size={9} /> Clear search
            </button>
          )}

          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-[11px] font-medium text-primary-700 bg-primary-50 px-2 py-1.5 rounded-xl2 transition-colors"
            >
              Reset filters ({activeFilterCount})
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

      <div className="grid lg:grid-cols-[260px_1fr] gap-5">
        {/* Filter sidebar */}
        <aside className="hidden lg:block">
          <FiltersPanel
            activeCategory={activeCategory}
            setCategory={setCategory}
            filters={filters}
            updateFilter={updateFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            resetFilters={resetFilters}
            activeFilterCount={activeFilterCount}
            filterChoices={filterChoices}
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
                className="absolute left-0 top-0 bottom-0 w-[286px] bg-bg p-[15px] overflow-y-auto"
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
                <FiltersPanel
                  activeCategory={activeCategory}
                  setCategory={(id) => {
                    setCategory(id);
                    setFiltersOpen(false);
                  }}
                  filters={filters}
                  updateFilter={(key, value) => {
                    updateFilter(key, value);
                    setFiltersOpen(false);
                  }}
                  sortBy={sortBy}
                  setSortBy={(value) => {
                    setSortBy(value);
                    setFiltersOpen(false);
                  }}
                  resetFilters={() => {
                    resetFilters();
                    setFiltersOpen(false);
                  }}
                  activeFilterCount={activeFilterCount}
                  filterChoices={filterChoices}
                  compact
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
    <div className="bg-white rounded-xl4 shadow-softer p-[11px]">
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

function FilterSelect({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold text-ink/60 mb-1 px-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-[11px] font-medium text-ink bg-white border border-primary-100 rounded-xl2 px-2.5 py-2 shadow-softer focus:outline-none focus:ring-4 focus:ring-primary-500/15"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FiltersPanel({
  activeCategory,
  setCategory,
  filters,
  updateFilter,
  sortBy,
  setSortBy,
  resetFilters,
  activeFilterCount,
  filterChoices,
  compact = false,
}) {
  const wrapperClassName = compact
    ? "bg-white rounded-xl4 shadow-softer p-3 space-y-3"
    : "bg-white rounded-xl4 shadow-softer p-[11px] sticky top-[140px] space-y-3";

  return (
    <div className={wrapperClassName}>
      <div className="flex items-center justify-between gap-2 px-1">
        <div>
          <h3 className="text-[13px] font-bold text-ink">Recommended Filters</h3>
          <p className="text-[10px] text-ink/40 mt-0.5">
            Narrow by what matters most
          </p>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-[10px] font-semibold text-primary-700 bg-primary-50 px-2 py-1 rounded-lg shrink-0"
          >
            Clear
          </button>
        )}
      </div>

      <CategoryFilterList activeCategory={activeCategory} setCategory={setCategory} />

      <div className="space-y-2.5">
        <FilterSelect
          label="Recommended Sorting"
          value={sortBy}
          onChange={setSortBy}
          options={sortOptions}
        />

        <FilterSelect
          label="Brand"
          value={filters.brand}
          onChange={(value) => updateFilter("brand", value)}
          options={[
            { value: "all", label: "All Brands" },
            ...filterChoices.brands.map((brand) => ({
              value: brand,
              label: brand,
            })),
          ]}
        />

        <FilterSelect
          label="Price"
          value={filters.price}
          onChange={(value) => updateFilter("price", value)}
          options={priceRanges}
        />

        <FilterSelect
          label="Pack Size"
          value={filters.packSize}
          onChange={(value) => updateFilter("packSize", value)}
          options={[
            { value: "all", label: "Any Pack Size" },
            ...filterChoices.packSizes.map((size) => ({
              value: size,
              label: size,
            })),
          ]}
        />

        <FilterSelect
          label="Flavour"
          value={filters.flavour}
          onChange={(value) => updateFilter("flavour", value)}
          options={[
            { value: "all", label: "Any Flavour" },
            ...filterChoices.flavours.map((flavour) => ({
              value: flavour,
              label: flavour,
            })),
          ]}
        />

        <FilterSelect
          label="Availability"
          value={filters.availability}
          onChange={(value) => updateFilter("availability", value)}
          options={availabilityOptions}
        />

        <FilterSelect
          label="Discount"
          value={filters.discount}
          onChange={(value) => updateFilter("discount", value)}
          options={discountOptions}
        />

        <FilterSelect
          label="Rating"
          value={filters.rating}
          onChange={(value) => updateFilter("rating", value)}
          options={ratingOptions}
        />

        <FilterSelect
          label="Product Type"
          value={filters.productType}
          onChange={(value) => updateFilter("productType", value)}
          options={[
            { value: "all", label: "Any Product Type" },
            ...filterChoices.productTypes.map((type) => ({
              value: type,
              label: type,
            })),
          ]}
        />

        <FilterSelect
          label="Pack Type"
          value={filters.packType}
          onChange={(value) => updateFilter("packType", value)}
          options={[
            { value: "all", label: "Any Pack Type" },
            ...filterChoices.packTypes.map((type) => ({
              value: type,
              label: type,
            })),
          ]}
        />
      </div>
    </div>
  );
}
