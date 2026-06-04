import { useState, useEffect, useRef } from "react";
import {
  FaShieldAlt,
  FaUserTie,
  FaCode,
  FaNewspaper,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import Contact from "../components/sub";

function About() {
  const [counters, setCounters] = useState({
    success: 0,
    founded: 0,
    media: 0,
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
          success: Math.min(Math.floor((step / steps) * 98), 98),
          founded: Math.min(Math.floor((step / steps) * 2017), 2017),
          media: Math.min(Math.floor((step / steps) * 100), 100),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const timeline = [
    {
      year: "'17",
      title: "The Beginning",
      desc: "Chris founds CAR after helping friends recover lost Bitcoin.",
      color: "blue",
    },
    {
      year: "'19",
      title: "Public Recognition",
      desc: "Media coverage begins. BBC, Forbes, and VICE feature the company.",
      color: "blue",
    },
    {
      year: "'21",
      title: "Next Generation",
      desc: "Charles joins as CTO and expands infrastructure for Ethereum wallets.",
      color: "blue",
    },
    {
      year: "'26",
      title: "Industry Leaders",
      desc: "98% success rate. Millions recovered. Still the only fully public team.",
      color: "purple",
    },
  ];

  const whyUs = [
    {
      number: "01",
      title: "We show our faces",
      desc: "Most recovery services hide behind anonymous handles. We put our names, photos, and reputation on the line.",
      icon: <FaUserTie className="text-blue-500 text-2xl" />,
    },
    {
      number: "02",
      title: "Air-gapped security",
      desc: "We never connect your wallet to the internet. Our isolated systems keep your crypto fully secure during recovery.",
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    },
    {
      number: "03",
      title: "Shared incentives",
      desc: "No recovery, no fee. Our incentives are perfectly aligned with yours — we succeed together or not at all.",
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 hover:scale-105 transition-transform duration-300">
              <FaUserTie className="text-blue-500 text-sm animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                FULLY TRANSPARENT TEAM
              </span>
            </div>
          </div>

          <h1 className="animate-fadeInUp animation-delay-200">
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white inline-block">
              The only crypto recovery
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              team willing to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] inline-block">
              show their faces.
            </span>
          </h1>

          <p className="animate-fadeInUp animation-delay-400 text-gray-600 dark:text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed mt-6">
            In an industry plagued by anonymity and scams, we built our business
            on something radical: accountability. We are a father-son team from
            New Hampshire, and we've been helping people recover locked crypto
            since 2017.
          </p>
        </div>
      </section>

      {/* Image Section - Modern Card */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl animate-slideInUp">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop"
                alt="Founders"
                className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Founders Info */}
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white animate-fadeInUp animation-delay-600">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Charles & Chris Brooks
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  <p className="uppercase text-sm tracking-widest text-gray-300">
                    Founders · New Hampshire, USA
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-8 right-8 bg-green-500/90 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-white text-sm" />
                  <span className="text-white text-sm font-semibold">
                    VERIFIED TEAM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Chris */}
            <div className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slideInLeft">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-6">
                C
              </div>

              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Chris Brooks
                </h3>
                <p className="text-blue-600 dark:text-blue-500 font-semibold text-sm uppercase tracking-wide">
                  Co-Founder & CEO
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Chris spent decades building secure technology systems for
                institutions like Fidelity and Carescout. He founded Crypto
                Asset Recovery in 2017 after experiencing a locked wallet
                firsthand and realizing thousands faced the same problem with no
                legitimate help.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today he oversees security protocols and client relations,
                ensuring every recovery meets enterprise-grade standards.
              </p>

              {/* Hover Effect */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 mt-6"></div>
            </div>

            {/* Charles */}
            <div className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slideInRight">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-6">
                Ch
              </div>

              <div className="border-l-4 border-purple-500 pl-6 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Charles Brooks
                </h3>
                <p className="text-purple-600 dark:text-purple-500 font-semibold text-sm uppercase tracking-wide">
                  Co-Founder & CTO
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                A Computer Science student from the University of Vermont,
                Charles joined his father in 2021 to scale technical operations.
                He engineers the brute-force algorithms and manages the
                air-gapped server infrastructure.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                His focus: optimizing search patterns to crack complex passwords
                that standard tools can't break.
              </p>

              {/* Hover Effect */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500 mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.success}%
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaChartLine className="text-blue-300 text-sm" />
                <p className="uppercase text-blue-200 tracking-wider text-sm font-semibold">
                  Success Rate
                </p>
              </div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.founded}
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaClock className="text-blue-300 text-sm" />
                <p className="uppercase text-blue-200 tracking-wider text-sm font-semibold">
                  Founded
                </p>
              </div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counters.media}+
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaNewspaper className="text-blue-300 text-sm" />
                <p className="uppercase text-blue-200 tracking-wider text-sm font-semibold">
                  Media Features
                </p>
              </div>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                NH
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-blue-300 text-sm" />
                <p className="uppercase text-blue-200 tracking-wider text-sm font-semibold">
                  Registered LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-6">
              <FaClock className="text-blue-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                HISTORY
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Seven years of{" "}
              <span className="text-blue-600">building trust</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`text-6xl font-bold mb-4 transition-all duration-300 ${
                    hoveredCard === idx
                      ? "text-blue-600 scale-110"
                      : "text-gray-300 dark:text-gray-700"
                  }`}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-6">
              <FaShieldAlt className="text-blue-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                WHY US
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              We do what <span className="text-blue-600">others won't</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Most recovery services operate in the shadows. We operate in the
              light.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                style={{ animationDelay: `${idx * 100 + 300}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-200 dark:text-gray-800">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Animated Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse">
                <FaUserTie className="text-white text-sm" />
                <span className="text-white text-sm font-semibold">
                  MEET THE TEAM
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to work with a team you can trust?
              </h3>

              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get your free consultation today. No recovery, no fee.
              </p>

              <button className="group bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Start Free Consultation
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

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
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
      `}</style>
    </div>
  );
}

export default About;
