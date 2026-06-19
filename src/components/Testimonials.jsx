import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaQuoteLeft,
  FaHeadset,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Testimonials() {
  const [open, setOpen] = useState(0);

  const faq = [
    {
      q: "Is my information safe with you?",
      a: "Absolutely. Recovery work happens on computers that are permanently disconnected from the internet — remote access is physically impossible. Your data is encrypted, and we never ask for your complete password. You control what you share with us at every stage.",
    },
    {
      q: "What are my chances of getting my wallet back?",
      a: "We've successfully recovered access for more than 55% of the wallets we've worked on. Timelines vary based on password complexity — some wallets are recovered in hours, others take weeks or months. Most clients receive an initial update within the first week. Even in difficult cases, we continue developing and applying new techniques over time.",
    },
    {
      q: "How much does this cost?",
      a: "Nothing upfront. Our fee is 20% of the wallet's value, and we only collect it if recovery is successful. We work on every case regardless of wallet size — whether there's $500 inside or $500,000. Most recovery services cherry-pick only large wallets; we believe everyone deserves help.",
    },
    // {
    //   q: "How much does this cost?",
    //   a: "We typically work on a 'no recovery, no fee' basis. You only pay if we successfully recover your wallet. Pricing depends on the complexity of your case.",
    // },
    {
      q: "How do I know you're legitimate?",
      a: "We're a registered family business in New Hampshire run by Chris and Charles Brooks. Unlike every other recovery service out there, we operate under our real names and appear publicly in major media. We've been covered by the BBC, Forbes, VICE, CoinTelegraph, The Boston Globe, and many others. We're verifiable. That's the point.",
    },
    {
      q: "How long will it take?",
      a: "Most cases are resolved within 48 hours to 2 weeks depending on complexity. Simple cases can be solved in under 24 hours.",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Bitcoin Investor",
      text: "Lost access to my Bitcoin Core wallet with 12 BTC. These guys recovered it in 3 days. Absolute lifesavers!",
      rating: 5,
      image: "MC",
    },
    {
      name: "Sarah Williams",
      role: "NFT Collector",
      text: "Thought I lost my MetaMask wallet forever. They helped me recover everything. Professional and trustworthy.",
      rating: 5,
      image: "SW",
    },
    {
      name: "David Kumar",
      role: "Crypto Trader",
      text: "Excellent service. Recovered my Trust Wallet within 24 hours. Highly recommended!",
      rating: 5,
      image: "DK",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Testimonials Section */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                TRUSTED BY 10,000+ CLIENTS
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900 dark:text-white">What our</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                clients say
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Real stories from people who got their crypto back
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
              >
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4 opacity-50" />

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-500 text-xs fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaShieldAlt className="text-green-500" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaLock className="text-blue-500" />
              <span>Offline Process</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaHeadset className="text-purple-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - FAQ Header */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaChevronDown className="text-blue-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                FAQ
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900 dark:text-white">Common</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Still have questions? We're here to help you 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaHeadset />
                Contact Support
              </Link>
            </div>

            {/* Live Chat Badge */}
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    Live Support Online
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Average response: 2 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div>
            {faq.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 py-6 first:pt-0"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <h3
                    className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${
                      open === index
                        ? "text-blue-600 dark:text-blue-500"
                        : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    }`}
                  >
                    {item.q}
                  </h3>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                    }`}
                  >
                    {open === index ? (
                      <FaChevronUp className="text-xl" />
                    ) : (
                      <FaChevronDown className="text-xl" />
                    )}
                  </div>
                </button>

                {open === index && (
                  <div className="mt-4 pl-0 md:pl-4 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner at Bottom */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to recover your crypto?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Start your free consultation today. No recovery, no fee.
          </p>
          <Link
            to="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
