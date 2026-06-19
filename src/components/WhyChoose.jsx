import {
  FaBitcoin,
  FaWallet,
  FaShieldAlt,
  FaCheck,
  FaEthereum,
  FaLock,
  FaClock,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function WhyChoose() {
  const wallets = [
    {
      icon: <FaWallet className="text-blue-500" />,
      name: "Blockchain.com",
      desc: "One of the world's most widely used online wallets. If you've forgotten your login password or lost access to your account, we know this wallet's architecture well enough to help.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaBitcoin className="text-orange-500" />,
      name: "Bitcoin Core",
      desc: "The original Bitcoin wallet software. We have deep experience recovering older Bitcoin Core wallets with forgotten passwords — including wallets that haven't been opened in years.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaEthereum className="text-purple-500" />,
      name: "MetaMask",
      desc: "The leading browser extension wallet for Ethereum and NFTs. Lost your password or seed phrase? We can help restore access without compromising your funds.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaShieldAlt className="text-green-500" />,
      name: "Trust Wallet",
      desc: "A popular mobile wallet for managing multiple cryptocurrencies. We assist with both password recovery and seed phrase-related issues.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaBitcoin className="text-orange-500" />,
      name: "Multibit & Multibit HD",
      desc: "Legacy wallets that many early adopters still hold funds in. We have experience with both versions.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaWallet className="text-blue-500" />,
      name: "Electrum, MyEtherWallet, Mist, and More",
      desc: "Don't see your wallet? We're constantly expanding our support. Reach out and we'll tell you honestly whether we can help.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const moreWallets = [
    "Multibit and Multibit HD",
    "Mist Ethereum Wallet",
    "Dogecoin Core wallets",
    "Hardware wallet backups",
    "Electrum Wallet",
    "Exodus Wallet",
  ];

  const stats = [
    { value: "500+", label: "Wallets Supported" },
    { value: "50,000+", label: "Wallets Recovered" },
    { value: "24/7", label: "Emergency Support" },
    { value: "100%", label: "Offline Process" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Heading Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FaWallet className="text-blue-500 text-sm" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              COMPATIBLE WITH 500+ WALLETS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">
              How We Can Help You
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recover Your Crypto
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you've forgotten your wallet password or lost your recovery
            phrase, our team uses specialized offline computers to
            systematically and securely test password combinations until we find
            the right one. Most cases are resolved within the first week. We
            support all major wallets, including:
          </p>
        </div>

        {/* Wallet Cards Grid - Modern */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {wallets.map((wallet, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient Hover Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${wallet.color.split(" ")[1]}, ${wallet.color.split(" ")[3]})`,
                }}
              ></div>

              <div className="p-8">
                <div className="flex gap-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {wallet.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {wallet.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {wallet.desc}
                    </p>

                    {/* Learn More Link */}
                    <button className="mt-4 text-blue-600 dark:text-blue-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Wallets Section - Modern Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <FaLock className="text-white text-xl" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              And many more wallets
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {moreWallets.map((wallet, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {wallet}
                </span>
              </div>
            ))}
          </div>

          {/* Help Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <FaUserShield className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    Don't see your wallet listed?
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We're constantly adding support for new wallets.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap inline-block"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badge at Bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-gray-900/50 rounded-full border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <FaClock className="text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Average recovery: 48 hours
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                100% offline process
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
