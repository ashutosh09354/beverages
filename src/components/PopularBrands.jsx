// import { motion } from "framer-motion";
// import {
//   CupSoda,
//   Sparkles,
//   Zap,
//   Coffee,
//   Leaf,
//   Dumbbell,
//   Milk,
//   HeartPulse,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const brands = [
//   { name: "Sunburst", tag: "Juices", icon: CupSoda, color: "from-orange-400 to-amber-500", category: "juices" },
//   { name: "FizzPop", tag: "Soft Drinks", icon: Sparkles, color: "from-red-400 to-rose-500", category: "soft-drinks" },
//   { name: "Bolt", tag: "Energy", icon: Zap, color: "from-sky-500 to-blue-600", category: "energy-drinks" },
//   { name: "Roast House", tag: "Coffee", icon: Coffee, color: "from-amber-700 to-amber-900", category: "coffee" },
//   { name: "Leaf & Bloom", tag: "Tea", icon: Leaf, color: "from-emerald-400 to-green-500", category: "tea" },
//   { name: "FlexFuel", tag: "Protein", icon: Dumbbell, color: "from-violet-600 to-purple-700", category: "protein-drinks" },
//   { name: "Meadow Farm", tag: "Milk", icon: Milk, color: "from-blue-200 to-slate-300", category: "milk" },
//   { name: "VitaBoost", tag: "Health", icon: HeartPulse, color: "from-fuchsia-600 to-purple-700", category: "health-drinks" },
// ];

// export default function PopularBrands() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8"
//       >
//         <h2 className="text-2xl sm:text-3xl font-bold text-ink">Popular Brands</h2>
//         <p className="text-ink/50 text-sm mt-1">Loved names, trusted every time</p>
//       </motion.div>

//       <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
//         {brands.map((brand, i) => {
//           const Icon = brand.icon;
//           return (
//             <motion.div
//               key={brand.name}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             >
//               <Link
//                 to={`/shop?category=${brand.category}`}
//                 className="flex flex-col items-center gap-2.5 group"
//               >
//                 <motion.div
//                   whileHover={{ y: -6, scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                   className={`grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${brand.color} text-white shadow-soft group-hover:shadow-lift transition-shadow`}
//                 >
//                   <Icon size={26} strokeWidth={2} />
//                 </motion.div>
//                 <div className="text-center">
//                   <p className="text-xs sm:text-sm font-semibold text-ink leading-tight">
//                     {brand.name}
//                   </p>
//                   <p className="text-[10px] sm:text-xs text-ink/45">{brand.tag}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
















import { motion } from "framer-motion";
import {
  CupSoda,
  Sparkles,
  Zap,
  Coffee,
  Leaf,
  Dumbbell,
  Milk,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "Sunburst", tag: "Juices", icon: CupSoda, color: "from-orange-400 to-amber-500", category: "juices" },
  { name: "FizzPop", tag: "Soft Drinks", icon: Sparkles, color: "from-red-400 to-rose-500", category: "soft-drinks" },
  { name: "Bolt", tag: "Energy", icon: Zap, color: "from-sky-500 to-blue-600", category: "energy-drinks" },
  { name: "Roast House", tag: "Coffee", icon: Coffee, color: "from-amber-700 to-amber-900", category: "coffee" },
  { name: "Leaf & Bloom", tag: "Tea", icon: Leaf, color: "from-emerald-400 to-green-500", category: "tea" },
  { name: "FlexFuel", tag: "Protein", icon: Dumbbell, color: "from-violet-600 to-purple-700", category: "protein-drinks" },
  { name: "Meadow Farm", tag: "Milk", icon: Milk, color: "from-blue-200 to-slate-300", category: "milk" },
  { name: "VitaBoost", tag: "Health", icon: HeartPulse, color: "from-fuchsia-600 to-purple-700", category: "health-drinks" },
];

export default function PopularBrands() {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-7 sm:py-9">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h2 className="text-lg sm:text-xl font-bold text-ink">Popular Brands</h2>
        <p className="text-ink/50 text-xs mt-1">Loved names, trusted every time</p>
      </motion.div>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5">
        {brands.map((brand, i) => {
          const Icon = brand.icon;
          return (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/shop?category=${brand.category}`}
                className="flex flex-col items-center gap-1.5 group"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`grid place-items-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${brand.color} text-white shadow-soft group-hover:shadow-lift transition-shadow`}
                >
                  <Icon size={17} strokeWidth={2} />
                </motion.div>
                <div className="text-center">
                  <p className="text-[11px] sm:text-xs font-semibold text-ink leading-tight">
                    {brand.name}
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-ink/45">{brand.tag}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}