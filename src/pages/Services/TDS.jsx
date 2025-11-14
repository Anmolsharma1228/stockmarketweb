import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaFileAlt,
  FaRegClock,
  FaCheckCircle,
  FaRegLightbulb,
  FaClipboardList,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";

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

const TDS = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 TDS Return Filing Services in India
        <br />
        <span className="text-[#FF4655]">
          Complete Guide by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaRegLightbulb}>
        <p>
          Tax Deducted at Source (TDS) is a mechanism under the <span className="font-semibold">Income Tax Act, 1961</span> where tax is deducted at the time of payment. Businesses, employers, and professionals making specified payments (like salaries, rent, contractor fees, interest, etc.) must deduct TDS and file TDS returns with the Income Tax Department.
        </p>
      </Section>

      {/* Why TDS Filing is Important */}
      <Section title="Why TDS Filing is Important" icon={FaCheckCircle}>
        <ul className="list-disc pl-6 space-y-2">
          <li>It is a legal obligation under the Income Tax Act.</li>
          <li>Ensures proper credit to deductees</li>
          <li>Avoids interest & penalties</li>
          <li>Helps businesses maintain clean tax records</li>
        </ul>
      </Section>

      {/* Types of TDS Returns */}
      <Section title="Types of TDS Returns" icon={FaClipboardList}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Form 24Q:</span> salaries.
          </li>
          <li>
            <span className="font-semibold">Form 26Q:</span> Non-salary domestic payments.
          </li>
          <li>
            <span className="font-semibold">Form 27Q:</span> Payments to non-residents.
          </li>
          <li>
            <span className="font-semibold">Form 27EQ:</span> TCS returns
          </li>
        </ul>
      </Section>

      {/* Due Dates */}
      <Section title="Due Dates for TDS Filing" icon={FaRegClock}>
        <ul className="list-disc pl-6 space-y-1">
          <li>Quarterly filing required</li>
          <li>31st July, 31st October, 31st January, 31st May</li>
        </ul>
      </Section>

      {/* Penalties for Non-Compliance */}
      <Section title="Penalties for Non-Compliance" icon={ImCross}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
          Late filing fee u/s 234E: ₹200 per day
          </li>
          <li>
            Penalty u/s 271H: ₹10,000–₹1,00,000
          </li>
          <li>
            Interest for late deposit of TDS
          </li>
        </ul>
      </Section>

      {/* Documents Required */}
      <Section title="Documents Required" icon={FaBalanceScale}>
        <ul className="list-disc pl-6 space-y-2">
          <li>TAN & PAN</li>
          <li>Challan details</li>
          <li>Deductee details (PAN, amount, section)</li>
        </ul>
      </Section>

      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaRegLightbulb}>
        <ul className="list-disc pl-6 space-y-2">
          <li>TDS calculation & challan preparation</li>
          <li>Timely filing of quarterly returns</li>
          <li>Correction of defaults in TRACES</li>
          <li>Advisory on TDS applicability</li>
        </ul>
      </Section>
    </div>
  );
};

export default TDS;
