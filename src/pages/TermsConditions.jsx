import { useState, useEffect, useRef } from "react";
import {
  FaShieldAlt,
  FaGavel,
  FaUserCheck,
  FaBan,
  FaLock,
  FaExclamationTriangle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
  FaFileContract,
  FaDatabase,
  FaRegBuilding,
  FaCheckCircle,
} from "react-icons/fa";

function TermsConditions() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const sections = [
    {
      title: "Agreement to Terms",
      icon: <FaFileContract className="text-blue-500" />,
      content: [
        "These Terms of Use constitute a legally binding agreement made between you and Crypto Asset Recovery regarding your access to and use of this website and related services.",
        "By accessing the Site, you agree that you have read, understood, and agreed to all of these Terms.",
        "If you do not agree with all of these Terms, you are expressly prohibited from using the Site and must discontinue use immediately.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      icon: <FaShieldAlt className="text-blue-500" />,
      content: [
        "Unless otherwise indicated, the Site and all content, source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics are our proprietary property.",
        "All trademarks, service marks, and logos are owned by us or our licensors.",
        "You are granted a limited license to access and use the Site for personal, non-commercial purposes only.",
      ],
    },
    {
      title: "User Representations",
      icon: <FaUserCheck className="text-blue-500" />,
      content: [
        "By using the Site, you represent and warrant that:",
        "You have the legal capacity to comply with these Terms.",
        "You will not use automated systems like bots or scripts.",
        "You will not use the Site for illegal or unauthorized purposes.",
        "Your use of the Site will not violate any laws or regulations.",
        "You are not a minor in your jurisdiction of residence.",
      ],
      isList: true,
    },
    {
      title: "Prohibited Activities",
      icon: <FaBan className="text-blue-500" />,
      content: [
        "Users are prohibited from:",
        "Collecting data without permission.",
        "Uploading viruses or malicious software.",
        "Attempting unauthorized access to the Site.",
        "Using the Site for fraudulent activities.",
        "Harassing or threatening other users.",
        "Circumventing any security features.",
      ],
      isList: true,
    },
    {
      title: "Privacy Policy",
      icon: <FaLock className="text-blue-500" />,
      content: [
        "We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy.",
        "All personal data collected through the Site will be handled in accordance with our Privacy Policy.",
        "Our security measures include air-gapped servers and enterprise-grade encryption.",
      ],
    },
    {
      title: "Disclaimer",
      icon: <FaExclamationTriangle className="text-blue-500" />,
      content: [
        "The Site is provided on an 'AS-IS' and 'AS-AVAILABLE' basis.",
        "We disclaim all warranties, express or implied, in connection with the Site.",
        "We do not warrant that the Site will be uninterrupted, secure, or error-free.",
        "Recovery success rates vary based on individual circumstances.",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: <FaGavel className="text-blue-500" />,
      content: [
        "In no event will we be liable for any indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Site.",
        "Our total liability shall not exceed the amount paid by you, if any, for accessing the Site.",
        "Some jurisdictions do not allow the exclusion of certain warranties, so some exclusions may not apply to you.",
      ],
    },
    {
      title: "Contact Us",
      icon: <FaEnvelope className="text-blue-500" />,
      content: [
        "CryptoAssetRecovery.com, LLC",
        "5 Ross Rd.",
        "Durham, NH 03824",
        "United States",
        "Email: info@cryptoassetrecovery.com",
        "Phone: (970) 633-0680",
      ],
      isContact: true,
    },
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
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaGavel className="text-blue-500 text-sm animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                LEGAL AGREEMENT
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Terms and <span className="text-blue-600">Conditions</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Last updated:{" "}
              <span className="font-semibold">September 25, 2025</span>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-80 flex-shrink-0 animate-slideInLeft">
            <div className="lg:sticky lg:top-32 bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaFileContract className="text-blue-500" />
                  On this page
                </h3>
              </div>
              <nav className="p-4">
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

            {/* Trust Badge */}
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center animate-fadeInUp animation-delay-600">
              <FaShieldAlt className="text-3xl mx-auto mb-3 opacity-80" />
              <p className="text-sm font-semibold mb-1">100% Transparent</p>
              <p className="text-xs opacity-80">
                No hidden clauses · Clear terms
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 animate-slideInRight">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
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
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-xl">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    {section.isList ? (
                      <ul className="space-y-3">
                        {section.content.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : section.isContact ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.content.map((item, itemIdx) => {
                          if (item.includes("Email")) {
                            return (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                              >
                                <FaEnvelope className="text-blue-500" />
                                <span>{item.replace("Email: ", "")}</span>
                              </div>
                            );
                          } else if (item.includes("Phone")) {
                            return (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                              >
                                <FaPhone className="text-green-500" />
                                <span>{item.replace("Phone: ", "")}</span>
                              </div>
                            );
                          } else if (
                            item.includes("Rd") ||
                            item.includes("NH")
                          ) {
                            return (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                              >
                                <FaMapMarkerAlt className="text-red-500" />
                                <span>{item}</span>
                              </div>
                            );
                          } else if (item.includes("LLC")) {
                            return (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                              >
                                <FaRegBuilding className="text-purple-500" />
                                <span>{item}</span>
                              </div>
                            );
                          } else {
                            return <p key={itemIdx}>{item}</p>;
                          }
                        })}
                      </div>
                    ) : (
                      section.content.map((item, itemIdx) => (
                        <p key={itemIdx}>{item}</p>
                      ))
                    )}
                  </div>

                  {/* Decorative Line */}
                  {idx !== sections.length - 1 && (
                    <div className="mt-6 pt-4">
                      <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* Update Notification */}
              <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FaDatabase className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Version History
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      These Terms were last updated on September 25, 2025.
                      Previous versions are available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Button */}
            <div className="mt-8 text-center animate-fadeInUp animation-delay-800">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <FaCheckCircle className="text-lg" />
                I Accept the Terms & Conditions
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                By continuing to use our services, you agree to these terms
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

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default TermsConditions;
