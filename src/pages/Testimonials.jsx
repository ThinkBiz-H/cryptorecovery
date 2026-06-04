import { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import Contact from "../components/sub";

const reviews = [
  {
    title: "Lost Bitcoin Wallet Recovered After Years",
    text: "I was one of those guys who lost the password to my wallet back in the early days of crypto. After some years, I tried to find out the password myself but did not succeed. Great service and highly recommended.",
    name: "Paul",
    date: "December 17, 2024",
    large: true,
    rating: 5,
    initial: "P",
  },
  {
    text: "I heard about Crypto Asset Recovery when listening to the radio show Kim Komando. Once I contacted Chris, he explained the steps to recovery in detail.",
    name: "Linda",
    date: "Sep 2024",
    rating: 5,
    initial: "L",
  },
  {
    text: "It took them about two days to get the password. I'm very happy that I gave them a chance and I recommend them to anyone who has lost hope.",
    name: "Petro",
    date: "Jun 2024",
    rating: 5,
    initial: "P",
  },
  {
    text: "Excellent support from Mr Chris after 2 weeks my password was recovered. Friendly, trustworthy and willing to help.",
    name: "Mase",
    date: "Dec 2025",
    rating: 5,
    initial: "M",
  },
  {
    text: "I was sceptical but they are good, resolved within a few days and gave me tips moving forward.",
    name: "Giovanni",
    date: "Sep 2024",
    rating: 5,
    initial: "G",
  },
  {
    text: "It was a wonderful experience. My password was recovered and my funds were untouched. I was so happy.",
    name: "Songwe Yannick",
    date: "Dec 2024",
    rating: 5,
    initial: "S",
  },
  {
    text: "I had lost all hope since I could not log in almost for 2 years. Then I came across cryptoasset and asked for their help. Thanks to Chris.",
    name: "Idelis",
    date: "Mar 2024",
    rating: 5,
    initial: "I",
  },
];

const stats = [
  {
    value: "10,000+",
    label: "Happy Clients",
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    value: "98%",
    label: "Success Rate",
    icon: <FaChartLine className="text-green-500" />,
  },
  {
    value: "24/7",
    label: "Support",
    icon: <FaClock className="text-purple-500" />,
  },
  {
    value: "$500M+",
    label: "Recovered",
    icon: <FaShieldAlt className="text-yellow-500" />,
  },
];

function Testimonials() {
  const [counters, setCounters] = useState({
    clients: 0,
    success: 0,
    recovered: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCounters({
          clients: Math.min(Math.floor((step / steps) * 10000), 10000),
          success: Math.min(Math.floor((step / steps) * 98), 98),
          recovered: Math.min(Math.floor((step / steps) * 500), 500),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 hover:scale-105 transition-transform duration-300">
              <FaStar className="text-yellow-500 text-sm animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                TRUSTED BY 10,000+ CLIENTS
              </span>
            </div>
          </div>

          <h1 className="animate-fadeInUp animation-delay-200">
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
              Don't just take our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] inline-block">
              word for it.
            </span>
          </h1>

          <p className="animate-fadeInUp animation-delay-400 text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            We have helped hundreds of people recover millions of dollars in
            locked crypto. Read genuine, verified reviews from our clients.
          </p>

          {/* Stats Grid */}
          <div
            ref={sectionRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.label === "Success Rate" && counters.success}
                  {stat.label === "Success Rate" && "%"}
                  {stat.label === "Happy Clients" &&
                    counters.clients.toLocaleString()}
                  {stat.label === "Recovered" && "$"}
                  {stat.label === "Recovered" && counters.recovered}
                  {stat.label === "Recovered" && "M+"}
                  {stat.label === "Support" && stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review - Large Card */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="group relative bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slideInUp">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

            <div className="relative p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="inline-block animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                    ✓ VERIFIED REVIEW
                  </span>
                </div>
                <FaQuoteLeft className="text-blue-200 dark:text-blue-800 text-4xl opacity-50" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                "{reviews[0].title}"
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed italic mb-8">
                "{reviews[0].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {reviews[0].initial}
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white">
                    {reviews[0].name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xs" />
                    {reviews[0].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid - With Animations */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What our <span className="text-blue-600">clients say</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Real stories from real people who got their crypto back
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(1).map((review, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Rating Stars with Animation */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 text-sm transition-all duration-300 ${
                        hoveredCard === index ? "animate-bounce" : ""
                      }`}
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-blue-200 dark:text-blue-800 text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[120px]">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <FaCheckCircle className="text-green-500 text-[10px]" />
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse">
                <FaShieldAlt className="text-white text-sm" />
                <span className="text-white text-sm font-semibold">
                  100% TRANSPARENT
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to recover your crypto?
              </h3>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who got their assets back
              </p>

              <button className="group bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Start Your Recovery
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-white/50 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-float animation-delay-2000"></div>
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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

        .animation-delay-1000 {
          animation-delay: 1s;
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

export default Testimonials;
