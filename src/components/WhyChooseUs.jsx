// import { motion } from "framer-motion";
// import { Leaf, Zap, Tag, RotateCcw, ShieldCheck } from "lucide-react";

// const features = [
//   {
//     icon: Leaf,
//     title: "Farm Fresh",
//     description: "Handpicked ingredients, naturally sourced.",
//     color: "text-primary-600 bg-primary-50",
//   },
//   {
//     icon: Zap,
//     title: "Lightning Delivery",
//     description: "10-minute express delivery to your door.",
//     color: "text-secondary-600 bg-secondary-50",
//   },
//   {
//     icon: Tag,
//     title: "Best Prices",
//     description: "Unbeatable deals, every single day.",
//     color: "text-rose-600 bg-rose-50",
//   },
//   {
//     icon: RotateCcw,
//     title: "Easy Returns",
//     description: "Hassle-free returns, no questions asked.",
//     color: "text-sky-600 bg-sky-50",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Secure Payments",
//     description: "100% safe checkout, every order.",
//     color: "text-violet-600 bg-violet-50",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.5 }}
//         className="mb-8 text-center sm:text-left"
//       >
//         <h2 className="text-2xl sm:text-3xl font-bold text-ink">Why Choose Us</h2>
//         <p className="text-ink/50 text-sm mt-1">
//           Quality and convenience, in every delivery
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
//         {features.map(({ icon: Icon, title, description, color }, i) => (
//           <motion.div
//             key={title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.45, delay: i * 0.07 }}
//             whileHover={{ y: -6 }}
//             className="flex flex-col items-center text-center gap-3 bg-white rounded-xl4 p-5 sm:p-6 shadow-softer hover:shadow-lift transition-shadow"
//           >
//             <span className={`grid place-items-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl2 ${color}`}>
//               <Icon size={22} />
//             </span>
//             <div>
//               <h3 className="text-sm sm:text-base font-semibold text-ink">{title}</h3>
//               <p className="text-xs sm:text-sm text-ink/50 mt-1 leading-snug">
//                 {description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }









import { motion } from "framer-motion";
import { Leaf, Zap, Tag, RotateCcw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    // description: "Handpicked ingredients, naturally sourced.",
    color: "text-primary-600 bg-primary-50",
  },
  {
    icon: Zap,
    title: "Lightning Delivery",
    // description: "10-minute express delivery to your door.",
    color: "text-secondary-600 bg-secondary-50",
  },
  {
    icon: Tag,
    title: "Best Prices",
    // description: "Unbeatable deals, every single day.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    // description: "Hassle-free returns, no questions asked.",
    color: "text-sky-600 bg-sky-50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    // description: "100% safe checkout, every order.",
    color: "text-violet-600 bg-violet-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-7 sm:py-9">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-center sm:text-left"
      >
        <h2 className="text-lg sm:text-xl font-bold text-ink">Why Choose Us</h2>
        <p className="text-ink/50 text-xs mt-1">
          Quality and convenience, in every delivery
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
        {features.map(({ icon: Icon, title, description, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center text-center gap-2 bg-white rounded-xl4 p-3.5 sm:p-4 shadow-softer hover:shadow-lift transition-shadow"
          >
            <span className={`grid place-items-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl2 ${color}`}>
              <Icon size={15} />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-ink">{title}</h3>
              <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5 leading-snug">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}