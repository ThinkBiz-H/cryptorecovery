import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Modern Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Clean Typography */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 10,000+ clients
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              <span className="text-gray-900 dark:text-white">
                We Help You Get Back
              </span>
              {/* <br />
              <span className="text-gray-900 dark:text-white"></span> */}
              <br />
              <span className="text-blue-600 dark:text-blue-500">
                Into Your Crypto Wallet
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Locked out of your crypto wallet? You're not the first — and you
              won't be the last. Forgotten passwords and misplaced recovery
              phrases are far more common than people admit. Since 2017, we've
              helped thousands of people regain access to their digital assets
              using secure, completely offline recovery technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/contact"
                className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                Start free consultation
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <button className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Watch demo
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>

            {/* Risk Free - Minimal Design */}
            <div className="flex items-center gap-4 justify-center lg:justify-start p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Pay only if we succeed
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  100% risk-free consultation
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Modern 3D Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white text-sm ml-2">
                    recovery-terminal@crypto:~$
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      $2.1B
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Recovered
                    </div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      98%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Success
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      24/7
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Support
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      Recovery rate
                    </span>
                    <span className="text-blue-600 dark:text-blue-500 font-semibold">
                      98%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
                    Recent recoveries:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-mono text-gray-700 dark:text-gray-300">
                        0x742d...3e4f
                      </span>
                      <span className="text-green-600 dark:text-green-500">
                        +42.5 ETH
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-mono text-gray-700 dark:text-gray-300">
                        0x8f2a...9b1c
                      </span>
                      <span className="text-green-600 dark:text-green-500">
                        +3.2 BTC
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-mono text-gray-700 dark:text-gray-300">
                        0x1e3d...7a8b
                      </span>
                      <span className="text-green-600 dark:text-green-500">
                        +$450K USDC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Live recovery in progress
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">
                      2 min ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -rotate-12 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
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
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
