// import { useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { categories } from "../data/categories";

// export default function CategoryBar() {
//   const [active, setActive] = useState("juices");
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = (cat) => {
//     setActive(cat.id);

//     if (location.pathname !== "/") {
//       navigate(`/#${cat.id}`);
//       return;
//     }

//     const el = document.getElementById(cat.id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <nav className="sticky top-[64px] md:top-[73px] z-40 bg-bg/95 backdrop-blur-md border-b border-primary-100/50">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div
//           ref={scrollRef}
//           className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2.5"
//         >
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = active === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => handleClick(cat)}
//                 className="relative flex flex-col items-center justify-center gap-1.5 min-w-[74px] sm:min-w-[84px] px-2.5 py-2 rounded-xl2 shrink-0 group transition-colors"
//               >
//                 <motion.div
//                   whileHover={{ y: -3, scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 350, damping: 18 }}
//                   className={`grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl2 transition-all ${
//                     isActive
//                       ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lift"
//                       : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
//                   }`}
//                 >
//                   <Icon size={20} strokeWidth={2} />
//                 </motion.div>
//                 <span
//                   className={`text-[11px] sm:text-xs font-medium whitespace-nowrap transition-colors ${
//                     isActive ? "text-primary-700 font-semibold" : "text-ink/60"
//                   }`}
//                 >
//                   {cat.name}
//                 </span>
//                 {isActive && (
//                   <motion.span
//                     layoutId="category-active-dot"
//                     className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-primary-600"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }













// import { useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { categories } from "../data/categories";

// export default function CategoryBar() {
//   const [active, setActive] = useState("juices");
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = (cat) => {
//     setActive(cat.id);

//     if (location.pathname !== "/") {
//       navigate(`/#${cat.id}`);
//       return;
//     }

//     const el = document.getElementById(cat.id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <nav className="sticky top-[43px] md:top-[49px] z-40 bg-bg/95 backdrop-blur-md border-b border-primary-100/50">
//       <div className="max-w-7xl mx-auto px-1.5 sm:px-4 lg:px-6">
//         <div
//           ref={scrollRef}
//           className="flex items-center gap-0.5 sm:gap-1.5 overflow-x-auto no-scrollbar py-1.5"
//         >
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = active === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => handleClick(cat)}
//                 className="relative flex flex-col items-center justify-center gap-1 min-w-[50px] sm:min-w-[56px] px-1.5 py-1.5 rounded-xl2 shrink-0 group transition-colors"
//               >
//                 <motion.div
//                   whileHover={{ y: -3, scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 350, damping: 18 }}
//                   className={`grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl2 transition-all ${
//                     isActive
//                       ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lift"
//                       : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
//                   }`}
//                 >
//                   <Icon size={13} strokeWidth={2} />
//                 </motion.div>
//                 <span
//                   className={`text-[8px] sm:text-[10px] font-medium whitespace-nowrap transition-colors ${
//                     isActive ? "text-primary-700 font-semibold" : "text-ink/60"
//                   }`}
//                 >
//                   {cat.name}
//                 </span>
//                 {isActive && (
//                   <motion.span
//                     layoutId="category-active-dot"
//                     className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-primary-600"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }












// import { useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { categories } from "../data/categories";

// export default function CategoryBar() {
//   const [active, setActive] = useState("juices");
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = (cat) => {
//     setActive(cat.id);

//     if (location.pathname !== "/") {
//       navigate(`/#${cat.id}`);
//       return;
//     }

//     const el = document.getElementById(cat.id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <nav className="sticky top-[38.7px] md:top-[44.1px] z-40 bg-bg/95 backdrop-blur-md border-b border-primary-100/50">
//       <div className="max-w-7xl mx-auto px-[5.4px] sm:px-[14.4px] lg:px-[21.6px]">
//         <div
//           ref={scrollRef}
//           className="flex items-center gap-[1.8px] sm:gap-[5.4px] overflow-x-auto no-scrollbar py-[5.4px]"
//         >
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = active === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => handleClick(cat)}
//                 className="relative flex flex-col items-center justify-center gap-1 min-w-[45px] sm:min-w-[50.4px] px-[5.4px] py-[5.4px] rounded-xl2 shrink-0 group transition-colors"
//               >
//                 <motion.div
//                   whileHover={{ y: -3, scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 350, damping: 18 }}
//                   className={`grid place-items-center w-[25.2px] h-[25.2px] sm:w-[28.8px] sm:h-[28.8px] rounded-xl2 transition-all ${
//                     isActive
//                       ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lift"
//                       : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
//                   }`}
//                 >
//                   <Icon size={12} strokeWidth={2} />
//                 </motion.div>
//                 <span
//                   className={`text-[7.2px] sm:text-[9px] font-medium whitespace-nowrap transition-colors ${
//                     isActive ? "text-primary-700 font-semibold" : "text-ink/60"
//                   }`}
//                 >
//                   {cat.name}
//                 </span>
//                 {isActive && (
//                   <motion.span
//                     layoutId="category-active-dot"
//                     className="absolute -bottom-0.5 w-[3.6px] h-[3.6px] rounded-full bg-primary-600"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }


















