// import { motion } from "framer-motion";
// import { ArrowRight, Compass, Leaf, Truck, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";

// const trustBadges = [
//   { icon: Leaf, label: "100% Natural" },
//   { icon: Truck, label: "Fast Delivery" },
//   { icon: ShieldCheck, label: "Secure Payment" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-bg to-secondary-50">
//       {/* ambient gradient blobs */}
//       <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl" />
//       <div className="pointer-events-none absolute top-10 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary-200/40 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-primary-700 bg-primary-100 px-3.5 py-1.5 rounded-full mb-5">
//               <Leaf size={13} /> Fresh &amp; Natural
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-ink">
//               Sip something
//               <br />
//               <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                 real
//               </span>
//               , every time.
//             </h1>

//             <p className="mt-5 text-base sm:text-lg text-ink/60 max-w-md mx-auto lg:mx-0">
//               From cold-pressed juices to energizing brews — discover
//               beverages made to refresh, recharge, and delight, delivered
//               straight to your door.
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//               <Link to="/shop">
//                 <motion.span
//                   whileHover={{ scale: 1.03, y: -2 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift overflow-hidden isolate"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Shop Now <ArrowRight size={17} />
//                   </span>
//                   <motion.span
//                     className="absolute inset-0 bg-primary-600 -z-0"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.span>
//               </Link>

//               <Link to="/shop">
//                 <motion.span
//                   whileHover={{ scale: 1.03, y: -2 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl3 bg-white text-ink font-semibold border border-primary-200 shadow-softer hover:border-primary-400 transition-colors"
//                 >
//                   <Compass size={17} className="text-primary-600" />
//                   Explore Drinks
//                 </motion.span>
//               </Link>
//             </div>

//             {/* Trust badges */}
//             <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3">
//               {trustBadges.map(({ icon: Icon, label }) => (
//                 <div key={label} className="flex items-center gap-2 text-sm text-ink/60">
//                   <span className="grid place-items-center w-8 h-8 rounded-xl2 bg-white shadow-softer text-primary-600">
//                     <Icon size={15} />
//                   </span>
//                   <span className="font-medium">{label}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//             className="relative h-[340px] sm:h-[420px] lg:h-[520px] flex items-center justify-center"
//           >
//             {/* soft radial platform */}
//             <div className="absolute bottom-6 w-56 h-10 rounded-full bg-primary-900/10 blur-xl" />

//             {/* Floating bottle */}
//             <motion.div
//               animate={{ y: [0, -16, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10 w-40 sm:w-52 lg:w-60 drop-shadow-2xl"
//             >
//               <BottleSVG />
//             </motion.div>

//             {/* Floating orange slice */}
//             <motion.div
//               animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
//               transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//               className="absolute top-6 left-2 sm:left-6 w-16 sm:w-20"
//             >
//               <OrangeSliceSVG />
//             </motion.div>

//             {/* Floating lime slice */}
//             <motion.div
//               animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
//               transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//               className="absolute bottom-16 right-0 sm:right-4 w-14 sm:w-16"
//             >
//               <LimeSliceSVG />
//             </motion.div>

//             {/* Ice cubes */}
//             <motion.div
//               animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
//               transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//               className="absolute top-16 right-2 sm:right-8 w-10 sm:w-12"
//             >
//               <IceCubeSVG />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
//               transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
//               className="absolute bottom-24 left-0 sm:left-4 w-8 sm:w-10"
//             >
//               <IceCubeSVG />
//             </motion.div>

//             {/* Splash droplets */}
//             <motion.div
//               animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
//               transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-sky-200/70"
//             />
//             <motion.div
//               animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-sky-200/70"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BottleSVG() {
//   return (
//     <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//       <defs>
//         <linearGradient id="bottleBody" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#F59E0B" />
//           <stop offset="100%" stopColor="#EA7C0A" />
//         </linearGradient>
//         <linearGradient id="bottleCap" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#16A34A" />
//           <stop offset="100%" stopColor="#128040" />
//         </linearGradient>
//         <linearGradient id="labelGrad" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#FFFDF8" />
//           <stop offset="100%" stopColor="#FFF7E8" />
//         </linearGradient>
//       </defs>

