import {
  FaBitcoin,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import wallets from "../data/wallets";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white pt-20 pb-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Grid - Modern Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Blockchains */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-wide">Blockchains</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/blockchains/bitcoin">Bitcoin</Link>
              </li>

              <li>
                <Link to="/blockchains/ethereum">Ethereum</Link>
              </li>

              <li>
                <Link to="/blockchains/solana">Solana</Link>
              </li>

              <li>
                <Link to="/blockchains/tron">Tron</Link>
              </li>

              <li>
                <Link to="/blockchains/bnb-chain">BNB Chain</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Popular Wallets */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-wide">
                Popular Wallets
              </h3>
            </div>
            <ul className="space-y-3">
              {wallets.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/wallets/${item.slug}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-wide">Company</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Press
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          {/* Column 4 - Legal */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-wide">Legal</h3>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Terms of Service
                </Link>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Cookie Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Contact Support */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-wide">Contact</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                New Hampshire, USA
                <br />
                Registered LLC
              </p>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-sm" />
                <a
                  href="mailto:recovery@cryptoasset.com"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  recovery@cryptoasset.com
                </a>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <FaLock className="text-green-400 text-xs" />
                  <span className="text-xs text-gray-500">
                    256-bit SSL Encrypted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-blue-400 text-xs" />
                  <span className="text-xs text-gray-500">
                    Air-Gapped Security
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="flex justify-center gap-6 mb-12">
          <a
            href="#"
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaTwitter className="text-gray-400 hover:text-blue-400 text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-gray-400 hover:text-blue-500 text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-gray-400 hover:text-white text-lg" />
          </a>
        </div> */}

        {/* Disclaimer Paragraphs - Modern Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5">
            <p className="text-gray-400 text-xs leading-relaxed">
              <span className="text-blue-400 font-semibold">
                No Recovery, No Fee
              </span>
              <br />
              All wallet recovery services are performed on air-gapped, offline
              servers with enterprise-grade encryption.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5">
            <p className="text-gray-400 text-xs leading-relaxed">
              <span className="text-blue-400 font-semibold">
                98% Success Rate
              </span>
              <br />
              Recovery success rates based on historical performance across
              10,000+ successful recoveries.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5">
            <p className="text-gray-400 text-xs leading-relaxed">
              <span className="text-blue-400 font-semibold">
                Verified Company
              </span>
              <br />
              Beware of impersonators. We are the only recovery service with
              publicly identified founders.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <FaBitcoin className="text-white text-lg" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Crypto Asset Recovery
              </h2>
              <p className="text-xs text-gray-500">Est. 2017</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2017-2025 All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <FaArrowUp className="text-gray-400 group-hover:text-white text-sm group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 rounded-full">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Live Support</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-1">
              <FaLock className="text-green-400 text-xs" />
              <span className="text-xs text-gray-500">SSL Secure</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-1">
              <FaShieldAlt className="text-blue-400 text-xs" />
              <span className="text-xs text-gray-500">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
