import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FAQRoc from "../../components/FAQ/FAQRoc";
import {
  FaBuilding,
  FaClipboardList,
  FaChartLine,
  FaHandshake,
  FaRegClock,
  FaUserTie,
  FaBalanceScale,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaFileInvoiceDollar,
  FaIndustry,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Reusable Section Component
const Section = ({ title, icon: Icon, children }) => (
  <motion.section
    className="mt-10 bg-white/5 rounded-2xl p-6 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 40 }}
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

const AllRoc = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444] font-jost leading-relaxed">
      {/* Main Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 ROC/MCA Compliance Services in India – Complete Guide
        <br />
        <span className="text-[#FF4655]">
          Complete Guide by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaBuilding}>
        <p>
         Every company and Limited Liability Partnership (LLP) registered in India is governed by strict compliance requirements under the <strong>Companies Act, 2013</strong> and the <strong>LLP Act, 2008.</strong> These compliances are monitored by the <strong>Ministry of Corporate Affairs (MCA)</strong> through the <strong>Registrar of Companies (ROC).</strong>
        </p>
        <p className="mt-3">
          At <strong>Fintaxion Consulting,</strong> we specialize in <strong>end-to-end ROC/MCA compliance services</strong> — from annual filings and director KYC to event-based filings like appointment/resignation of directors, change of registered office, and increase in share capital. Our goal is simple: to ensure your business stays 100% compliant while you focus on growth.
        </p>
      </Section>

      {/* Why is ROC Compliance Important? */}
      <Section title="Why is ROC Compliance Important?" icon={FaLightbulb}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Legal Mandate:</span> Every registered company/LLP must file annual returns and event-based forms with the ROC.
          </li>
          <li>
            <span className="font-semibold">Avoiding Penalties:</span> Non-compliance attracts heavy late fees (₹100 per day) and directors’ disqualification.
          </li>
          <li>
            <span className="font-semibold">ransparency & Governance:</span> Annual filings ensure proper disclosure to stakeholders and government.
            Income Tax Department.
          </li>
          <li>
            <span className="font-semibold">Investor Confidence:</span> Investors and banks rely on ROC records to assess your company’s credibility.
          </li>
          <li>
            <span className="font-semibold">Smooth Business Operations:</span> Without compliance, you cannot raise capital, expand business, or close operations legally.
          </li>
        </ul>
      </Section>

      {/* Categories of ROC/MCA Compliance */}
<Section title="Categories of ROC/MCA Compliance" icon={FaClipboardList}>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Annual Compliances */}
    <div className="bg-white/60 p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-[#37517E] mb-3">Annual Compliances</h3>
      <ul className="list-disc pl-4 space-y-2 text-[15px] text-[#444]">
        <li>Annual returns & financial statements filing.</li>
        <li>Companies: AOC-4, MGT-7/MGT-7A, XBRL filings.</li>
        <li>LLPs: Form 8, Form 11.</li>
        <li className="text-[#FF4655] font-semibold">Includes Annual Filing for Companies & LLPs.</li>
      </ul>
    </div>

    {/* Event-Based Compliances */}
    <div className="bg-white/60 p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-[#37517E] mb-3">Event-Based Compliances</h3>
      <ul className="list-disc space-y-2 pl-4 text-[15px] text-[#444]">
        <li>Director/Partner appointment or resignation.</li>
        <li>Change in registered office.</li>
        <li>Increase in authorized share capital.</li>
        <li>Change in shareholding or LLP agreement.</li>
        <li>Charge creation/modification.</li>
        <li>Conversions: OPC → Pvt, Pvt → LLP.</li>
        <li className="text-[#FF4655] font-semibold">Includes all event-based filing guides.</li>
      </ul>
    </div>

    {/* Director KYC */}
    <div className="bg-white/60 p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-[#37517E] mb-3">Director KYC (DIR-3 KYC)</h3>
      <ul className="list-disc space-y-2 pl-4 text-[15px] text-[#444]">
        <li>Mandatory annual KYC for all DIN holders.</li>
        <li>Options: DIR-3 KYC (Web) & DIR-3 KYC (Form).</li>
        <li>Penalty for non-filing: ₹5,000 + DIN deactivation.</li>
        <li className="text-[#FF4655] font-semibold">Fully explained in Director KYC subpage.</li>
      </ul>
    </div>

    {/* Corporate & Secretarial Support */}
    <div className="bg-white/60 p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-[#37517E] mb-3">Corporate Tax & Secretarial Support</h3>
      <ul className="list-disc space-y-2 pl-4 text-[15px] text-[#444]">
        <li>Corporate Income Tax filing.</li>
        <li>Maintaining statutory registers.</li>
        <li>Drafting resolutions & minutes.</li>
        <li>Secretarial audit for listed/public companies.</li>
        <li className="text-[#FF4655] font-semibold">End-to-end tax + compliance support.</li>
      </ul>
    </div>
  </div>
</Section>

{/* Penalties */}
      <Section title="Penalties for Non-Compliance" icon={ImCross}>
        <p className="my-2"> 1. Failure to comply with ROC requirements can have severe consequences</p>
          <p className="font-semibold my-2">For Companies</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Late filing of AOC-4/MGT-7: </strong> ₹100 per day.</li>
          <li>Director disqualification under Section 164(2).</li>
          <li>Prosecution for persistent default.</li>
        </ul>
        <p className="font-semibold my-2">For LLPs</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Late filing of Form 8 or 11: </strong> ₹100 per day.</li>
          <li>Risk of LLP being struck off by MCA.</li>
        </ul>
        <p className="font-semibold my-2">For Directors</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Non-filing of DIR-3 KYC: ₹5,000 penalty + DIN deactivation.</li>
        </ul>
        <p className="text-center mt-6 text-lg">👉 Non-compliance doesn’t just mean money loss — it can <strong>paralyze your business operations.</strong></p>
      </Section>


      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaUserTie}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Annual Filing Experts: </span>Timely filing of AOC-4, MGT-7, Form 8, Form 11.
          </li>
          <li>
            <span className="font-semibold">Event-Based Compliance: </span> We handle director changes, address changes, share capital increase, and more.
          </li>
          <li>
            <span className="font-semibold">Secretarial Services: </span>Drafting resolutions, maintaining registers, and advisory.
          </li>
          <li>
            <span className="font-semibold">Tax + ROC Integration: </span>
           Single-window solution for MCA + Income Tax compliance.
          </li>
          <li><span className="font-semibold">Penalty Avoidance: </span>
          Proactive monitoring of deadlines.</li>
        </ul>
      </Section>
      <FAQRoc />
    </div>
  );
};

export default AllRoc;
