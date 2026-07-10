// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AppProvider } from "./context/AppContext";
// import Navbar from "./components/Navbar";
// import CategoryBar from "./components/CategoryBar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import Orders from "./pages/Orders";
// import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <AppProvider>
//       <BrowserRouter>
//         <div className="min-h-screen bg-bg font-sans">
//           <Navbar />
//           <CategoryBar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </AppProvider>
//   );
// }






import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-bg font-sans">
          <Navbar />
          <CategoryBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
