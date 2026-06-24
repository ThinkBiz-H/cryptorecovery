import {
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function sub() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-32 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-white"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full mb-8 animate-pulse">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-white text-sm font-medium">
            Limited Slots Available
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          Ready to get your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            crypto back?
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
          Let's talk about your situation. We'll respond within 24 hours with a
          personalized recovery plan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <button className="group relative bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Link to="/contact" className="group">
              <span className="relative flex items-center gap-3">
                Start Free Consultation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </button>

          <Link
            to="/about"
            className="border-2 border-white/30 hover:border-white/60 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Demo Video
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <FaClock className="text-cyan-400" />
            <span className="text-sm">Response within 24h</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaShieldAlt className="text-green-400" />
            <span className="text-sm">100% Confidential</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaCheckCircle className="text-blue-400" />
            <span className="text-sm">No Recovery, No Fee</span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <span className="text-white/50 text-sm uppercase tracking-wider">
            or
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Contact Methods */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div className="text-left">
              <p className="text-white/60 text-xs">Email us</p>
              <p className="text-white font-medium">
                gethelp@cryptoassetrecovery.org
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div className="text-left">
              <p className="text-white/60 text-xs">Call us 24/7</p>
              <a href="tel:+18323043083">
                <p className="text-white font-medium">+1 (832) 304-3083</p>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/60 text-xs">Live Chat</p>
              <p className="text-white font-medium">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Urgency Timer */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
          <div className="relative">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-white/80 text-sm">
            Limited time offer: Free initial assessment ends soon
          </span>
        </div>
      </div>
    </section>
  );
}

export default sub;
