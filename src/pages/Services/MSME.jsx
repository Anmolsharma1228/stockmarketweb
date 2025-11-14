import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaFileAlt,
  FaRegClock,
  FaCheckCircle,
  FaRegLightbulb,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";

const Section = ({ title, icon: Icon, children }) => (
  <motion.section
    className="mt-16 bg-white/5 rounded-2xl p-6 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-[#FF4655] mb-4">
      {Icon && <Icon className="text-[#37517E]" />}
      {title}
    </h2>
    <div className="text-[15px] sm:text-[16px] text-[#444] leading-relaxed">
      {children}
    </div>
  </motion.section>
);

const MSME = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 MSME (Udyam) Registration Services
        <br />
        <span className="text-[#FF4655]">
          Complete Assistance by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaRegLightbulb}>
        <p>
          The Government of India offers MSME/Udyam Registration to promote Micro, Small, and Medium Enterprises. It provides businesses with recognition and access to benefits like subsidies, credit, and tax incentives.
        </p>
      </Section>

      {/* Benefits */}
      <Section title="Benefits of MSME Registration" icon={FaCheckCircle}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Collateral-free loans</li>
          <li>Subsidy on patent and trademark fees</li>
          <li>Priority in government tenders</li>
          <li>Lower electricity bills (in some states)</li>
          <li>Credit linked capital subsidy</li>
        </ul>
      </Section>

      {/* Eligibility */}
      <Section title="Eligibility Criteria" icon={FaBalanceScale}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Micro Enterprise:</span> Investment ≤
            ₹1 crore, Turnover ≤ ₹5 crore
          </li>
          <li>
            <span className="font-semibold">Small Enterprise:</span> Investment ≤
            ₹10 crore, Turnover ≤ ₹50 crore
          </li>
          <li>
            <span className="font-semibold">Medium Enterprise:</span> Investment
            ≤ ₹50 crore, Turnover ≤ ₹250 crore
          </li>
        </ul>
      </Section>

      {/* Process */}
      <Section title="Process of Registration" icon={FaClipboardList}>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Aadhaar authentication of proprietor, partners, or directors</li>
          <li>PAN & GST linkage</li>
          <li>Online application on Udyam portal</li>
          <li>Generation of MSME certificate</li>
        </ol>
      </Section>

      {/* Documents Required */}
      <Section title="Documents Required" icon={FaFileAlt}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aadhaar & PAN</li>
          <li>Business address proof</li>
          <li>Bank details</li>
          <li>Turnover & investment details</li>
        </ul>
      </Section>

      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaUserCheck}>
        <ul className="list-disc pl-6 space-y-2">
          <li>End-to-end MSME (Udyam) registration support</li>
          <li>Updating details in Udyam certificate</li>
          <li>Advisory on MSME schemes & benefits</li>
        </ul>
      </Section>

     
    </div>
  );
};

export default MSME;
