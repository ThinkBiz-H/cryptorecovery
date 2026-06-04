import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-blue-600 relative overflow-hidden shadow-md flex-shrink-0">
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-orange-400 rounded-tl-full"></div>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap">
            Crypto Asset Recovery
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-600 font-medium">
          <Link
            to="/pricing"
            className="hover:text-blue-600 transition duration-200"
          >
            Pricing
          </Link>

          <Link
            to="/testimonials"
            className="hover:text-blue-600 transition duration-200"
          >
            Testimonials
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-200"
          >
            About
          </Link>

          <Link
            to="/blog"
            className="hover:text-blue-600 transition duration-200"
          >
            Blog
          </Link>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
              Free Consultation →
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-6">
          <ul className="flex flex-col gap-5 text-gray-700 font-medium">
            <Link to="/pricing">Pricing</Link>

            <Link to="/testimonials">Testimonials</Link>

            <Link to="/about">About</Link>

            <Link to="/blog">Blog</Link>

            <Link to="/contact">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
                Free Consultation →
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
