function Services() {
  const stats = [
    { value: "Est. 2017", label: "In Business" },
    { value: "55%", label: "Success Rate" },
    { value: "$245B+", label: "Locked Crypto Market" },
    { value: "100+", label: "Media Features" },
  ];

  const features = [
    {
      icon: "🔒",
      title: "Cold Storage Recovery",
      desc: "Your keys never touch the internet",
    },
    {
      icon: "⚡",
      title: "24/7 Emergency Access",
      desc: "Live support for urgent cases",
    },
    {
      icon: "🛡️",
      title: "Forensic Analysis",
      desc: "Advanced blockchain tracing",
    },
    {
      icon: "💳",
      title: "Multi-Currency Support",
      desc: "BTC, ETH, USDT & 500+ assets",
    },
  ];

  const publications = [
    { name: "BBC", size: "text-3xl" },
    { name: "Forbes", size: "text-3xl" },
    { name: "VICE", size: "text-2xl" },
    { name: "The Block", size: "text-2xl" },
    { name: "Insider", size: "text-2xl" },
    { name: "CoinDesk", size: "text-2xl" },
  ];

  return (
    <section className="bg-white dark:bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Grid - Modern Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Banner - Modern Overlay */}
        <div className="relative rounded-3xl overflow-hidden mb-20 group">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
            alt="Secure crypto recovery"
            className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay - Modern */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                Live Recovery Active
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-mono">🔐 SECURITY FIRST</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Wallet Stays Completely
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Offline During Recovery
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We never connect your wallet to the internet — not even briefly.
                Every recovery attempt happens on air-gapped machines that are
                physically isolated from any network. This isn't just a policy;
                it's baked into how our infrastructure is built. Your crypto and
                your credentials remain completely secure while we work.
              </p>

              {/* CTA inside banner */}
              <button className="mt-8 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 group">
                Learn how it works
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition"
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured In - Modern Version */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
            <p className="text-gray-400 uppercase text-xs tracking-[4px] font-semibold">
              TRUSTED BY LEADING MEDIA
            </p>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {publications.map((pub, idx) => (
              <span
                key={idx}
                className={`${pub.size} font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 cursor-pointer`}
              >
                {pub.name}
              </span>
            ))}
          </div>

          {/* Rating Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-full">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              4.9/5
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              (2,847 reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
