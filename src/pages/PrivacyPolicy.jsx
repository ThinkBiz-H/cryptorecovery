import React, { useState, useEffect, useRef } from "react";
import {
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaUserSecret,
  FaCookie,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
  FaCheckCircle,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaGavel,
  FaCalendarAlt,
  FaQuestionCircle,
} from "react-icons/fa";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: "what",
      title: "What Information Do We Collect?",
      icon: <FaDatabase />,
    },
    {
      id: "how",
      title: "How Do We Process Your Information?",
      icon: <FaChartLine />,
    },
    { id: "legal", title: "Legal Bases for Processing", icon: <FaGavel /> },
    { id: "share", title: "When Do We Share Information?", icon: <FaUsers /> },
    {
      id: "retention",
      title: "How Long Do We Keep Data?",
      icon: <FaCalendarAlt />,
    },
    { id: "security", title: "How Do We Keep Data Safe?", icon: <FaLock /> },
    {
      id: "minors",
      title: "Do We Collect from Minors?",
      icon: <FaUserSecret />,
    },
    { id: "rights", title: "Your Privacy Rights", icon: <FaShieldAlt /> },
    { id: "cookies", title: "Do-Not-Track Features", icon: <FaCookie /> },
    { id: "california", title: "California Privacy Rights", icon: <FaGlobe /> },
    { id: "updates", title: "Updates to This Notice", icon: <FaFileAlt /> },
    { id: "contact", title: "How to Contact Us", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    setActiveSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeInUp">
            <FaShieldAlt className="text-blue-500 text-sm animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              YOUR PRIVACY MATTERS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fadeInUp animation-delay-200">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg animate-fadeInUp animation-delay-400">
            Last updated:{" "}
            <span className="font-semibold">September 25, 2025</span>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-80 flex-shrink-0 animate-slideInLeft">
            <div className="lg:sticky lg:top-32 bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaFileAlt className="text-blue-500" />
                  Quick Navigation
                </h3>
              </div>
              <nav className="p-4 max-h-[600px] overflow-y-auto">
                {sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                      activeSection === idx
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-500"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span
                      className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeSection === idx ? "text-blue-500" : ""}`}
                    >
                      {section.icon}
                    </span>
                    <span className="text-sm font-medium flex-1">
                      {section.title}
                    </span>
                    <FaChevronRight
                      className={`text-xs transition-all duration-300 ${activeSection === idx ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                    />
                  </button>
                ))}
              </nav>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-center">
                <FaCheckCircle className="text-2xl mx-auto mb-2" />
                <p className="text-sm font-semibold">100% Transparent</p>
                <p className="text-xs opacity-90">No hidden data practices</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl text-white text-center">
                <FaLock className="text-2xl mx-auto mb-2" />
                <p className="text-sm font-semibold">GDPR Compliant</p>
                <p className="text-xs opacity-90">Your data is protected</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 animate-slideInRight">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Introduction */}
              <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-xl">
                    <FaUserSecret />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Introduction
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This privacy notice for{" "}
                  <span className="font-semibold">
                    CRYPTOASSETRECOVERY.COM, LLC
                  </span>{" "}
                  ("Company," "we," "us," or "our"), describes how and why we
                  might collect, store, use, and/or share ("process") your
                  information when you use our services ("Services"), such as
                  when you:
                </p>

                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 mb-6">
                  <li>Visit https://cryptoassetrecovery.com/</li>
                  <li>
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                  </li>
                </ul>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <FaQuestionCircle className="inline text-blue-500 mr-2" />
                    Questions or concerns? This privacy notice explains your
                    privacy rights and choices. If you do not agree with our
                    policies and practices, please do not use our Services.
                  </p>
                </div>
              </div>

              {/* Summary of Key Points */}
              <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900/30 dark:to-transparent">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Summary of Key Points
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "What personal information do we process?",
                    "Do we process any sensitive personal information?",
                    "Do we receive any information from third parties?",
                    "How do we process your information?",
                    "In what situations do we share personal information?",
                    "How do we keep your information safe?",
                    "What are your rights?",
                    "How do you exercise your rights?",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800/30 rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <FaCheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Sections */}
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  id={`section-${idx}`}
                  className={`p-8 md:p-10 transition-all duration-500 ${
                    idx !== sections.length - 1
                      ? "border-b border-gray-200 dark:border-gray-800"
                      : ""
                  }`}
                  style={{
                    opacity: isVisible[`section-${idx}`] ? 1 : 0,
                    transform: isVisible[`section-${idx}`]
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-xl">
                      {section.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>

                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    {section.id === "what" && (
                      <>
                        <p>
                          We collect personal information that you voluntarily
                          provide to us when you express an interest in
                          obtaining information about us or our products and
                          Services.
                        </p>
                        <p>
                          The personal information we collect may include email
                          addresses, names, phone numbers, usernames, passwords,
                          and contact or authentication data.
                        </p>
                        <p>
                          We automatically collect certain information when you
                          visit, use, or navigate the Services including IP
                          address, browser characteristics, operating system,
                          language preferences, referring URLs, and technical
                          information.
                        </p>
                      </>
                    )}

                    {section.id === "how" && (
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          To respond to user inquiries and support requests.
                        </li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To request feedback.</li>
                        <li>To send marketing communications.</li>
                        <li>To protect our Services and prevent fraud.</li>
                        <li>To identify usage trends.</li>
                      </ul>
                    )}

                    {section.id === "legal" && (
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Consent</li>
                        <li>Performance of a Contract</li>
                        <li>Legitimate Interests</li>
                        <li>Legal Obligations</li>
                        <li>Vital Interests</li>
                      </ul>
                    )}

                    {section.id === "share" && (
                      <>
                        <p>
                          We may share your data with third-party vendors and
                          service providers who perform services for us.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Google Analytics</li>
                          <li>Cloudflare Hosting</li>
                          <li>Website Performance Monitoring</li>
                        </ul>
                      </>
                    )}

                    {section.id === "retention" && (
                      <p>
                        We keep your information only as long as necessary to
                        fulfill the purposes outlined in this notice unless
                        otherwise required by law.
                      </p>
                    )}

                    {section.id === "security" && (
                      <p>
                        We implement technical and organizational security
                        measures to protect your personal information, including
                        air-gapped servers and enterprise-grade encryption.
                      </p>
                    )}

                    {section.id === "minors" && (
                      <p>
                        We do not knowingly collect data from children under 18
                        years of age.
                      </p>
                    )}

                    {section.id === "rights" && (
                      <p>
                        Depending on your location, you may have rights
                        regarding access, correction, deletion, or restriction
                        of your personal data.
                      </p>
                    )}

                    {section.id === "cookies" && (
                      <p>
                        We currently do not respond to Do-Not-Track browser
                        signals.
                      </p>
                    )}

                    {section.id === "california" && (
                      <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 dark:border-gray-700 text-left text-sm">
                          <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                              <th className="p-3 border">Category</th>
                              <th className="p-3 border">Examples</th>
                              <th className="p-3 border">Collected</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-3 border">Identifiers</td>
                              <td className="p-3 border">
                                Name, email, IP address
                              </td>
                              <td className="p-3 border">YES</td>
                            </tr>
                            <tr>
                              <td className="p-3 border">
                                Protected classifications
                              </td>
                              <td className="p-3 border">
                                Gender and date of birth
                              </td>
                              <td className="p-3 border">YES</td>
                            </tr>
                            <tr>
                              <td className="p-3 border">Geolocation Data</td>
                              <td className="p-3 border">Device location</td>
                              <td className="p-3 border">YES</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.id === "updates" && (
                      <p>
                        Yes, we may update this privacy notice from time to time
                        to stay compliant with relevant laws.
                      </p>
                    )}

                    {section.id === "contact" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <FaEnvelope className="text-blue-500" />
                          <span>info@cryptoassetrecovery.com</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                          <FaPhone className="text-green-500" />
                          <span>(970) 633-0680</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl col-span-2">
                          <FaMapMarkerAlt className="text-red-500" />
                          <span>
                            5 Ross Rd., Durham, NH 03824, United States
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4">
                    <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              ))}

              {/* Footer Note */}
              <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-blue-500 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Your Privacy Matters
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We are committed to protecting your personal information
                      and being transparent about our data practices. If you
                      have any concerns, please don't hesitate to reach out to
                      our privacy team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Button */}
            <div className="mt-8 text-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <FaCheckCircle className="text-lg" />
                I Understand and Agree
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                By continuing to use our services, you acknowledge this privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>

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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;
