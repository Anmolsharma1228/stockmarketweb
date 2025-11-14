import React from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaUsersCog,
  FaUserShield,
  FaRegClipboard,
  FaCheckCircle,
  FaBuilding,
  FaUserCheck,
  FaExclamationTriangle,
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

const ESICreg = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 ESIC & PF Registration and Return Filing Services
        <br />
        <span className="text-[#FF4655]">
          Simplify Employee Compliance with Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaFileAlt}>
        <p>
          Under the <span className="font-semibold">ESI Act, 1948</span> and the <span className="font-semibold">EPF Act, 1952,</span> employers are required to register employees for <span className="font-semibold">ESI (health insurance)</span> and <span className="font-semibold">EPF (retirement fund)</span> when employee strength and salary thresholds are met.
        </p>
      </Section>

      {/* Applicability */}
      <Section title="Applicability" icon={FaUsersCog}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">ESIC:</span> Establishments with 10+ employees earning ≤ ₹21,000/month
          </li>
          <li>
            <span className="font-semibold">EPF:</span> Establishments with 20+ employees
          </li>
        </ul>
      </Section>

      {/* Benefits to Employees */}
      <Section title="Benefits to Employees" icon={FaUserShield}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">ESIC:</span> Medical, maternity, sickness benefits
          </li>
          <li>
            <span className="font-semibold">EPF:</span> Retirement corpus, pension, insurance
          </li>
        </ul>
      </Section>

      {/* Employer’s Obligations */}
      <Section title="Employer’s Obligations" icon={FaBuilding}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Register establishment & employees.</li>
          <li>Deduct and deposit contributions.</li>
          <li>File monthly & annual returns.</li>
        </ul>
      </Section>

      {/* Documents Required */}
      <Section title="Documents Required" icon={FaRegClipboard}>
        <ul className="list-disc pl-6 space-y-2">
          <li>PAN and Certificate of Incorporation of the company/LLP</li>
          <li>Bank account details of the organization</li>
          <li>Employee details including Aadhaar, PAN, and salary breakup</li>
        </ul>
      </Section>

      {/* Penalties */}
      <Section title="Penalties for Non-Compliance" icon={FaExclamationTriangle}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Non-registration attracts fines.</li>
          <li>
            	Delay in contribution → Interest @12% + penalty.
          </li>
        </ul>
      </Section>

      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Helps" icon={FaUserCheck}>
        <ul className="list-disc pl-6 space-y-2">
          <li>ESIC & PF registration with authorities.</li>
          <li>Monthly return filings.</li>
          <li>Employee compliance management and advisory support.</li>
        </ul>
      </Section>
    </div>
  );
};

export default ESICreg;
