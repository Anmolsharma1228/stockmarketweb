import React from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/FAQ/GSTFAQSection"; 
import {
  FaBalanceScale,
  FaFileAlt,
  FaRegClock,
  FaCheckCircle,
  FaRegLightbulb,
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

const GSTreg = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 GST Registration & Returns
        <br />
        <span className="text-[#FF4655]">
          Complete Guide by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Introduction */}
      <Section title="Introduction" icon={FaRegLightbulb}>
        <p>
          The <span className="font-semibold">Goods and Services Tax (GST)</span> is India’s most significant indirect
          tax reform, introduced in <span className="font-semibold">2017 under the GST Act.</span> It replaced multiple
          state and central taxes, bringing the entire nation under a <span className="font-semibold"> “One
          Nation, One Tax” </span>system.
        </p>
        <p className="mt-3">
          For businesses, GST registration and timely return filing are not just
          legal obligations — they are critical for maintaining credibility,
          claiming Input Tax Credit (ITC), and avoiding penalties.
        </p>
        <p className="mt-3">
          <span className="font-semibold">At Fintaxion Consulting,</span> we
          provide end-to-end GST services: from registration, amendments, and
          return filing to cancellation and audits. Our aim is to ensure your
          business stays compliant and focused on growth.
        </p>
      </Section>

      {/* Why GST Registration is Important */}
      <Section title="Why GST Registration is Important" icon={FaCheckCircle}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Legal Mandate:</span> Businesses
            crossing turnover thresholds must register; non-compliance invites
            penalties.
          </li>
          <li>
            <span className="font-semibold">Input Tax Credit (ITC):</span> Only
            registered businesses can claim ITC and reduce tax liability.
          </li>
          <li>
            <span className="font-semibold">Business Expansion:</span> GSTIN is
            mandatory for e-commerce, exports, and inter-state supply.
          </li>
          <li>
            <span className="font-semibold">Credibility:</span> Registered
            businesses gain trust from clients, suppliers, and banks.
          </li>
          <li>
            <span className="font-semibold">Government Benefits:</span> Eligible
            for MSME schemes, export incentives, and tenders.
          </li>
        </ul>
      </Section>

      {/* Who Needs GST Registration */}
      <Section title="Who Needs GST Registration?" icon={FaBalanceScale}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Turnover above threshold:</span>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Goods – ₹40 lakh (₹20 lakh in special states)</li>
              <li>Services – ₹20 lakh (₹10 lakh in special states)</li>
            </ul>
          </li>
          <li>Inter-state suppliers</li>
          <li>E-commerce sellers & operators</li>
          <li>Casual taxable persons</li>
          <li>Voluntary registration for startups & small businesses</li>
        </ul>
      </Section>

      {/* GST Registration Process */}
      <Section title="GST Registration Process (Step by Step)" icon={FaFileAlt}>
        <ol className="list-decimal pl-6 space-y-2">
          <li>PAN of business & promoter</li>
          <li>Aadhaar of promoter</li>
          <li>Business address proof (rent/ownership docs)</li>
          <li>Bank details & cancelled cheque</li>
          <li>Incorporation certificate (if company/LLP)</li>
          <li>Online Application on GST Portal</li>
          <li>ARN Generation after submission</li>
          <li>Verification by GST Officer</li>
          <li>GSTIN Allotment – 15-digit number</li>
          <li>Certificate Issuance from GST portal</li>
        </ol>
      </Section>

      {/* Amendments in GST */}
      <Section title="Amendments in GST Registration" icon={FaRegClock}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Addition of new place of business</li>
          <li>Change in promoters/partners</li>
          <li>Core & non-core amendments through GST portal</li>
        </ul>
      </Section>

      {/* GST Cancellation */}
      <Section title="GST Cancellation" icon={ImCross}>
        <p>
          GST can be cancelled voluntarily, suo-moto by department, or when
          turnover falls below threshold. After cancellation, final return
          (GSTR-10) must be filed.
        </p>
      </Section>

      {/* GST Returns */}
      <Section title="GST Returns – Types & Due Dates" icon={FaFileAlt}>
        <ul className="list-disc pl-6 space-y-1">
          <li>GSTR-1: Outward supplies (monthly/quarterly)</li>
          <li>GSTR-3B: Summary return of sales, ITC, and tax liability</li>
          <li>GSTR-4: For composition scheme taxpayers</li>
          <li>GSTR-9: Annual return</li>
          <li>
            GSTR-9C: Audit/reconciliation statement (if turnover &gt; ₹5 crore)
          </li>
        </ul>
      </Section>

      {/* Penalties */}
      <Section title="Penalties for Non-Compliance" icon={ImCross}>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Late Fees:</strong> ₹50/day (₹20/day for nil return)</li>
          <li><strong>Interest: </strong>18% per annum on unpaid tax</li>
          <li>ITC Blockage for non-filing</li>
          <li>Cancellation of GSTIN for persistent default</li>
        </ul>
      </Section>

      {/* Case Study */}
      <Section title="Case Study" icon={FaBalanceScale}>
        <p className="font-semibold mb-2">Case Study – Small Trader in Delhi</p>
        <p>
          Arun, a small trader, voluntarily registered for GST to sell on
          Amazon. Initially, he missed filing GSTR-3B and accumulated penalties.
          Fintaxion Consulting stepped in, rectified returns, claimed ITC, and
          restored his GST compliance — saving over ₹1.2 lakh in penalties.
        </p>
      </Section>

      {/* Common Mistakes */}
      <Section title="Common Mistakes to Avoid" icon={ImCross}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Not filing nil returns</li>
          <li>Claiming ineligible ITC</li>
          <li>Mismatch between GSTR-1 & 3B</li>
          <li>Ignoring notices on GST portal</li>
          <li>Not applying for cancellation after business closure</li>
        </ul>
      </Section>

      {/* How Fintaxion Consulting Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaRegLightbulb}>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Registration: </span>Smooth GST registration process</li>
          <li><span className="font-semibold">Return Filing: </span>Timely filing of GSTR-1, 3B, 9, etc.</li>
          <li><span className="font-semibold">ITC Reconciliation: </span>Avoid mismatches & loss of ITC credit</li>
          <li><span className="font-semibold">Notices & Audits: </span>Expert handling of GST notices & audits</li>
          <li><span className="font-semibold">Business Advisory: </span>Guidance on composition vs. regular scheme</li>
        </ul>
      </Section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Conclusion */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-2 sm:mx-10 text-lg">
          <h3 className="text-2xl text-center font-bold text-[#37517E] mb-3">
            Conclusion
          </h3>
          <p className="text-[#444444] mb-6">
            GST compliance is the backbone of modern business in India. With
            multiple forms, frequent changes in rules, and heavy penalties for
            default, it’s essential to have experts by your side.
          </p>
          <p className="text-[#444444] mb-6">
            At <span className="font-semibold">Fintaxion Consulting,</span> we
            take the GST burden off your shoulders, ensuring smooth
            registration, accurate filings, ITC benefits, and peace of mind.
          </p>
          <h3 className="font-semibold">
            👉 Contact Fintaxion Consulting today for hassle-free GST
            Registration and Return Filing in India.
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default GSTreg;
