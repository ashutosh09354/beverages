// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function CategoryCard({ category }) {
//   const { id, name, description, count, icon: Icon, gradient } = category;

//   return (
//     <Link to={`/shop?category=${id}`} className="block h-full">
//       <motion.div
//         whileHover={{ y: -8 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className={`relative h-full min-h-[200px] sm:min-h-[220px] rounded-xl5 bg-gradient-to-br ${gradient} p-6 sm:p-7 overflow-hidden shadow-soft group cursor-pointer`}
//       >
//         {/* decorative blobs */}
//         <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/15 group-hover:scale-110 transition-transform duration-500" />
//         <div className="pointer-events-none absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-black/5" />

//         {/* icon badge */}
//         <motion.div
//           whileHover={{ rotate: -6, scale: 1.08 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="relative z-10 grid place-items-center w-14 h-14 rounded-xl2 bg-white/25 backdrop-blur-sm text-white mb-5"
//         >
//           <Icon size={26} strokeWidth={2} />
//         </motion.div>

//         <div className="relative z-10">
//           <h3 className="text-lg sm:text-xl font-bold text-white">{name}</h3>
//           <p className="text-white/85 text-sm mt-1">{description}</p>
//           <div className="flex items-center justify-between mt-4">
//             <span className="text-xs font-semibold text-white/90 bg-white/20 px-2.5 py-1 rounded-full">
//               {count}
//             </span>
//             <span className="grid place-items-center w-8 h-8 rounded-full bg-white/90 text-ink group-hover:bg-white transition-colors">
//               <ArrowUpRight size={16} />
//             </span>
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }














import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  const { id, name, description, count, icon: Icon, gradient } = category;

  return (
    <Link to={`/shop?category=${id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative h-full min-h-[107px] sm:min-h-[118px] rounded-xl5 bg-gradient-to-br ${gradient} p-3 sm:p-4 overflow-hidden shadow-soft group cursor-pointer`}
      >
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-4 -right-4 w-[69px] h-[69px] rounded-full bg-white/15 group-hover:scale-110 transition-transform duration-500" />
        <div className="pointer-events-none absolute -bottom-5 -left-3 w-[60px] h-[60px] rounded-full bg-black/5" />

        {/* icon badge */}
        <motion.div
          whileHover={{ rotate: -6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10 grid place-items-center w-7 h-7 rounded-xl2 bg-white/25 backdrop-blur-sm text-white mb-2.5"
        >
          <Icon size={14} strokeWidth={2} />
        </motion.div>

        <div className="relative z-10">
          <h3 className="text-xs sm:text-sm font-bold text-white">{name}</h3>
          <p className="text-white/85 text-[10px] mt-0.5">{description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[8px] font-semibold text-white/90 bg-white/20 px-1 py-0.5 rounded-full">
              {count}
            </span>
            <span className="grid place-items-center w-4 h-4 rounded-full bg-white/90 text-ink group-hover:bg-white transition-colors">
              <ArrowUpRight size={9} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}