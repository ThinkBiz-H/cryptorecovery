// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Pricing from "./pages/Pricing";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import TermsConditions from "./pages/TermsConditions";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import WalletPage from "./pages/WalletPage";
// function App() {
//   return (
//     <div className="bg-[#f5f5f5] overflow-hidden">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/pricing" element={<Pricing />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/blog" element={<Blog />} />

//         <Route path="/testimonials" element={<Testimonials />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />

//         <Route path="/terms-conditions" element={<TermsConditions />} />
//         <Route path="/wallets/:slug" element={<WalletPage />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WalletPage from "./pages/WalletPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";
import BlockchainPage from "./pages/BlockchainPage";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />

        {/* BLOG DETAILS PAGE */}
        <Route path="/blog/:slug" element={<BlogDetails />} />

        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/wallets/:slug" element={<WalletPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/blockchains/:slug" element={<BlockchainPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