//       {/* cap */}
//       <rect x="82" y="10" width="36" height="26" rx="6" fill="url(#bottleCap)" />
//       {/* neck */}
//       <path d="M88 36 L88 66 Q88 76 78 80 L122 80 Q112 76 112 66 L112 36 Z" fill="url(#bottleBody)" />
//       {/* body */}
//       <path
//         d="M78 80 
//            Q40 100 34 150 
//            L34 340 
//            Q34 366 60 366 
//            L140 366 
//            Q166 366 166 340 
//            L166 150 
//            Q160 100 122 80 
//            Z"
//         fill="url(#bottleBody)"
//       />
//       {/* body highlight */}
//       <path d="M52 130 Q46 200 48 320" stroke="white" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" fill="none" />

//       {/* label */}
//       <rect x="42" y="180" width="116" height="100" rx="14" fill="url(#labelGrad)" opacity="0.95" />
//       <text x="100" y="222" textAnchor="middle" fontSize="20" fontWeight="700" fill="#16A34A" fontFamily="Poppins, sans-serif">
//         Quenchly
//       </text>
//       <text x="100" y="244" textAnchor="middle" fontSize="11" letterSpacing="2" fill="#F59E0B" fontFamily="Poppins, sans-serif">
//         ORANGE DELIGHT
//       </text>
//       <text x="100" y="264" textAnchor="middle" fontSize="9" fill="#1F2937" opacity="0.5" fontFamily="Poppins, sans-serif">
//         100% JUICE · NO ADDED SUGAR
//       </text>
//     </svg>
//   );
// }

// function OrangeSliceSVG() {
//   return (
//     <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
//       <circle cx="50" cy="50" r="46" fill="#FDBA74" />
//       <circle cx="50" cy="50" r="38" fill="#FB923C" />
//       <circle cx="50" cy="50" r="30" fill="#FFEDD5" />
//       {[...Array(8)].map((_, i) => (
//         <path
//           key={i}
//           d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
//           fill="#FED7AA"
//           stroke="#FB923C"
//           strokeWidth="1"
//           transform={`rotate(${i * 45} 50 50)`}
//         />
//       ))}
//     </svg>
//   );
// }

// function LimeSliceSVG() {
//   return (
//     <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
//       <circle cx="50" cy="50" r="46" fill="#BEF264" />
//       <circle cx="50" cy="50" r="38" fill="#84CC16" />
//       <circle cx="50" cy="50" r="30" fill="#ECFCCB" />
//       {[...Array(8)].map((_, i) => (
//         <path
//           key={i}
//           d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
//           fill="#D9F99D"
//           stroke="#84CC16"
//           strokeWidth="1"
//           transform={`rotate(${i * 45} 50 50)`}
//         />
//       ))}
//     </svg>
//   );
// }

// function IceCubeSVG() {
//   return (
//     <svg viewBox="0 0 80 80" className="w-full h-auto drop-shadow-lg">
//       <defs>
//         <linearGradient id="iceGrad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
//           <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
//         </linearGradient>
//       </defs>
//       <rect x="8" y="8" width="64" height="64" rx="12" fill="url(#iceGrad)" stroke="#7DD3FC" strokeWidth="2" />
//       <line x1="20" y1="20" x2="34" y2="34" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
//     </svg>
//   );
// }












// import { motion } from "framer-motion";
// import { ArrowRight, Compass, Leaf, Truck, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";

// const trustBadges = [
//   { icon: Leaf, label: "100% Natural" },
//   { icon: Truck, label: "Fast Delivery" },
//   { icon: ShieldCheck, label: "Secure Payment" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-bg to-secondary-50">
//       {/* ambient gradient blobs */}
//       <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl" />
//       <div className="pointer-events-none absolute top-7 -right-20 w-[19rem] h-[19rem] rounded-full bg-secondary-200/40 blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-9 sm:py-14 lg:py-12">
//         <div className="grid lg:grid-cols-2 gap-6 lg:gap-5 items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-100 px-2.5 py-1 rounded-full mb-3">
//               <Leaf size={9} /> Fresh &amp; Natural
//             </span>

//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.08] text-ink">
//               Sip something
//               <br />
//               <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                 real
//               </span>
//               , every time.
//             </h1>

