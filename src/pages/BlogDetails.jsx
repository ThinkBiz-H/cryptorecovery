// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const API_URL = "http://localhost/wordpress/wp-json/wp/v2";

// const BlogDetails = () => {
//   const { id } = useParams();

//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetch(`${API_URL}/posts/${id}?_embed`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setBlog(data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   if (!blog) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-black text-white min-h-screen py-10 px-5">
//       <div className="max-w-4xl mx-auto">
//         <img
//           src={blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
//           alt={blog.title.rendered}
//           className="w-full h-[450px] object-cover rounded-xl"
//         />

//         <h1
//           className="text-4xl font-bold mt-6"
//           dangerouslySetInnerHTML={{
//             __html: blog.title.rendered,
//           }}
//         />

//         <div
//           className="mt-6 text-gray-300 leading-8"
//           dangerouslySetInnerHTML={{
//             __html: blog.content.rendered,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCalendar,
  FaUser,
  FaTag,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
  FaClock,
  FaHeart,
  FaBookmark,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const API_URL = "https://cryptoassetrecovery.org/blog/wp-json/wp/v2";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${API_URL}/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-300 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <button
            onClick={() => (window.location.href = "/blog")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => (window.location.href = "/blog")}
            className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300 mb-8"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog._embedded?.["wp:term"]?.[0]?.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
          />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs opacity-75">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-blue-500" />
              <span className="text-sm">{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-500" />
              <span className="text-sm">5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl mb-10">
              <img
                src={blog._embedded["wp:featuredmedia"][0].source_url}
                alt={blog.title.rendered}
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4
                    prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3
                    prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-4 prose-h3:mb-2
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-blue-600 prose-a:underline
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                    prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-1
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
                />
              </div>

              {/* Article Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8 p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      liked
                        ? "bg-red-100 dark:bg-red-900/30 text-red-500"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-red-100 hover:text-red-500"
                    }`}
                  >
                    <FaHeart className={liked ? "fill-current" : ""} />
                    <span>Like</span>
                  </button>
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      saved
                        ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-yellow-100 hover:text-yellow-500"
                    }`}
                  >
                    <FaBookmark className={saved ? "fill-current" : ""} />
                    <span>Save</span>
                  </button>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowShare(!showShare)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    <FaShare />
                    <span>Share</span>
                  </button>

                  {showShare && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex gap-2 animate-fadeInUp">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                        <FaFacebook className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                        <FaTwitter className="text-blue-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
                        <FaLinkedin className="text-blue-700" />
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                      >
                        <FaLink className="text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-8 p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <FaComments className="text-blue-500 text-xl" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Comments
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                  No comments yet. Be the first to share your thoughts!
                </p>
                <button className="w-full py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Leave a Comment
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* Author Card */}
                <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    A
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Admin
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Crypto Recovery Expert
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Helping people recover lost crypto since 2017
                  </p>
                </div>

                {/* Tags */}
                <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaTag className="text-blue-500" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      Crypto Recovery
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      Bitcoin
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      Wallet Security
                    </span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center text-white">
                  <h4 className="font-bold text-xl mb-2">
                    Subscribe to Newsletter
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest crypto recovery tips
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-xl text-gray-900 mb-3"
                  />
                  <button className="w-full bg-white text-gray-900 py-2 rounded-xl font-semibold hover:shadow-lg transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              You might also <span className="text-blue-600">like</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Related Article {item}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Read more about crypto recovery...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
