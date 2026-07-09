// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Send, CheckCircle2 } from "lucide-react";

// export default function Newsletter() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;
//     setSubmitted(true);
//     setEmail("");
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.55 }}
//         className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 px-6 sm:px-14 py-12 sm:py-16 text-center"
//       >
//         {/* ambient blobs */}
//         <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-black/10 blur-3xl" />

//         <motion.span
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//           className="relative z-10 inline-grid place-items-center w-14 h-14 rounded-xl3 bg-white/20 backdrop-blur-sm text-white mb-5"
//         >
//           <Mail size={24} />
//         </motion.span>

//         <h2 className="relative z-10 text-2xl sm:text-4xl font-bold text-white leading-tight">
//           Get 10% off your first order
//         </h2>
//         <p className="relative z-10 text-white/85 text-sm sm:text-base mt-3 max-w-md mx-auto">
//           Subscribe to our newsletter for fresh drops, exclusive offers, and
//           refreshing recipes.
//         </p>

//         <div className="relative z-10 mt-7 max-w-md mx-auto">
//           <AnimatePresence mode="wait">
//             {submitted ? (
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -8 }}
//                 className="flex items-center justify-center gap-2 bg-white/95 text-primary-700 font-semibold rounded-xl3 px-5 py-3.5"
//               >
//                 <CheckCircle2 size={18} />
//                 You're subscribed! Check your inbox soon.
//               </motion.div>
//             ) : (
//               <motion.form
//                 key="form"
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -8 }}
//                 onSubmit={handleSubmit}
//                 className="flex flex-col sm:flex-row gap-2.5"
//               >
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="flex-1 px-5 py-3.5 rounded-xl3 bg-white/95 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:ring-4 focus:ring-white/30 shadow-softer"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="submit"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl3 bg-ink text-white font-semibold text-sm shadow-lift shrink-0"
//                 >
//                   Subscribe <Send size={15} />
//                 </motion.button>
//               </motion.form>
//             )}
//           </AnimatePresence>
//         </div>

//         <p className="relative z-10 text-white/60 text-xs mt-4">
//           No spam, unsubscribe anytime.
//         </p>
//       </motion.div>
//     </section>
//   );
// }









import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-xl5 bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 px-4 sm:px-9 py-8 sm:py-10 text-center"
      >
        {/* ambient blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 w-48 h-48 rounded-full bg-black/10 blur-3xl" />

        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 inline-grid place-items-center w-9 h-9 rounded-xl3 bg-white/20 backdrop-blur-sm text-white mb-3"
        >
          <Mail size={16} />
        </motion.span>

        <h2 className="relative z-10 text-xl sm:text-2xl font-bold text-white leading-tight">
          Get 10% off your first order
        </h2>
        <p className="relative z-10 text-white/85 text-xs sm:text-sm mt-2 max-w-md mx-auto">
          Subscribe to our newsletter for fresh drops, exclusive offers, and
          refreshing recipes.
        </p>

        <div className="relative z-10 mt-5 max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center justify-center gap-2 bg-white/95 text-primary-700 font-semibold rounded-xl3 px-3 py-2"
              >
                <CheckCircle2 size={12} />
                You're subscribed! Check your inbox soon.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 rounded-xl3 bg-white/95 text-ink placeholder:text-ink/40 text-xs focus:outline-none focus:ring-4 focus:ring-white/30 shadow-softer"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl3 bg-ink text-white font-semibold text-xs shadow-lift shrink-0"
                >
                  Subscribe <Send size={10} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="relative z-10 text-white/60 text-[10px] mt-3">
          No spam, unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}