//             <p className="mt-3 text-sm sm:text-base text-ink/60 max-w-sm mx-auto lg:mx-0">
//               From cold-pressed juices to energizing brews — discover
//               beverages made to refresh, recharge, and delight, delivered
//               straight to your door.
//             </p>

//             <div className="mt-5 flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
//               <Link to="/shop">
//                 <motion.span
//                   whileHover={{ scale: 1.03, y: -2 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="relative inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift overflow-hidden isolate"
//                 >
//                   <span className="relative z-10 flex items-center gap-1.5 text-sm">
//                     Shop Now <ArrowRight size={12} />
//                   </span>
//                   <motion.span
//                     className="absolute inset-0 bg-primary-600 -z-0"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.span>
//               </Link>

//               <Link to="/shop">
//                 <motion.span
//                   whileHover={{ scale: 1.03, y: -2 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl3 bg-white text-ink font-semibold border border-primary-200 shadow-softer hover:border-primary-400 transition-colors text-sm"
//                 >
//                   <Compass size={12} className="text-primary-600" />
//                   Explore Drinks
//                 </motion.span>
//               </Link>
//             </div>

//             {/* Trust badges */}
//             <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
//               {trustBadges.map(({ icon: Icon, label }) => (
//                 <div key={label} className="flex items-center gap-1.5 text-xs text-ink/60">
//                   <span className="grid place-items-center w-6 h-6 rounded-xl2 bg-white shadow-softer text-primary-600">
//                     <Icon size={10} />
//                   </span>
//                   <span className="font-medium">{label}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//             className="relative h-[228px] sm:h-[280px] lg:h-[348px] flex items-center justify-center"
//           >
//             {/* soft radial platform */}
//             <div className="absolute bottom-4 w-36 h-7 rounded-full bg-primary-900/10 blur-xl" />

//             {/* Floating bottle */}
//             <motion.div
//               animate={{ y: [0, -16, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10 w-28 sm:w-36 lg:w-40 drop-shadow-2xl"
//             >
//               <BottleSVG />
//             </motion.div>

//             {/* Floating orange slice */}
//             <motion.div
//               animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
//               transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//               className="absolute top-4 left-1 sm:left-4 w-10 sm:w-14"
//             >
//               <OrangeSliceSVG />
//             </motion.div>

//             {/* Floating lime slice */}
//             <motion.div
//               animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
//               transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//               className="absolute bottom-11 right-0 sm:right-3 w-9 sm:w-10"
//             >
//               <LimeSliceSVG />
//             </motion.div>

//             {/* Ice cubes */}
//             <motion.div
//               animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
//               transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//               className="absolute top-10 right-1 sm:right-5 w-7 sm:w-8"
//             >
//               <IceCubeSVG />
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
//               transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
//               className="absolute bottom-16 left-0 sm:left-3 w-5 sm:w-7"
//             >
//               <IceCubeSVG />
//             </motion.div>

//             {/* Splash droplets */}
//             <motion.div
//               animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
//               transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-sky-200/70"
//             />
//             <motion.div
//               animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-sky-200/70"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BottleSVG() {
//   return (
//     <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//       <defs>
//         <linearGradient id="bottleBody" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#F59E0B" />
//           <stop offset="100%" stopColor="#EA7C0A" />
//         </linearGradient>
//         <linearGradient id="bottleCap" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#16A34A" />
//           <stop offset="100%" stopColor="#128040" />
//         </linearGradient>
//         <linearGradient id="labelGrad" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#FFFDF8" />
//           <stop offset="100%" stopColor="#FFF7E8" />
//         </linearGradient>
//       </defs>

//       {/* cap */}
//       <rect x="82" y="10" width="36" height="26" rx="6" fill="url(#bottleCap)" />
//       {/* neck */}
//       <path d="M88 36 L88 66 Q88 76 78 80 L122 80 Q112 76 112 66 L112 36 Z" fill="url(#bottleBody)" />
//       {/* body */}
//       <path
//         d="M78 80 
//            Q40 100 34 150 
//            L34 340 
//            Q34 366 60 366 
//            L140 366 
//            Q166 366 166 340 
//            L166 150 
//            Q160 100 122 80 
//            Z"
//         fill="url(#bottleBody)"
//       />
//       {/* body highlight */}
//       <path d="M52 130 Q46 200 48 320" stroke="white" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" fill="none" />

