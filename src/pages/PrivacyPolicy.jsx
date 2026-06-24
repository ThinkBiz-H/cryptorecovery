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
  FaFileContract,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: "collect",
      title: "What Information We Collect",
      icon: <FaDatabase />,
    },
    { id: "use", title: "How We Use Your Information", icon: <FaChartLine /> },
    { id: "legal", title: "Legal Basis for Processing", icon: <FaGavel /> },
    {
      id: "share",
      title: "Who We Share Your Information With",
      icon: <FaUsers />,
    },
    {
      id: "keep",
      title: "How Long We Keep Your Information",
      icon: <FaCalendarAlt />,
    },
    {
      id: "safe",
      title: "How We Keep Your Information Safe",
      icon: <FaLock />,
    },
    { id: "ads", title: "Advertising and Analytics", icon: <FaGlobe /> },
    { id: "rights", title: "Your Privacy Rights", icon: <FaShieldAlt /> },
    { id: "minors", title: "Minors", icon: <FaUserSecret /> },
    { id: "dnt", title: "Do-Not-Track Signals", icon: <FaCookie /> },
    { id: "updates", title: "Updates to This Policy", icon: <FaFileAlt /> },
    { id: "contact", title: "Contact Us", icon: <FaEnvelope /> },
  ];
  const content = {
    collect: (
      <>
        <p>
          Information you provide directly: When you contact us or engage our
          services, we may collect your name, email address, phone number, and
          the technical details you share about your wallet situation (such as
          your wallet type and any password hints). We also collect financial
          data necessary to verify and complete a recovery.
        </p>

        <p>
          Information collected automatically: When you visit our website, we
          automatically collect standard technical data including your IP
          address, browser type, device type, operating system, pages visited,
          and timestamps. This data is used for security, analytics, and website
          performance — not for profiling or targeted advertising beyond what is
          disclosed in this policy.
        </p>

        <p>
          We do not purchase or import data about you from third-party data
          brokers.
        </p>
      </>
    ),

    use: (
      <>
        <p>
          We use your information to respond to your inquiries, assess and
          perform wallet recovery services, communicate with you about your
          case, maintain the security and integrity of our systems, and improve
          our website and services. We may also use your email address to send
          relevant updates about your case and, with your permission, occasional
          service-related communications. You can opt out of non-essential
          communications at any time.
        </p>
      </>
    ),

    legal: (
      <>
        <p>
          If you are located in the European Economic Area or United Kingdom, we
          process your personal information under the following legal bases: (a)
          your consent, where given; (b) performance of a contract, where you
          have engaged our services; (c) our legitimate business interests,
          where these do not override your fundamental rights; and (d)
          compliance with legal obligations. You may withdraw consent at any
          time by contacting us.
        </p>
      </>
    ),

    share: (
      <>
        <p>
          We share your information only with the service providers necessary to
          operate our website: Google Analytics (web analytics), Cloudflare
          (website hosting and performance monitoring). We do not share client
          recovery materials — wallet files, password details, seed phrase
          fragments — with any third party under any circumstances. We may
          disclose information if required by law, court order, or to protect
          our legal rights.
        </p>
      </>
    ),

    keep: (
      <p>
        We retain your personal information for no longer than two years, or as
        long as necessary to fulfill the purposes outlined in this policy. When
        your case is closed and all business requirements are met, we securely
        delete your information. Client recovery materials are permanently
        deleted upon case closure.
      </p>
    ),

    safe: (
      <p>
        Recovery work is performed on air-gapped servers — machines that are
        permanently disconnected from the internet. Client wallet files and
        recovery details are encrypted at rest. We do not transmit sensitive
        client materials over the internet. We apply organizational and
        technical security measures consistent with industry best practice. No
        system is 100% impenetrable, but our infrastructure is specifically
        designed to minimize exposure of your most sensitive information.
      </p>
    ),

    ads: (
      <p>
        We use Meta Business Tools (including Meta Pixel and Conversions API)
        for advertising measurement and audience targeting. These tools may
        collect page view events, technical browser data, and optionally hashed
        contact identifiers (email or phone) for audience matching. We never
        share seed phrases, private keys, wallet backups, password hints, or
        other sensitive recovery materials with Meta or any advertising partner.
        In the EEA and UK, we activate these tools only with your opt-in
        consent. In the US, you may opt out of the sharing of your data for
        cross-context behavioral advertising through our Privacy Choices page.
        Meta may retain event data for up to two years under its own terms.
      </p>
    ),

    rights: (
      <>
        {" "}
        <p>
          Depending on your location, you may have the right to access the
          personal data we hold about you, request correction or deletion of
          that data, restrict or object to our processing, and request data
          portability. To exercise any of these rights, contact us at
          info@cryptoassetrecovery.com or visit cryptoassetrecovery.com/contact.
        </p>
        <p>
          California residents have additional rights under the CCPA/CPRA,
          including the right to know what personal information we collect and
          share, the right to deletion, and the right to opt out of the sale or
          sharing of your data for advertising purposes. We do not sell personal
          data. We have not sold personal information to any third party in the
          preceding 12 months.
        </p>
        <p>
          EEA and UK residents may lodge a complaint with their local data
          protection supervisory authority if they believe we are processing
          their data unlawfully.
        </p>
      </>
    ),

    minors: (
      <p>
        Our services are not directed at individuals under 18 years of age. We
        do not knowingly collect personal information from minors. If we
        discover we have inadvertently collected data from someone under 18, we
        will promptly delete it. Please contact us at
        info@cryptoassetrecovery.com if you believe this has occurred.
      </p>
    ),

    dnt: (
      <p>
        At this time, we do not respond to browser-level Do-Not-Track signals,
        as no uniform standard for these signals has been established. We do
        honor Global Privacy Control (GPC) opt-out signals where required by
        applicable law
      </p>
    ),

    updates: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or applicable law. The 'Last updated' date at the top
        of this page reflects the most recent revision. We encourage you to
        review this policy periodically. Material changes will be communicated
        via the website.
      </p>
    ),

    contact: (
      <div className="space-y-4">
        <p>
          For privacy-related questions, requests, or complaints, please contact
          us using the details below. We will respond to all requests within a
          reasonable timeframe in accordance with applicable data protection
          law.
        </p>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-blue-500 mt-1" />
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:info@cryptoassetrecovery.com"
              className="hover:text-blue-500 transition"
            >
              info@cryptoassetrecovery.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-4">
          <FaPhone className="text-blue-500 mt-1" />
          <div>
            <p className="font-semibold">Phone</p>
            <a
              href="tel:+18323043083"
              className="hover:text-blue-500 transition"
            >
              +1 (832) 304-3083
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-red-500 mt-1" />
          <div>
            <p className="font-semibold">Mailing Address</p>
            <p>
              CRYPTOASSETRECOVERY.COM, LLC
              <br />
              5 Ross Rd.
              <br />
              Durham, NH 03824
              <br />
              United States
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          We will respond to all requests within a reasonable timeframe in
          accordance with applicable data protection law.
        </p>
      </div>
    ),
  };
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
      <section className="relative overflow-hidden py-20 px-6 border-b border-gray-200 dark:border-gray-800  bg-gray-900">
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
            Last updated: September 25, 2025 — CRYPTOASSETRECOVERY.COM, LLC
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
              <Link
                to="/terms-conditions"
                className="block p-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FaFileContract className="text-3xl mx-auto mb-3" />
                <p className="text-base font-bold">Terms & Conditions</p>
                <p className="text-sm opacity-90 mt-1">
                  By accessing our website and services, you agree to our terms
                  and policies.
                </p>
              </Link>
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

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy explains how CRYPTOASSETRECOVERY.COM, LLC
                  collects, uses, and protects your personal information when
                  you visit our website or engage our services. We take your
                  privacy seriously, especially given the sensitive nature of
                  cryptocurrency recovery services.
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
                    {content[section.id]}
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
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <FaCheckCircle className="text-lg" />
                I Understand and Agree
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
