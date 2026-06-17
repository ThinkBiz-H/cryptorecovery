import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-full bg-blue-600 relative overflow-hidden flex-shrink-0">
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-orange-400 rounded-tl-full"></div>
            </div>

            <h1 className="font-bold text-base sm:text-lg lg:text-2xl text-gray-900 truncate">
              Crypto Asset Recovery
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>

            <Link to="/testimonials" className="hover:text-blue-600">
              Testimonials
            </Link>

            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center ml-4">
            {/* Desktop Button */}
            <Link to="/contact" className="hidden lg:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Free Consultation →
              </button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-2xl text-gray-700"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <span className="font-bold text-lg">Menu</span>

          <button onClick={closeMenu} className="text-2xl text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 gap-6 text-gray-700 font-medium">
          <Link to="/pricing" onClick={closeMenu}>
            Pricing
          </Link>

          <Link to="/testimonials" onClick={closeMenu}>
            Testimonials
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Free Consultation →
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
