import React from "react";
import { motion } from "framer-motion";
import {
  FaFileSignature,
  FaIdCard,
  FaRegClock,
  FaCheckCircle,
  FaFileAlt,
  FaUserCheck,
  FaLock,
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

const DigitalSig = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 Digital Signature Certificate (DSC) Services
        <br />
        <span className="text-[#FF4655]">
          Secure Digital Authentication by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaLock}>
        <p>
         A Digital Signature Certificate (DSC) is the digital equivalent of a physical signature used for online filings with MCA, GST, Income Tax, and other government portals. Issued under the Information Technology Act, 2000, it ensures authenticity and security.
        </p>
        <p className="mt-4">
          A DSC ensures both <span className="font-semibold">authenticity and data integrity</span>,
          making digital transactions legally valid and tamper-proof.
        </p>
      </Section>

      {/* Types of DSC */}
      <Section title="Types of DSC" icon={FaFileSignature}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Class 2 DSC:</span> For filing ITR,
            GST, MCA, and ROC forms.
          </li>
          <li>
            <span className="font-semibold">Class 3 DSC:</span> For e-tenders,
            e-auctions, and other high-security transactions.
          </li>
        </ul>
      </Section>

      {/* Validity */}
      <Section title="Validity" icon={FaRegClock}>
        <ul className="list-disc pl-6">
          <li>1 year, 2 years, or 3 years</li>
        </ul>
      </Section>

      {/* Documents Required */}
      <Section title="Documents Required" icon={FaFileAlt}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aadhaar Card and PAN Card</li>
          <li>Recent passport-size photograph</li>
          <li>Active Email ID and Mobile Number</li>
        </ul>
      </Section>

      {/* Uses of DSC */}
      <Section title="Uses of Digital Signature Certificate" icon={FaIdCard}>
        <ul className="list-disc pl-6 space-y-2">
          <li>MCA/ROC filings for companies and LLPs</li>
          <li>GST filing</li>
          <li>Income Tax filings (company ITRs)</li>
          <li>EPF, ESIC filings</li>
          <li>E-tendering & procurement</li>
        </ul>
      </Section>

      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaUserCheck}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Issuance of DSC within 24–48 hours</li>
          <li>Renewal support</li>
          <li>Assistance with installation & token setup</li>
        </ul>
      </Section>

      
    </div>
  );
};

export default DigitalSig;
