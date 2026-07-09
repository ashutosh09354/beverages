// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   Droplet,
//   CheckCircle2,
// } from "lucide-react";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const updateField = (key) => (e) =>
//     setForm((f) => ({ ...f, [key]: e.target.value }));

//   const passwordsMatch =
//     form.confirmPassword.length === 0 || form.password === form.confirmPassword;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/profile");
//     }, 700);
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-4 py-12 overflow-hidden">
//       {/* ambient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-bg to-primary-50" />
//       <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-200/40 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl" />

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
//           <h1 className="text-2xl font-bold text-ink">Create your account</h1>
//           <p className="text-ink/50 text-sm mt-1">
//             Join Quenchly for fresh drinks, delivered fast
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <FieldWithIcon
//             icon={User}
//             type="text"
//             label="Full Name"
//             placeholder="Aarav Mehta"
//             value={form.name}
//             onChange={updateField("name")}
//             required
//           />
//           <FieldWithIcon
//             icon={Mail}
//             type="email"
//             label="Email"
//             placeholder="you@example.com"
//             value={form.email}
//             onChange={updateField("email")}
//             required
//           />
//           <FieldWithIcon
//             icon={Phone}
//             type="tel"
//             label="Phone"
//             placeholder="+91 98765 43210"
//             value={form.phone}
//             onChange={updateField("phone")}
//             required
//           />

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
//                 onChange={updateField("password")}
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

//           <div>
//             <label className="text-xs font-medium text-ink/50 mb-1.5 block">
//               Confirm Password
//             </label>
//             <div className="relative">
//               <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/35" />
//               <input
//                 type={showConfirm ? "text" : "password"}
//                 required
//                 value={form.confirmPassword}
//                 onChange={updateField("confirmPassword")}
//                 placeholder="••••••••"
//                 className={`w-full pl-10 pr-11 py-3 rounded-xl3 bg-white/80 border text-sm focus:outline-none focus:ring-4 transition-all ${
//                   passwordsMatch
//                     ? "border-primary-100 focus:ring-primary-500/15 focus:border-primary-400"
//                     : "border-red-300 focus:ring-red-500/15 focus:border-red-400"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirm((v) => !v)}
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/35 hover:text-ink/60"
//                 aria-label="Toggle password visibility"
//               >
//                 {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//             {form.confirmPassword && passwordsMatch && (
//               <p className="flex items-center gap-1 text-xs text-primary-600 mt-1.5">
//                 <CheckCircle2 size={12} /> Passwords match
//               </p>
//             )}
//             {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-xl3 py-3.5 shadow-lift transition-colors mt-2"
//           >
//             {loading ? "Creating Account..." : "Create Account"}
//             {!loading && <ArrowRight size={16} />}
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-ink/50 mt-7">
//           Already have an account?{" "}
//           <Link to="/login" className="text-primary-700 font-semibold hover:text-primary-800">
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// function FieldWithIcon({ icon: Icon, label, ...props }) {
//   return (
//     <div>
//       <label className="text-xs font-medium text-ink/50 mb-1.5 block">{label}</label>
//       <div className="relative">
//         <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/35" />
//         <input
//           {...props}
//           className="w-full pl-10 pr-4 py-3 rounded-xl3 bg-white/80 border border-primary-100 text-sm focus:outline-none focus:ring-4 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
//         />
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Droplet,
  CheckCircle2,
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const passwordsMatch =
    form.confirmPassword.length === 0 || form.password === form.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/profile");
    }, 700);
  };

  return (
    <div className="relative min-h-[calc(100vh-140px)] flex items-center justify-center px-2 py-6 overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-bg to-primary-50" />
      <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-secondary-200/40 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 -left-12 w-48 h-48 rounded-full bg-primary-200/40 blur-2xl" />

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
          <h1 className="text-base font-bold text-ink">Create your account</h1>
          <p className="text-ink/50 text-[11px] mt-0.5">
            Join Quenchly for fresh drinks, delivered fast
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <FieldWithIcon
            icon={User}
            type="text"
            label="Full Name"
            placeholder="Aarav Mehta"
            value={form.name}
            onChange={updateField("name")}
            required
          />
          <FieldWithIcon
            icon={Mail}
            type="email"
            label="Email"
            placeholder="you@example.com"
            value={form.email}
            onChange={updateField("email")}
            required
          />
          <FieldWithIcon
            icon={Phone}
            type="tel"
            label="Phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={updateField("phone")}
            required
          />

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
                onChange={updateField("password")}
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

          <div>
            <label className="text-[10px] font-medium text-ink/50 mb-0.5 block">
              Confirm Password
            </label>
            <div className="relative">
              <Lock size={9} className="absolute left-2 top-1/2 -translate-y-1/2 text-ink/35" />
              <input
                type={showConfirm ? "text" : "password"}
                required
                value={form.confirmPassword}
                onChange={updateField("confirmPassword")}
                placeholder="••••••••"
                className={`w-full pl-5 pr-6 py-1.5 rounded-lg bg-white/80 border text-[11px] focus:outline-none focus:ring-2 transition-all ${
                  passwordsMatch
                    ? "border-primary-100 focus:ring-primary-500/15 focus:border-primary-400"
                    : "border-red-300 focus:ring-red-500/15 focus:border-red-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-ink/35 hover:text-ink/60"
                aria-label="Toggle password visibility"
              >
                {showConfirm ? <EyeOff size={9} /> : <Eye size={9} />}
              </button>
            </div>
            {form.confirmPassword && passwordsMatch && (
              <p className="flex items-center gap-0.5 text-[10px] text-primary-600 mt-[0.1875rem]">
                <CheckCircle2 size={7} /> Passwords match
              </p>
            )}
            {error && <p className="text-[10px] text-red-500 mt-[0.1875rem]">{error}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-semibold rounded-lg py-[0.4375rem] text-[11px] shadow-lift transition-colors mt-1"
          >
            {loading ? "Creating Account..." : "Create Account"}
            {!loading && <ArrowRight size={9} />}
          </motion.button>
        </form>

        <p className="text-center text-[11px] text-ink/50 mt-3.5">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-700 font-semibold hover:text-primary-800">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function FieldWithIcon({ icon: Icon, label, ...props }) {
  return (
    <div>
      <label className="text-[10px] font-medium text-ink/50 mb-0.5 block">{label}</label>
      <div className="relative">
        <Icon size={9} className="absolute left-2 top-1/2 -translate-y-1/2 text-ink/35" />
        <input
          {...props}
          className="w-full pl-5 pr-2 py-1.5 rounded-lg bg-white/80 border border-primary-100 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary-500/15 focus:border-primary-400 transition-all"
        />
      </div>
    </div>
  );
}