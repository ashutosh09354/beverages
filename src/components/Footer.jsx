// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Droplet,
//   MessageCircle,
//   Camera,
//   AtSign,
//   PlayCircle,
//   Send,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";
// import { categories } from "../data/categories";

// const quickLinks = [
//   { label: "About Us", to: "/" },
//   { label: "Shop", to: "/shop" },
//   { label: "Track Order", to: "/orders" },
//   { label: "My Account", to: "/profile" },
//   { label: "Wishlist", to: "/profile?tab=wishlist" },
// ];

// const supportLinks = [
//   { label: "Help Center", to: "/" },
//   { label: "Shipping Info", to: "/" },
//   { label: "Returns & Refunds", to: "/" },
//   { label: "Terms of Service", to: "/" },
//   { label: "Privacy Policy", to: "/" },
// ];

// const socials = [
//   { icon: MessageCircle, label: "Facebook" },
//   { icon: Camera, label: "Instagram" },
//   { icon: AtSign, label: "Twitter" },
//   { icon: PlayCircle, label: "YouTube" },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;
//     setSubscribed(true);
//     setEmail("");
//     setTimeout(() => setSubscribed(false), 3500);
//   };

//   return (
//     <footer className="bg-ink text-white/80 mt-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
//           {/* Logo + About */}
//           <div className="lg:col-span-2">
//             <Link to="/" className="flex items-center gap-2 mb-4">
//               <span className="grid place-items-center w-9 h-9 rounded-xl2 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
//                 <Droplet size={17} fill="white" strokeWidth={0} />
//               </span>
//               <span className="text-xl font-bold text-white">
//                 Quench<span className="text-primary-400">ly</span>
//               </span>
//             </Link>
//             <p className="text-sm text-white/55 leading-relaxed max-w-sm">
//               Premium, fresh beverages delivered to your door in minutes.
//               From juices to energy drinks, we've got every sip covered.
//             </p>
//             <div className="mt-5 space-y-2 text-sm text-white/55">
//               <div className="flex items-center gap-2">
//                 <MapPin size={15} className="text-primary-400 shrink-0" />
//                 Gurugram, Haryana, India
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone size={15} className="text-primary-400 shrink-0" />
//                 +91 98765 43210
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail size={15} className="text-primary-400 shrink-0" />
//                 hello@quenchly.com
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
//             <ul className="space-y-2.5">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     to={link.to}
//                     className="text-sm text-white/55 hover:text-primary-400 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4">Categories</h4>
//             <ul className="space-y-2.5">
//               {categories.slice(0, 5).map((cat) => (
//                 <li key={cat.id}>
//                   <Link
//                     to={`/shop?category=${cat.id}`}
//                     className="text-sm text-white/55 hover:text-primary-400 transition-colors"
//                   >
//                     {cat.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Customer Support */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4">Customer Support</h4>
//             <ul className="space-y-2.5">
//               {supportLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     to={link.to}
//                     className="text-sm text-white/55 hover:text-primary-400 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter mini-strip */}
//         <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
//           <div>
//             <h4 className="text-sm font-semibold text-white">Stay in the loop</h4>
//             <p className="text-xs text-white/50 mt-1">
//               New drinks, offers and recipes — straight to your inbox.
//             </p>
//           </div>

//           {subscribed ? (
//             <span className="text-sm font-medium text-primary-400">
//               Subscribed! 🎉
//             </span>
//           ) : (
//             <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 className="flex-1 md:w-64 px-4 py-2.5 rounded-xl2 bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 type="submit"
//                 className="grid place-items-center w-10 h-10 rounded-xl2 bg-primary-500 text-white shrink-0"
//                 aria-label="Subscribe"
//               >
//                 <Send size={15} />
//               </motion.button>
//             </form>
//           )}
//         </div>

//         {/* Socials + Copyright */}
//         <div className="mt-8 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-white/40 text-center sm:text-left">
//             © {new Date().getFullYear()} Quenchly. All rights reserved.
//           </p>
//           <div className="flex items-center gap-2.5">
//             {socials.map(({ icon: Icon, label }) => (
//               <motion.a
//                 key={label}
//                 href="#"
//                 whileHover={{ y: -3, scale: 1.08 }}
//                 aria-label={label}
//                 className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 text-white/70 hover:text-white transition-colors"
//               >
//                 <Icon size={15} />
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }











import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplet,
  MessageCircle,
  Camera,
  AtSign,
  PlayCircle,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { categories } from "../data/categories";

const quickLinks = [
  { label: "About Us", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Track Order", to: "/orders" },
  { label: "My Account", to: "/profile" },
  { label: "Wishlist", to: "/profile?tab=wishlist" },
];

const supportLinks = [
  { label: "Help Center", to: "/" },
  { label: "Shipping Info", to: "/" },
  { label: "Returns & Refunds", to: "/" },
  { label: "Terms of Service", to: "/" },
  { label: "Privacy Policy", to: "/" },
];

const socials = [
  { icon: MessageCircle, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: AtSign, label: "Twitter" },
  { icon: PlayCircle, label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="bg-ink text-white/80 mt-5">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-9 sm:pt-11 pb-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-5">
          {/* Logo + About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 mb-3">
              <span className="grid place-items-center w-6 h-6 rounded-xl2 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <Droplet size={11} fill="white" strokeWidth={0} />
              </span>
              <span className="text-base font-bold text-white">
                Quench<span className="text-primary-400">ly</span>
              </span>
            </Link>
            <p className="text-xs text-white/55 leading-relaxed max-w-sm">
              Premium, fresh beverages delivered to your door in minutes.
              From juices to energy drinks, we've got every sip covered.
            </p>
            <div className="mt-3 space-y-1.5 text-xs text-white/55">
              <div className="flex items-center gap-1.5">
                <MapPin size={10} className="text-primary-400 shrink-0" />
                Gurugram, Haryana, India
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={10} className="text-primary-400 shrink-0" />
                +91 98765 xxxxx
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={10} className="text-primary-400 shrink-0" />
                hello@quenchly.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-white/55 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-3">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.id}`}
                    className="text-xs text-white/55 hover:text-primary-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-3">Customer Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-white/55 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter mini-strip */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <h4 className="text-xs font-semibold text-white">Stay in the loop</h4>
            <p className="text-[10px] text-white/50 mt-1">
              New drinks, offers and recipes — straight to your inbox.
            </p>
          </div>

          {subscribed ? (
            <span className="text-xs font-medium text-primary-400">
              Subscribed! 🎉
            </span>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-1.5 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 md:w-44 px-3 py-2 rounded-xl2 bg-white/10 border border-white/10 text-xs text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="grid place-items-center w-7 h-7 rounded-xl2 bg-primary-500 text-white shrink-0"
                aria-label="Subscribe"
              >
                <Send size={10} />
              </motion.button>
            </form>
          )}
        </div>

        {/* Socials + Copyright */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Quenchly. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ y: -3, scale: 1.08 }}
                aria-label={label}
                className="grid place-items-center w-6 h-6 rounded-full bg-white/10 hover:bg-primary-500 text-white/70 hover:text-white transition-colors"
              >
                <Icon size={10} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}