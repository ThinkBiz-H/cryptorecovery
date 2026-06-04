import { useState, useEffect, useRef } from "react";
import {
  FaCheck,
  FaArrowDown,
  FaShieldAlt,
  FaCrown,
  FaChevronDown,
  FaChevronUp,
  FaChartLine,
  FaRocket,
  FaClock,
} from "react-icons/fa";
import Contact from "../components/sub";

function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);
  const [counters, setCounters] = useState({ percent80: 0, percent20: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCounters({
          percent80: Math.min(Math.floor((step / steps) * 80), 80),
          percent20: Math.min(Math.floor((step / steps) * 20), 20),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const pricingFaqs = [
    {
      q: "How is the fee calculated?",
      a: "The 20% fee applies to the total value of all liquid assets inside the wallet at the time of recovery. We use real-time market prices to determine the value. For wallets with multiple cryptocurrencies, the fee is calculated across all assets combined.",
    },
    {
      q: "How is the payment actually processed?",
      a: "Once we successfully crack the password, we withdraw our fee directly from the wallet using a smart contract or transaction. You don't need to send us any payment - we take our cut and you get immediate access to the remaining 80%.",
    },
    {
      q: "What if my wallet turns out to be empty?",
      a: "Before we begin any heavy computational work, we verify the public address on the blockchain. If the wallet has no funds, we'll let you know immediately with no charge. We never charge for empty wallets.",
    },
    {
      q: "Can I pay a flat fee instead of a percentage?",
      a: "No. The 20% model ensures our incentives are perfectly aligned with yours - we only succeed when you succeed. This motivates our team to dedicate maximum resources to your recovery case.",
    },
  ];

  const features = [
    {
      icon: <FaCheck className="text-blue-600 text-2xl" />,
      title: "Zero Upfront Cost",
      desc: "Running industrial-grade brute force servers costs thousands in electricity and hardware. We absorb these costs entirely.",
      delay: 0,
    },
    {
      icon: <FaArrowDown className="text-blue-600 text-2xl" />,
      title: "Fee Extraction",
      desc: "We don't transmit your funds. We simply withdraw our 20% fee from the wallet and securely hand the credentials back to you.",
      delay: 100,
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Risk-Free Guarantee",
      desc: "If our algorithms cannot find your password, we close the case and delete your data. You owe us absolutely nothing.",
      delay: 200,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section - With Animations */}
      <section className="relative overflow-hidden py-28 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 hover:scale-105 transition-transform duration-300">
              <FaCrown className="text-yellow-500 text-sm animate-bounce" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                NO RECOVERY, NO FEE
              </span>
            </div>
          </div>

          {/* Animated Heading */}
          <h1 className="animate-fadeInUp animation-delay-200">
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
              We only get paid
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] inline-block">
              when you get paid.
            </span>
          </h1>

          {/* Animated Paragraph */}
          <p className="animate-fadeInUp animation-delay-400 text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            We assume 100% of the financial risk. We cover the electricity,
            hardware, and engineering costs required to crack your password. If
            we fail, you owe us absolutely nothing.
          </p>

          {/* Animated Scroll Indicator */}
          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 80/20 Split - With Counter Animation */}
      <section ref={sectionRef} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left - You Keep 80% */}
            <div className="group relative bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slideInLeft">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated Counter */}
              <div className="p-12 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-8 animate-pulse">
                  <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                    YOU KEEP
                  </span>
                </div>

                <div className="relative">
                  <h2 className="text-8xl md:text-9xl font-bold text-gray-900 dark:text-white mb-6">
                    {counters.percent80}%
                  </h2>
                  {/* Progress Ring Animation */}
                  <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-10">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="440"
                      strokeDashoffset={440 - (440 * counters.percent80) / 100}
                      className="text-green-500 transition-all duration-1000"
                    />
                  </svg>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-fadeIn">
                  We return the wallet to you with the majority of funds intact.
                  You are responsible for moving them to a new secure location.
                </p>
              </div>
            </div>

            {/* Right - Our Fee 20% */}
            <div className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 animate-slideInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/50 rounded-full animate-float animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-float animation-delay-2000"></div>
              </div>

              <div className="p-12 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-pulse">
                  <span className="text-white text-sm font-semibold">
                    OUR FEE
                  </span>
                </div>

                <h2 className="text-8xl md:text-9xl font-bold text-white mb-6">
                  {counters.percent20}%
                </h2>

                <p className="text-white/90 text-lg leading-relaxed animate-fadeIn animation-delay-200">
                  Calculated based on the total liquid assets in the wallet. We
                  withdraw this fee directly before returning the wallet to you.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-8 animate-fadeInUp animation-delay-600">
            *For extremely complex cases involving smart contracts or custom
            exploits, fees may vary. We will always agree on the fee in writing
            before starting.
          </p>
        </div>
      </section>

      {/* Features Grid - With Stagger Animation */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why choose our pricing model?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Transparent, fair, and aligned with your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Hover Line Animation */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion with Animations */}
      <section className="py-24 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="lg:sticky lg:top-32 h-fit animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-6">
                <FaChartLine className="text-blue-500 text-sm animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  FAQ
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-gray-900 dark:text-white">Pricing</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Common questions about our fee structure and payment process.
              </p>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <FaRocket className="text-blue-500 text-xl animate-bounce" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">
                      💡 Still have questions?
                    </span>
                    <br />
                    Our team is available 24/7 to discuss your specific case.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="animate-slideInRight">
              {pricingFaqs.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-800 py-6 first:pt-0 group"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <h3
                      className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${
                        openFaq === index
                          ? "text-blue-600 dark:text-blue-500"
                          : "text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      }`}
                    >
                      {item.q}
                    </h3>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                        openFaq === index
                          ? "bg-blue-600 text-white rotate-180"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                      }`}
                    >
                      <FaChevronDown className="text-xl" />
                    </div>
                  </button>

                  {openFaq === index && (
                    <div className="mt-4 animate-slideDown">
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section - Animated */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full hover:scale-110 transition-all duration-300">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                98% Success Rate
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full hover:scale-110 transition-all duration-300">
              <FaShieldAlt className="text-blue-500 text-sm animate-pulse" />
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                100% Confidential
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800/50 rounded-full hover:scale-110 transition-all duration-300">
              <FaClock
                className="text-green-500 text-sm animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </section>

      <Contact />

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-stagger {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Hide scroll indicator on mount */
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Pricing;