//       {/* label */}
//       <rect x="42" y="180" width="116" height="100" rx="14" fill="url(#labelGrad)" opacity="0.95" />
//       <text x="100" y="222" textAnchor="middle" fontSize="18" fontWeight="700" fill="#16A34A" fontFamily="Poppins, sans-serif">
//         Quenchly
//       </text>
//       <text x="100" y="244" textAnchor="middle" fontSize="9" letterSpacing="2" fill="#F59E0B" fontFamily="Poppins, sans-serif">
//         ORANGE DELIGHT
//       </text>
//       <text x="100" y="264" textAnchor="middle" fontSize="7" fill="#1F2937" opacity="0.5" fontFamily="Poppins, sans-serif">
//         100% JUICE · NO ADDED SUGAR
//       </text>
//     </svg>
//   );
// }

// function OrangeSliceSVG() {
//   return (
//     <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
//       <circle cx="50" cy="50" r="46" fill="#FDBA74" />
//       <circle cx="50" cy="50" r="38" fill="#FB923C" />
//       <circle cx="50" cy="50" r="30" fill="#FFEDD5" />
//       {[...Array(8)].map((_, i) => (
//         <path
//           key={i}
//           d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
//           fill="#FED7AA"
//           stroke="#FB923C"
//           strokeWidth="1"
//           transform={`rotate(${i * 45} 50 50)`}
//         />
//       ))}
//     </svg>
//   );
// }

// function LimeSliceSVG() {
//   return (
//     <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
//       <circle cx="50" cy="50" r="46" fill="#BEF264" />
//       <circle cx="50" cy="50" r="38" fill="#84CC16" />
//       <circle cx="50" cy="50" r="30" fill="#ECFCCB" />
//       {[...Array(8)].map((_, i) => (
//         <path
//           key={i}
//           d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
//           fill="#D9F99D"
//           stroke="#84CC16"
//           strokeWidth="1"
//           transform={`rotate(${i * 45} 50 50)`}
//         />
//       ))}
//     </svg>
//   );
// }

// function IceCubeSVG() {
//   return (
//     <svg viewBox="0 0 80 80" className="w-full h-auto drop-shadow-lg">
//       <defs>
//         <linearGradient id="iceGrad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
//           <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
//         </linearGradient>
//       </defs>
//       <rect x="8" y="8" width="64" height="64" rx="12" fill="url(#iceGrad)" stroke="#7DD3FC" strokeWidth="2" />
//       <line x1="20" y1="20" x2="34" y2="34" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
//     </svg>
//   );
// }










