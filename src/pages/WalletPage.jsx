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
  FaMapMarkerAlt,
} from "react-icons/fa";
import wallets from "../data/wallets";
import { Link } from "react-router-dom";

// const fixedBlogs = [
//   {
//     title: "How to Recover your Lost Blockchain.com Password",
//     image:
//       "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
//     excerpt:
//       "Step-by-step guide to recover your Blockchain.com wallet password using our secure offline technology.",
//     date: "Dec 15, 2024",
//     readTime: "5 min read",
//   },
//   {
//     title:
//       "How to Recover Blockchain.com Legacy Wallets with an Unexpected Number of Mnemonic Words",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
//     excerpt:
//       "Legacy wallet recovery guide for mnemonic phrases with unusual word counts.",
//     date: "Dec 10, 2024",
//     readTime: "7 min read",
//   },
//   {
//     title: "How to Recover your Lost Blockchain.info Secondary Password",
//     image:
//       "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200",
//     excerpt:
//       "Complete guide to recovering your Blockchain.info secondary password and regaining access.",
//     date: "Dec 5, 2024",
//     readTime: "4 min read",
//   },
//   {
//     title:
//       "What To Do If You Are Not Receiving Authorization Emails from Blockchain.com",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200",
//     excerpt:
//       "Troubleshooting guide for missing authorization emails and account access issues.",
//     date: "Nov 28, 2024",
//     readTime: "6 min read",
//   },
// ];

export default function WalletPage() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const wallet = wallets.find((item) => item.slug === slug);

  useEffect(() => {
    setIsVisible(true);

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://cryptoassetrecovery.org/blog/wp-json/wp/v2/posts?_embed`,
        );

        const data = await response.json();

        const filteredBlogs = data.filter((post) =>
          post._embedded["wp:term"][0].some(
            (cat) => cat.slug.toLowerCase() === slug.toLowerCase(),
          ),
        );

        setBlogs(filteredBlogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [slug]);

  if (!wallet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Wallet Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The wallet you're looking for doesn't exist.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    { value: "98%", label: "Success Rate", icon: <FaChartLine /> },
    { value: "10,000+", label: "Wallets Recovered", icon: <FaWallet /> },
    { value: "24/7", label: "Support Available", icon: <FaClock /> },
    { value: "500+", label: "Wallets Supported", icon: <FaShieldAlt /> },
  ];

  const features = [
    {
      icon: <FaLock />,
      title: "Secure Offline Process",
      desc: "Your wallet never connects to the internet during recovery",
    },
    {
      icon: <FaKey />,
      title: "Password Recovery",
      desc: "Advanced algorithms to crack complex passwords",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Wallet Icon Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              {wallet.icon === "btc" && (
                <FaBitcoin className="text-white text-sm" />
              )}
              {wallet.icon === "eth" && (
                <FaEthereum className="text-white text-sm" />
              )}
              {!wallet.icon && <FaWallet className="text-white text-sm" />}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {wallet.title} Wallet
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            We'll help you get back into your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {wallet.title} wallet
            </span>
          </h1>

          <p
            className={`text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Forgot your wallet password? You're not alone. We've helped
            thousands of people recover their wallet using secure offline
            technology.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              Start Free Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl text-blue-500 mb-3 flex justify-center">
                  {stat.icon}
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

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why choose us for{" "}
              <span className="text-blue-600">{wallet.title}</span> recovery?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Professional, secure, and trusted recovery service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-500 hover:scale-105"
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

      {/* Recovery Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900/50 dark:to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our recovery <span className="text-blue-600">process</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Simple, secure, and transparent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Share your wallet details with our team",
              },
              {
                step: "02",
                title: "Security Analysis",
                desc: "We analyze your wallet offline",
              },
              {
                step: "03",
                title: "Recovery & Access",
                desc: "You regain access to your funds",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-full mb-4">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                OUR BLOG
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Latest {wallet.title} <span className="text-blue-600">posts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredBlog(index)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={
                      blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200"
                    }
                    alt={blog.title.rendered}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredBlog === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: blog.title.rendered,
                    }}
                  />
                  <div
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: blog.excerpt.rendered,
                    }}
                  />
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to recover your {wallet.title} wallet?
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Start your free consultation today. No recovery, no fee.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Get Started Now
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
