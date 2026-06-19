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
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function TermsConditions() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: "who",
      title: "Who We Are and How to Reach Us",
      icon: <FaRegBuilding />,
    },
    { id: "eligibility", title: "Eligibility", icon: <FaUserCheck /> },
    { id: "ip", title: "Intellectual Property", icon: <FaShieldAlt /> },
    {
      id: "use",
      title: "Permitted Use and Prohibited Activities",
      icon: <FaBan />,
    },
    {
      id: "feedback",
      title: "User Submissions and Feedback",
      icon: <FaFileContract />,
    },
    {
      id: "thirdparty",
      title: "Third-Party Links and Services",
      icon: <FaDatabase />,
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      icon: <FaExclamationTriangle />,
    },
    { id: "liability", title: "Limitation of Liability", icon: <FaGavel /> },
    { id: "indemnification", title: "Indemnification", icon: <FaShieldAlt /> },
    {
      id: "ads",
      title: "Advertising and Analytics Tools",
      icon: <FaDatabase />,
    },
    {
      id: "law",
      title: "Governing Law and Dispute Resolution",
      icon: <FaGavel />,
    },
    {
      id: "updates",
      title: "Updates to These Terms",
      icon: <FaFileContract />,
    },
    { id: "contact", title: "Contact", icon: <FaEnvelope /> },
  ];
  const content = {
    who: (
      <p>
        We are CRYPTOASSETRECOVERY.COM, LLC, a registered limited liability
        company in the State of New Hampshire, United States. Our registered
        office is at 5 Ross Rd., Durham, NH 03824. You can reach us at
        info@cryptoassetrecovery.com or by phone at (970) 633-0680. These terms
        apply to the website and any related media, channels, or services
        associated with it.
      </p>
    ),

    eligibility: (
      <p>
        Our services are intended for individuals who are at least 18 years old.
        By using this site, you represent and warrant that you meet this age
        requirement, that you have the legal capacity to agree to these terms,
        and that your use of our services complies with all laws and regulations
        applicable in your jurisdiction.
      </p>
    ),

    ip: (
      <p>
        All content on this website — including text, graphics, software, logos,
        and design — is the proprietary property of CRYPTOASSETRECOVERY.COM, LLC
        or is licensed to us. You are granted a limited, non-commercial license
        to access and use the site for personal purposes. Reproduction,
        redistribution, modification, or commercial use of any content without
        our express written permission is prohibited.
      </p>
    ),

    use: (
      <p>
        You may use this website only for its intended purpose: learning about
        our recovery services and engaging with us to recover a wallet you
        legitimately own. You may not use the site to collect user data, engage
        in fraudulent activity, attempt to reverse-engineer our software,
        interfere with our systems, harass our staff, or use automated tools to
        scrape or interact with the site. We reserve the right to terminate
        access for any violation.
      </p>
    ),

    feedback: (
      <p>
        Any information, feedback, or suggestions you submit to us (outside of
        client engagement materials) may be used by us for any lawful purpose
        without compensation to you. Materials submitted as part of your
        recovery case are governed by our Privacy Policy and our service
        agreement.
      </p>
    ),

    thirdparty: (
      <p>
        Our website may contain links to third-party sites or services. We do
        not endorse, control, or take responsibility for the content or
        practices of any third-party websites. Following a third-party link is
        at your own risk, and we recommend reviewing the privacy policy of any
        external site before interacting with it.
      </p>
    ),

    disclaimer: (
      <p>
        This website and its contents are provided on an 'as is' and 'as
        available' basis. We make no warranties — express or implied — about the
        accuracy, completeness, or fitness for a particular purpose of any
        content on the site. We do not guarantee that the site will be
        uninterrupted, error-free, or free of harmful components. Recovery
        outcomes are not guaranteed; our 55% success rate reflects historical
        performance only.
      </p>
    ),

    liability: (
      <p>
        To the maximum extent permitted by applicable law,
        CRYPTOASSETRECOVERY.COM, LLC and its officers, directors, employees, and
        agents will not be liable for any indirect, incidental, consequential,
        special, or punitive damages arising out of your use of the site or our
        services. Our total liability to you for any claim will not exceed the
        amount you paid to us in the six months prior to the claim arising.
      </p>
    ),

    indemnification: (
      <p>
        You agree to indemnify and hold harmless CRYPTOASSETRECOVERY.COM, LLC
        and its team from any claims, losses, damages, or expenses (including
        reasonable legal fees) arising from your breach of these terms, your use
        of the site in violation of applicable law, or any misrepresentation you
        make in connection with our services.
      </p>
    ),

    ads: (
      <p>
        We use advertising and analytics tools, including Meta Business Tools
        such as the Meta Pixel and Conversions API. These tools may collect site
        event data, technical browser data, and optionally hashed contact
        identifiers for audience matching. We never transmit seed phrases,
        private keys, wallet backups, password information, or other sensitive
        client materials to any advertising partner. In the EEA and UK, we
        activate non-essential advertising tools only with your explicit
        consent. In the US, you may opt out of the sale or sharing of your data
        for cross-context behavioral advertising via our Privacy Choices page.
      </p>
    ),

    law: (
      <p>
        These terms are governed by the laws of the State of New Hampshire, USA.
        Any legal dispute arising from your use of this site shall be brought
        exclusively in the state or federal courts located in Strafford County,
        New Hampshire. You consent to the jurisdiction and venue of those
        courts.
      </p>
    ),

    updates: (
      <p>
        We may update these terms at any time. The 'Last updated' date at the
        top of this page reflects the most recent revision. Continued use of the
        site after changes are posted constitutes your acceptance of the updated
        terms. We recommend checking this page periodically.
      </p>
    ),

    contact: (
      <div className="space-y-4">
        <p>
          For questions about these Terms, please contact us using the details
          below.
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
          <span>
            CRYPTOASSETRECOVERY.COM, LLC
            <br />
            5 Ross Rd.
            <br />
            Durham, NH 03824
            <br />
            United States
          </span>
        </div>
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
              <span className="font-semibold">
                September 25, 2025 — CRYPTOASSETRECOVERY.COM, LLC
              </span>
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
            <Link
              to="/privacy-policy"
              className="block mt-4 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white text-center hover:scale-105 transition-all duration-300"
            >
              <FaUserShield className="text-3xl mx-auto mb-3 opacity-80" />
              <p className="text-sm font-semibold mb-1">Privacy Policy</p>
              <p className="text-xs opacity-80">
                Your privacy matters · Secure data handling
              </p>
            </Link>
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
                  {/* Section Content */}
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    {content[section.id]}
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
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <FaCheckCircle className="text-lg" />
                I Accept the Terms & Conditions
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