import { motion } from "framer-motion";
import { ArrowRight, Compass, Leaf, Truck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
 
const trustBadges = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "Secure Payment" },
];
 
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-bg to-secondary-50">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-14 -left-14 w-56 h-56 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-6 -right-16 w-[17rem] h-[17rem] rounded-full bg-secondary-200/40 blur-3xl" />
 
      <div className="relative max-w-7xl mx-auto px-2.5 sm:px-3.5 lg:px-5 py-8 sm:py-12 lg:py-11">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-4 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-wide uppercase text-primary-700 bg-primary-100 px-2 py-1 rounded-full mb-2.5">
              <Leaf size={8} /> Fresh &amp; Natural
            </span>
 
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.08] text-ink">
              Sip something
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                real
              </span>
              , every time.
            </h1>
 
            <p className="mt-2.5 text-xs sm:text-sm text-ink/60 max-w-xs mx-auto lg:mx-0">
              From cold-pressed juices to energizing brews  discover
              beverages made to refresh, recharge, and delight, delivered
              straight to your door.
            </p>
 
            <div className="mt-4 flex flex-col sm:flex-row gap-1.5 justify-center lg:justify-start">
              <Link to="/shop">
                <motion.span
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl3 bg-primary-500 text-white font-semibold shadow-lift overflow-hidden isolate"
                >
                  <span className="relative z-10 flex items-center gap-1.5 text-xs">
                    Shop Now <ArrowRight size={11} />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-primary-600 -z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
 
              <Link to="/shop">
                <motion.span
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl3 bg-white text-ink font-semibold border border-primary-200 shadow-softer hover:border-primary-400 transition-colors text-xs"
                >
                  <Compass size={11} className="text-primary-600" />
                  Explore Drinks
                </motion.span>
              </Link>
            </div>
 
            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[11px] text-ink/60">
                  <span className="grid place-items-center w-5 h-5 rounded-xl2 bg-white shadow-softer text-primary-600">
                    <Icon size={9} />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
 
          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative h-[205px] sm:h-[252px] lg:h-[313px] flex items-center justify-center"
          >
            {/* soft radial platform */}
            <div className="absolute bottom-3.5 w-32 h-6 rounded-full bg-primary-900/10 blur-xl" />
 
            {/* Floating bottle */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-24 sm:w-32 lg:w-36 drop-shadow-2xl"
            >
              <BottleSVG />
            </motion.div>
 
            {/* Floating orange slice */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-3.5 left-1 sm:left-3.5 w-9 sm:w-12"
            >
              <OrangeSliceSVG />
            </motion.div>
 
            {/* Floating lime slice */}
            <motion.div
              animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-10 right-0 sm:right-2.5 w-8 sm:w-9"
            >
              <LimeSliceSVG />
            </motion.div>
 
            {/* Ice cubes */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-9 right-1 sm:right-4 w-6 sm:w-7"
            >
              <IceCubeSVG />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute bottom-14 left-0 sm:left-2.5 w-5 sm:w-6"
            >
              <IceCubeSVG />
            </motion.div>
 
            {/* Splash droplets */}
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-sky-200/70"
            />
            <motion.div
              animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-sky-200/70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 
function BottleSVG() {
  return (
    <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="bottleBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA7C0A" />
        </linearGradient>
        <linearGradient id="bottleCap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#128040" />
        </linearGradient>
        <linearGradient id="labelGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#FFF7E8" />
        </linearGradient>
      </defs>
 
      {/* cap */}
      <rect x="82" y="10" width="36" height="26" rx="6" fill="url(#bottleCap)" />
      {/* neck */}
      <path d="M88 36 L88 66 Q88 76 78 80 L122 80 Q112 76 112 66 L112 36 Z" fill="url(#bottleBody)" />
      {/* body */}
      <path
        d="M78 80 
           Q40 100 34 150 
           L34 340 
           Q34 366 60 366 
           L140 366 
           Q166 366 166 340 
           L166 150 
           Q160 100 122 80 
           Z"
        fill="url(#bottleBody)"
      />
      {/* body highlight */}
      <path d="M52 130 Q46 200 48 320" stroke="white" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" fill="none" />
 
      {/* label */}
      <rect x="42" y="180" width="116" height="100" rx="14" fill="url(#labelGrad)" opacity="0.95" />
      <text x="100" y="222" textAnchor="middle" fontSize="18" fontWeight="700" fill="#16A34A" fontFamily="Poppins, sans-serif">
        Quenchly
      </text>
      <text x="100" y="244" textAnchor="middle" fontSize="9" letterSpacing="2" fill="#F59E0B" fontFamily="Poppins, sans-serif">
        ORANGE DELIGHT
      </text>
      <text x="100" y="264" textAnchor="middle" fontSize="7" fill="#1F2937" opacity="0.5" fontFamily="Poppins, sans-serif">
        100% JUICE · NO ADDED SUGAR
      </text>
    </svg>
  );
}
 
function OrangeSliceSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
      <circle cx="50" cy="50" r="46" fill="#FDBA74" />
      <circle cx="50" cy="50" r="38" fill="#FB923C" />
      <circle cx="50" cy="50" r="30" fill="#FFEDD5" />
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
          fill="#FED7AA"
          stroke="#FB923C"
          strokeWidth="1"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}
 
function LimeSliceSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-xl">
      <circle cx="50" cy="50" r="46" fill="#BEF264" />
      <circle cx="50" cy="50" r="38" fill="#84CC16" />
      <circle cx="50" cy="50" r="30" fill="#ECFCCB" />
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d="M50 50 L50 20 A30 30 0 0 1 65.9 25.4 Z"
          fill="#D9F99D"
          stroke="#84CC16"
          strokeWidth="1"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}
 
function IceCubeSVG() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-auto drop-shadow-lg">
      <defs>
        <linearGradient id="iceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="64" height="64" rx="12" fill="url(#iceGrad)" stroke="#7DD3FC" strokeWidth="2" />
      <line x1="20" y1="20" x2="34" y2="34" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
 