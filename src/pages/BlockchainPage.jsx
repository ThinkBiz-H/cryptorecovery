import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaLock,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaChartLine,
  FaWallet,
  FaKey,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaDatabase,
  FaServer,
  FaUserShield,
} from "react-icons/fa";
import blockchains from "../data/blockchains";

function BlockchainPage() {
  const { slug } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blockchain = blockchains.find((item) => item.slug === slug);

  if (!blockchain) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔗</div>
          <h1 className="text-4xl font-bold text-white mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-gray-300 mb-6">
            The blockchain page you're looking for doesn't exist.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    {
      value: "98%",
      label: "Success Rate",
      icon: <FaChartLine />,
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "10,000+",
      label: "Wallets Recovered",
      icon: <FaWallet />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <FaClock />,
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "500+",
      label: "Blockchains",
      icon: <FaDatabase />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: <FaLock />,
      title: "Secure Offline Process",
      desc: "Your wallet never connects to the internet during recovery",
    },
    {
      icon: <FaKey />,
      title: "Advanced Recovery",
      desc: "Specialized algorithms to crack complex passwords",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Confidential",
      desc: "Your data is encrypted and never shared",
    },
    {
      icon: <FaCheckCircle />,
      title: "No Recovery, No Fee",
      desc: "You only pay if we successfully recover your wallet",
    },
  ];

  const publications = [
    { name: "BBC", size: "text-5xl font-bold" },
    { name: "Forbes", size: "text-5xl font-serif italic" },
    { name: "VICE", size: "text-5xl font-bold" },
    { name: "The Block", size: "text-4xl font-bold" },
    { name: "Business Insider", size: "text-4xl font-bold" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6  bg-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Blockchain Icon Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              {blockchain.icon === "btc" && (
                <FaBitcoin className="text-white text-sm" />
              )}
              {blockchain.icon === "eth" && (
                <FaEthereum className="text-white text-sm" />
              )}
              {!blockchain.icon && (
                <FaDatabase className="text-white text-sm" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {blockchain.title}
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            We'll help you get back into your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {blockchain.title.replace(" Wallet Recovery", "")} wallet
            </span>
          </h1>

          <p
            className={`text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Forgot your password? Lost your recovery phrase? You're not alone.
            We've helped thousands of people recover their crypto using secure,
            offline technology.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              Start Free Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-left">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaCheckCircle className="text-green-500 text-xs" />
                <p>You only pay if we succeed</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                <FaShieldAlt className="text-blue-500 text-xs" />
                <p>Completely risk-free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white text-xl">{stat.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-16 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-4">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Trusted by Leading Media
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {publications.map((pub, idx) => (
              <span
                key={idx}
                className={`${pub.size} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                {pub.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900/30 dark:to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-4">
              <FaUserShield className="text-blue-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              How we can help you{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                recover your crypto
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <FaKey className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Wallet Password Recovery
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  If you've forgotten your password or lost your recovery
                  phrase, we can help. We use specialized computers that work
                  completely offline to safely test password combinations until
                  we find the right one.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <FaCheckCircle className="text-green-500 text-xs" />
                  <span>Most cases resolved within one week</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3">No Recovery, No Fee</h3>
                <p className="text-white/90 leading-relaxed">
                  We only get paid when we successfully recover your wallet. Our
                  incentives are perfectly aligned with yours — we succeed
                  together or not at all.
                </p>
                <div className="mt-4 p-3 bg-white/10 rounded-xl">
                  <p className="text-sm font-semibold">98% Success Rate</p>
                  <p className="text-xs opacity-80">
                    Over 10,000 wallets recovered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why choose us for{" "}
              <span className="text-blue-600">
                {blockchain.title.replace(" Wallet Recovery", "")}
              </span>{" "}
              recovery?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Professional, secure, and trusted recovery service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${idx * 100 + 300}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600 text-xl">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse">
                <FaWallet className="text-white text-sm" />
                <span className="text-white text-sm font-semibold">
                  READY TO RECOVER
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to get your crypto back?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's talk about your situation. We'll respond within 24 hours
                with a personalized recovery plan.
              </p>
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Start Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-white/70 text-sm">
                <span className="flex items-center gap-1">
                  ✓ Free Assessment
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  ✓ No Recovery, No Fee
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">✓ 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-stagger {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default BlockchainPage;