// import { useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { categories } from "../data/categories";

// export default function CategoryBar() {
//   const [active, setActive] = useState("juices");
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = (cat) => {
//     setActive(cat.id);

//     if (location.pathname !== "/") {
//       navigate(`/#${cat.id}`);
//       return;
//     }

//     const el = document.getElementById(cat.id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const scrollByAmount = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction * 160,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <nav className="sticky top-[38.7px] md:top-[44.1px] z-40 bg-bg/95 backdrop-blur-md border-b border-primary-100/50">
//       <div className="max-w-7xl mx-auto px-[5.4px] sm:px-[14.4px] lg:px-[21.6px] relative">
//         {/* Left scroll button */}
//         <button
//           type="button"
//           onClick={() => scrollByAmount(-1)}
//           aria-label="Scroll categories left"
//           className="hidden sm:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-bg/90 border border-primary-100 shadow-softer text-primary-700 hover:bg-primary-50 transition-colors"
//         >
//           <ChevronLeft size={14} strokeWidth={2.2} />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex items-center gap-[1.8px] sm:gap-[5.4px] overflow-x-auto no-scrollbar py-[5.4px] sm:px-7"
//         >
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = active === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => handleClick(cat)}
//                 className="relative flex flex-col items-center justify-center gap-1 min-w-[45px] sm:min-w-[50.4px] px-[5.4px] py-[5.4px] rounded-xl2 shrink-0 group transition-colors"
//               >
//                 <motion.div
//                   whileHover={{ y: -3, scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 350, damping: 18 }}
//                   className={`grid place-items-center w-[25.2px] h-[25.2px] sm:w-[28.8px] sm:h-[28.8px] rounded-xl2 transition-all ${
//                     isActive
//                       ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lift"
//                       : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
//                   }`}
//                 >
//                   <Icon size={12} strokeWidth={2} />
//                 </motion.div>
//                 <span
//                   className={`text-[7.2px] sm:text-[9px] font-medium whitespace-nowrap transition-colors ${
//                     isActive ? "text-primary-700 font-semibold" : "text-ink/60"
//                   }`}
//                 >
//                   {cat.name}
//                 </span>
//                 {isActive && (
//                   <motion.span
//                     layoutId="category-active-dot"
//                     className="absolute -bottom-0.5 w-[3.6px] h-[3.6px] rounded-full bg-primary-600"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Right scroll button */}
//         <button
//           type="button"
//           onClick={() => scrollByAmount(1)}
//           aria-label="Scroll categories right"
//           className="hidden sm:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-bg/90 border border-primary-100 shadow-softer text-primary-700 hover:bg-primary-50 transition-colors"
//         >
//           <ChevronRight size={14} strokeWidth={2.2} />
//         </button>
//       </div>
//     </nav>
//   );
// }














import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "../data/categories";

export default function CategoryBar() {
  const [active, setActive] = useState("juices");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (cat) => {
    setActive(cat.id);
    navigate(`/shop?category=${cat.id}`);
  };

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 160,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-[38.7px] md:top-[44.1px] z-40 bg-bg/95 backdrop-blur-md border-b border-primary-100/50">
      <div className="max-w-7xl mx-auto px-[5.4px] sm:px-[14.4px] lg:px-[21.6px] relative">
        {/* Left scroll button */}
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll categories left"
          className="hidden sm:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-bg/90 border border-primary-100 shadow-softer text-primary-700 hover:bg-primary-50 transition-colors"
        >
          <ChevronLeft size={14} strokeWidth={2.2} />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-[1.8px] sm:gap-[5.4px] overflow-x-auto no-scrollbar py-[5.4px] sm:px-7"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleClick(cat)}
                className="relative flex flex-col items-center justify-center gap-1 min-w-[45px] sm:min-w-[50.4px] px-[5.4px] py-[5.4px] rounded-xl2 shrink-0 group transition-colors"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className={`grid place-items-center w-[25.2px] h-[25.2px] sm:w-[28.8px] sm:h-[28.8px] rounded-xl2 transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lift"
                      : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
                  }`}
                >
                  <Icon size={12} strokeWidth={2} />
                </motion.div>
                <span
                  className={`text-[7.2px] sm:text-[9px] font-medium whitespace-nowrap transition-colors ${
                    isActive ? "text-primary-700 font-semibold" : "text-ink/60"
                  }`}
                >
                  {cat.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="category-active-dot"
                    className="absolute -bottom-0.5 w-[3.6px] h-[3.6px] rounded-full bg-primary-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right scroll button */}
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll categories right"
          className="hidden sm:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-bg/90 border border-primary-100 shadow-softer text-primary-700 hover:bg-primary-50 transition-colors"
        >
          <ChevronRight size={14} strokeWidth={2.2} />
        </button>
      </div>
    </nav>
  );
}