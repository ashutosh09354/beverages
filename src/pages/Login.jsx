// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   Droplet,
//   Globe,
//   Apple,
//   MessageCircle,
// } from "lucide-react";

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/profile");
//     }, 700);
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-4 py-12 overflow-hidden">
//       {/* ambient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-bg to-secondary-50" />
//       <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-secondary-200/40 blur-3xl" />

//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/60 rounded-xl5 shadow-lift p-7 sm:p-9"
//       >
//         <div className="flex flex-col items-center text-center mb-7">
//           <span className="grid place-items-center w-12 h-12 rounded-xl2 bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lift mb-4">
//             <Droplet size={22} fill="white" strokeWidth={0} />
//           </span>
//           <h1 className="text-2xl font-bold text-ink">Welcome back</h1>
//           <p className="text-ink/50 text-sm mt-1">Log in to continue to Quenchly</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="text-xs font-medium text-ink/50 mb-1.5 block">
//               Email
//             </label>
//             <div className="relative">
//               <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/35" />
//               <input
//                 type="email"
//                 required
//                 value={form.email}
//                 onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-3 rounded-xl3 bg-white/80 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-xs font-medium text-ink/50 mb-1.5 block">
//               Password
//             </label>
//             <div className="relative">
//               <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/35" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 value={form.password}
//                 onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
//                 placeholder="••••••••"
//                 className="w-full pl-10 pr-11 py-3 rounded-xl3 bg-white/80 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((v) => !v)}
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/35 hover:text-ink/60"
//                 aria-label="Toggle password visibility"
//               >
//                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2 text-ink/60 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={remember}
//                 onChange={(e) => setRemember(e.target.checked)}
//                 className="w-4 h-4 rounded accent-primary-500"
//               />
//               Remember me
//             </label>
//             <Link to="/" className="text-primary-700 font-medium hover:text-primary-800">
//               Forgot Password?
//             </Link>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors"
//           >
//             {loading ? "Logging in..." : "Login"}
//             {!loading && <ArrowRight size={16} />}
//           </motion.button>
//         </form>

//         <div className="flex items-center gap-3 my-6">
//           <div className="flex-1 h-px bg-primary-100" />
//           <span className="text-xs text-ink/40">or continue with</span>
//           <div className="flex-1 h-px bg-primary-100" />
//         </div>

//         <div className="grid grid-cols-3 gap-3">
//           {[
//             { icon: Globe, label: "Google" },
//             { icon: Apple, label: "Apple" },
//             { icon: MessageCircle, label: "Facebook" },
//           ].map(({ icon: Icon, label }) => (
//             <motion.button
//               key={label}
//               type="button"
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.96 }}
//               aria-label={`Continue with ${label}`}
//               className="grid place-items-center py-3 rounded-xl3 bg-white border border-primary-100 text-ink/60 shadow-softer hover:shadow-soft transition-shadow"
//             >
//               <Icon size={18} />
//             </motion.button>
//           ))}
//         </div>

//         <p className="text-center text-sm text-ink/50 mt-7">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-primary-700 font-semibold hover:text-primary-800">
//             Sign up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }












import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Droplet,
  Globe,
  Apple,
  MessageCircle,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/profile");
    }, 700);
  };

  return (
    <div className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-2 py-6 overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-bg to-secondary-50" />
      <div className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 rounded-full bg-primary-200/40 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 -right-12 w-48 h-48 rounded-full bg-secondary-200/40 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[13rem] sm:max-w-xs bg-white/70 backdrop-blur-xl border border-white/60 rounded-xl2 shadow-lift p-3.5 sm:p-4.5"
      >
        <div className="flex flex-col items-center text-center mb-3.5">
          <span className="grid place-items-center w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lift mb-2">
            <Droplet size={11} fill="white" strokeWidth={0} />
          </span>
          <h1 className="text-base font-bold text-ink">Welcome back</h1>
          <p className="text-ink/50 text-[11px] mt-0.5">Log in to continue to Quenchly</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="text-[10px] font-medium text-ink/50 mb-0.5 block">
              Email
            </label>
            <div className="relative">
              <Mail size={9} className="absolute left-2 top-1/2 -translate-y-1/2 text-ink/35" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full pl-5 pr-2 py-1.5 rounded-lg bg-white/80 border border-primary-100 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-medium text-ink/50 mb-0.5 block">
              Password
            </label>
            <div className="relative">
              <Lock size={9} className="absolute left-2 top-1/2 -translate-y-1/2 text-ink/35" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                placeholder="••••••••"
                className="w-full pl-5 pr-6 py-1.5 rounded-lg bg-white/80 border border-primary-100 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-ink/35 hover:text-ink/60"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={9} /> : <Eye size={9} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <label className="flex items-center gap-1 text-ink/60 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-2.5 h-2.5 rounded accent-primary-500"
              />
              Remember me
            </label>
            <Link to="/" className="text-primary-700 font-medium hover:text-primary-800">
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-lg py-[0.4375rem] text-[11px] shadow-lift transition-colors"
          >
            {loading ? "Logging in..." : "Login"}
            {!loading && <ArrowRight size={9} />}
          </motion.button>
        </form>

        <div className="flex items-center gap-1.5 my-3">
          <div className="flex-1 h-px bg-primary-100" />
          <span className="text-[9px] text-ink/40">or continue with</span>
          <div className="flex-1 h-px bg-primary-100" />
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: Globe, label: "Google" },
            { icon: Apple, label: "Apple" },
            { icon: MessageCircle, label: "Facebook" },
          ].map(({ icon: Icon, label }) => (
            <motion.button
              key={label}
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              aria-label={`Continue with ${label}`}
              className="grid place-items-center py-1.5 rounded-lg bg-white border border-primary-100 text-ink/60 shadow-softer hover:shadow-soft transition-shadow"
            >
              <Icon size={9} />
            </motion.button>
          ))}
        </div>

        <p className="text-center text-[11px] text-ink/50 mt-3.5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary-700 font-semibold hover:text-primary-800">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}