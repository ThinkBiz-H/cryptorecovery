import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowRight,
  FaSpinner,
  FaEye,
  FaHeart,
  FaBookmark,
  FaShare,
  FaChartLine,
} from "react-icons/fa";

import { getPosts } from "../services/api";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [{ name: "All", value: "all" }];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (activeFilter !== "all") {
      filtered = filtered.filter((post) =>
        post.categories?.some(
          (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === activeFilter,
        ),
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.rendered
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          post.excerpt.rendered
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredPosts(filtered);
  }, [activeFilter, searchTerm, posts]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-5xl text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Loading articles...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 border-b border-gray-200 dark:border-gray-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeInUp">
              <FaChartLine className="text-blue-500 text-sm animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                KNOWLEDGE CENTER
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fadeInUp animation-delay-200">
              Resources and{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                insights.
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed animate-fadeInUp animation-delay-400">
              The latest industry news, interviews, technologies, and resources
              to help you understand the ins and outs of crypto ownership and
              wallet recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl"
            >
              <FaFilter />
              <span>Filters</span>
            </button>

            {/* Categories */}
            <div
              className={`${showFilters ? "flex" : "hidden"} md:flex flex-wrap gap-3`}
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.value
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-stagger"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(post.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block overflow-hidden relative h-64"
                  >
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop"
                      }
                      alt={post.title.rendered}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCard === post.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Overlay Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                        hoveredCard === post.id ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Quick Actions */}
                    <div
                      className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                        hoveredCard === post.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-10"
                      }`}
                    >
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <FaHeart className="text-white text-sm" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <FaBookmark className="text-white text-sm" />
                      </button>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">
                        {post.categories?.[0]?.name || "Password Recovery"}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <FaCalendar className="text-xs" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${post.slug}`}>
                      <h2
                        className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                    </Link>

                    {/* Excerpt */}
                    <div
                      className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                          A
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900 dark:text-white">
                            Admin
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FaEye className="text-[10px]" />
                            <span>2 min read</span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all duration-300"
                      >
                        Read More
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && filteredPosts.length >= 9 && (
            <div className="text-center mt-12">
              <button className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Load More Articles
                <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Get the latest crypto recovery tips and news delivered to your
                inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900"
                />
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
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

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Blog;
