import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StartUpFAQ from "../../components/FAQ/StartUpFAQ";
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

const StartUpReg = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444] font-jost leading-relaxed">
      {/* Main Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 Startup Registration Services in India
        <br />
        <span className="text-[#FF4655]">
          Complete Guide by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaBuilding}>
        <p>
          Starting a business in India is exciting, but one of the first and
          most important decisions is{" "}
          <strong>choosing the right business structure.</strong> Your choice
          will affect taxation, compliance, liability, funding, and long-term
          scalability.
        </p>
        <p className="mt-3">
          At <strong>Fintaxion Consulting,</strong> we help entrepreneurs and
          businesses choose and register the most suitable entity — whether it’s
          a{" "}
          <strong>
            Proprietorship, Partnership, LLP, Private/Public Company, OPC, NGO,
            Trust, Society, or HUF.
          </strong>{" "}
          From documentation to approvals, we provide{" "}
          <strong>end-to-end registration services.</strong>
        </p>
      </Section>

      {/* Why Register */}
      <Section title="Why Register a Business in India?" icon={FaLightbulb}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Legal Identity:</span> Separates
            business from the individual.
          </li>
          <li>
            <span className="font-semibold">Banking & Finance:</span> Mandatory
            for current accounts, loans, and funding.
          </li>
          <li>
            <span className="font-semibold">Tax Benefits:</span> Registered
            entities enjoy exemptions, deductions, and credibility with the
            Income Tax Department.
          </li>
          <li>
            <span className="font-semibold">Limited Liability:</span> In LLPs
            and companies, liability is limited to capital investment.
          </li>
          <li>
            <span className="font-semibold">Credibility & Growth:</span>{" "}
            Essential for scaling, entering contracts, and attracting investors.
          </li>
        </ul>
      </Section>

      {/* Types of Registration */}
      <Section
        title="Types of Business Registrations in India"
        icon={FaClipboardList}
      >
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Proprietorship</span> — Simplest
            form of business — ideal for small traders, freelancers, and
            single-owner businesses.{" "}
            <Link
              to="/Services/StartUpReg/Proprietorship"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">Partnership Firm</span> — Two or
            more individuals forming a business under a Partnership Deed.{" "}
            <Link
              to="/Services/StartUpReg/PartnershipFirm"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">
              LLP (Limited Liability Partnership)
            </span>{" "}
            — Hybrid of company and partnership with limited liability, governed
            by the LLP Act, 2008.{" "}
            <Link
              to="/Services/StartUpReg/LLPRegistration"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">Private Limited Company</span> —
            Most popular structure for startups, governed by the Companies Act,
            2013.
            <Link
              to="/Services/StartUpReg/PrivateLtdCompany"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">Public Limited Company</span> — For
            businesses planning large operations and funding via public
            investment.{" "}
            <Link
              to="/Services/StartUpReg/PublicLtdCompany"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">One Person Company (OPC)</span> —
            Special entity allowing a single founder to enjoy limited liability
            <Link
              to="/Services/StartUpReg/OnePersonCompany"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">
              NGO/Trust/Society/Section 8 Company
            </span>{" "}
            — For social, charitable, or non-profit activities.{" "}
            <Link
              to="/Services/StartUpReg/NgoTrust"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
          <li>
            <span className="font-semibold">HUF (Hindu Undivided Family)</span>{" "}
            — Traditional Indian entity for family-owned businesses and tax
            management.{" "}
            <Link
              to="/Services/StartUpReg/HUF"
              className="text-red-500 font-bold underline"
            >
              Learn More
            </Link>
          </li>
        </ol>
      </Section>

      {/* Comparative Table */}
      <Section title="Comparative Table of Entities" icon={FaBalanceScale}>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-center border-gray-300">
            <thead className="bg-[#37517E] text-white">
              <tr>
                <th className="p-2 border">Entity Type</th>
                <th className="p-2 border">Minimum Members</th>
                <th className="p-2 border">Liability</th>
                <th className="p-2 border">Taxation</th>
                <th className="p-2 border">Compliance</th>
                <th className="p-2 border">Best For</th>
              </tr>
            </thead>
            <tbody className="bg-white/70">
              <tr>
                <td className="border p-2">Proprietorship</td>
                <td className="border p-2">1</td>
                <td className="border p-2">Unlimited</td>
                <td className="border p-2">Individual slab</td>
                <td className="border p-2">Low</td>
                <td className="border p-2">Small traders/freelancers</td>
              </tr>
              <tr>
                <td className="border p-2">Partnership</td>
                <td className="border p-2">2+</td>
                <td className="border p-2">Unlimited</td>
                <td className="border p-2">Firm taxation</td>
                <td className="border p-2">Low-Medium</td>
                <td className="border p-2">Small-Businesses</td>
              </tr>
              <tr>
                <td className="border p-2">LLP</td>
                <td className="border p-2">2+</td>
                <td className="border p-2">Limited</td>
                <td className="border p-2">Taxation</td>
                <td className="border p-2">Medium</td>
                <td className="border p-2">Professional, Consultants</td>
              </tr>
              <tr>
                <td className="border p-2">Pvt Ltd</td>
                <td className="border p-2">2-200</td>
                <td className="border p-2">Limited</td>
                <td className="border p-2">Corporate tax</td>
                <td className="border p-2">High</td>
                <td className="border p-2">Startups, scalable businesses</td>
              </tr>
              <tr>
                <td className="border p-2">Public Ltd</td>
                <td className="border p-2">7+</td>
                <td className="border p-2">Limited</td>
                <td className="border p-2">Corporate tax</td>
                <td className="border p-2">Very High</td>
                <td className="border p-2">Large businesses, IPOs</td>
              </tr>
              <tr>
                <td className="border p-2">OPC</td>
                <td className="border p-2">1</td>
                <td className="border p-2">Limited</td>
                <td className="border p-2">Corporate tax</td>
                <td className="border p-2">Medium</td>
                <td className="border p-2">Solo founders</td>
              </tr>
              <tr>
                <td className="border p-2">NGO/Trust/Society/Section 8</td>
                <td className="border p-2">Varies</td>
                <td className="border p-2">Limited</td>
                <td className="border p-2">Tax exemptions</td>
                <td className="border p-2">High</td>
                <td className="border p-2">Social work</td>
              </tr>
              <tr>
                <td className="border p-2">HUF</td>
                <td className="border p-2">2+ (family)</td>
                <td className="border p-2">Unlimited</td>
                <td className="border p-2">HUF slab rates</td>
                <td className="border p-2">Low</td>
                <td className="border p-2">Family businesses, tax planning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* How Fintaxion Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaUserTie}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Entity selection advisory:</span>{" "}
            Which structure is right for your goals.
          </li>
          <li>
            <span className="font-semibold">End-to-end registration:</span> From
            (DSC, DIN, PAN, GST, Bank A/c).
          </li>
          <li>
            <span className="font-semibold">Tax & Compliance Support:</span>{" "}
            Ensure smooth operations post-registration.
          </li>
          <li>
            <span className="font-semibold">Startup India Registration:</span>{" "}
            Benefits like tax holidays, funding schemes.
          </li>{" "}
          className="font-semibold"
        </ul>
      </Section>
      <StartUpFAQ />
    </div>
  );
};

export default StartUpReg;
