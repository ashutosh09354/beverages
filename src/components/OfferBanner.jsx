// import { motion } from "framer-motion";
// import { ArrowRight, Percent, Gift } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function OfferBanner() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//       <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//         {/* Panel 1 — Summer Cooler Sale */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ y: -4 }}
//           className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-primary-500 to-emerald-600 p-7 sm:p-9 min-h-[210px] flex flex-col justify-center"
//         >
//           <FloatingBlob className="top-[-2rem] right-[-2rem] w-40 h-40 bg-white/10" delay={0} />
//           <FloatingBlob className="bottom-[-3rem] left-[-1rem] w-32 h-32 bg-black/10" delay={0.5} />

//           <motion.span
//             animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-6 right-8 grid place-items-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm text-white"
//           >
//             <Percent size={24} />
//           </motion.span>

//           <div className="relative z-10">
//             <span className="inline-block text-xs font-bold tracking-wide uppercase text-white bg-white/20 px-3 py-1 rounded-full mb-3">
//               Limited Time
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//               Summer Cooler
//               <br />
//               Sale
//             </h3>
//             <p className="text-white/85 text-sm mt-2">
//               Up to <span className="font-bold">30% off</span> on juices &amp; sparkling water
//             </p>

//             <Link to="/shop">
//               <motion.span
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 rounded-xl2 bg-white text-primary-700 font-semibold text-sm shadow-softer"
//               >
//                 Shop Now <ArrowRight size={15} />
//               </motion.span>
//             </Link>
//           </div>
//         </motion.div>

//         {/* Panel 2 — Buy 2 Get 1 Free */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           whileHover={{ y: -4 }}
//           className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-secondary-500 to-amber-600 p-7 sm:p-9 min-h-[210px] flex flex-col justify-center"
//         >
//           <FloatingBlob className="top-[-3rem] left-[-2rem] w-40 h-40 bg-white/10" delay={0.2} />
//           <FloatingBlob className="bottom-[-2rem] right-[-1rem] w-32 h-32 bg-black/10" delay={0.7} />

//           <motion.span
//             animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
//             transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//             className="absolute top-6 right-8 grid place-items-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm text-white"
//           >
//             <Gift size={24} />
//           </motion.span>

//           <div className="relative z-10">
//             <span className="inline-block text-xs font-bold tracking-wide uppercase text-white bg-white/20 px-3 py-1 rounded-full mb-3">
//               Bundle Deal
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//               Buy 2 Get 1
//               <br />
//               Free
//             </h3>
//             <p className="text-white/85 text-sm mt-2">
//               On selected soft drinks &amp; soda favourites
//             </p>

//             <Link to="/shop">
//               <motion.span
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 rounded-xl2 bg-white text-secondary-600 font-semibold text-sm shadow-softer"
//               >
//                 Grab Offer <ArrowRight size={15} />
//               </motion.span>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function FloatingBlob({ className, delay = 0 }) {
//   return (
//     <motion.div
//       animate={{ scale: [1, 1.12, 1] }}
//       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
//       className={`pointer-events-none absolute rounded-full blur-md ${className}`}
//     />
//   );
// }










import { motion } from "framer-motion";
import { ArrowRight, Percent, Gift } from "lucide-react";
import { Link } from "react-router-dom";

export default function OfferBanner() {
  return (
    <section className="max-w-7xl mx-auto px-2.5 sm:px-3 lg:px-5 py-4 sm:py-5">
      <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-3">
        {/* Panel 1 — Summer Cooler Sale */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-primary-500 to-emerald-600 p-4 sm:p-5 min-h-[113px] flex flex-col justify-center"
        >
          <FloatingBlob className="top-[-1rem] right-[-1rem] w-[86px] h-[86px] bg-white/10" delay={0} />
          <FloatingBlob className="bottom-[-1.6rem] left-[-0.6rem] w-[69px] h-[69px] bg-black/10" delay={0.5} />

          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 right-4 grid place-items-center w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm text-white"
          >
            <Percent size={13} />
          </motion.span>

          <div className="relative z-10">
            <span className="inline-block text-[8px] font-bold tracking-wide uppercase text-white bg-white/20 px-1.5 py-0.5 rounded-full mb-1.5">
              Limited Time
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              Summer Cooler
              <br />
              Sale
            </h3>
            <p className="text-white/85 text-[10px] mt-1">
              Up to <span className="font-bold">30% off</span> on juices &amp; sparkling water
            </p>

            <Link to="/shop">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1 mt-2.5 px-3 py-1.5 rounded-xl2 bg-white text-primary-700 font-semibold text-[10px] shadow-softer"
              >
                Shop Now <ArrowRight size={8} />
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Panel 2 — Buy 2 Get 1 Free */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-secondary-500 to-amber-600 p-4 sm:p-5 min-h-[113px] flex flex-col justify-center"
        >
          <FloatingBlob className="top-[-1.6rem] left-[-1rem] w-[86px] h-[86px] bg-white/10" delay={0.2} />
          <FloatingBlob className="bottom-[-1rem] right-[-0.6rem] w-[69px] h-[69px] bg-black/10" delay={0.7} />

          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-3 right-4 grid place-items-center w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm text-white"
          >
            <Gift size={13} />
          </motion.span>

          <div className="relative z-10">
            <span className="inline-block text-[8px] font-bold tracking-wide uppercase text-white bg-white/20 px-1.5 py-0.5 rounded-full mb-1.5">
              Bundle Deal
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              Buy 2 Get 1
              <br />
              Free
            </h3>
            <p className="text-white/85 text-[10px] mt-1">
              On selected soft drinks &amp; soda favourites
            </p>

            <Link to="/shop">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1 mt-2.5 px-3 py-1.5 rounded-xl2 bg-white text-secondary-600 font-semibold text-[10px] shadow-softer"
              >
                Grab Offer <ArrowRight size={8} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBlob({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`pointer-events-none absolute rounded-full blur-md ${className}`}
    />
  );
}