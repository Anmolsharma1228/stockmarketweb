import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQSection from "../../components/FAQ/F&QSection.jsx";
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

const ITRS = () => {
  return (
    <div className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-[#37517E] leading-snug mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        📌 Income Tax Return (ITR) Filing in India
        <br />
        <span className="text-[#FF4655]">
          Complete Guide by Fintaxion Consulting
        </span>
      </motion.h1>

      {/* Sections */}
      <Section title="Introduction" icon={FaRegLightbulb}>
        <p>
          Filing an{" "}
          <span className="font-semibold">Income Tax Return (ITR)</span>
          is one of the most important responsibilities of every taxpayer in
          India. It is not just a document submitted to the government — it is
          proof of your income, your taxes paid, and your financial credibility.
        </p>
        <p className="mt-4">
          Under the <span className="font-semibold">Income Tax Act, 1961,</span>{" "}
          every individual, business, or entity earning income must assess their
          earnings, pay the applicable taxes, and file their ITR with the Income
          Tax Department before the due date.
        </p>
        <p className="mt-4">
          <span className="font-semibold">At Fintaxion Consulting,</span> our
          mission is simple: to make tax filing stress-free. From choosing the
          correct ITR form to claiming deductions, computing tax liability, and
          filing on time, we handle it all while helping you save more and stay
          compliant.
        </p>
      </Section>

      <Section title="Why Filing ITR is Important?" icon={FaCheckCircle}>
        <p className="my-4">
          Many people think: “TDS is already deducted, why should I file ITR?”
          or “My income is below taxable limit, filing is optional.” The truth
          is, filing ITR is far more important than just tax compliance. Let’s
          break it down:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">It’s a Legal Obligation:</span> If
            your income crosses the basic exemption limit, you are{" "}
            <span className="font-semibold">mandatorily required</span> to file
            ITR. Non-filing can invite penalties, interest, and even prosecution
            in extreme cases.
          </li>

          <li>
            <span className="font-semibold">Claiming Refunds:</span> If excess
            TDS has been deducted from your salary, bank interest, or
            professional payments, you can only claim it back by filing ITR. No
            filing = no refund.
          </li>

          {/* ✅ Subsection */}
          <li className="mt-3">
            <span className="font-semibold text-gray-900">
              Proof of Income & Financial Credibility
            </span>
            <p className="ml-4 mt-2">
              ITR serves as official proof of income when applying for:
            </p>
            <ul className="list-disc ml-10 mt-2 space-y-1">
              <li>Loans (home, personal, vehicle)</li>
              <li>Credit cards</li>
              <li>
                Visa applications (embassies often ask for last 3 years’ ITRs)
              </li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Carry Forward Losses:</span>
            If you have losses from business or capital gains (e.g., stock
            market), you can carry them forward to future years —{" "}
            <span className="font-semibold">only if you file ITR on time.</span>
          </li>
          <li>
            <span className="font-semibold">Avoiding Notices: </span> The IT
            Department matches your income with AIS/TIS (Annual Information
            Statements). If you don’t file ITR but have high-value transactions
            (FDs, shares, property purchases), you may get scrutiny notices.
          </li>
          <li>
            <span className="font-semibold">
              Building Your Financial Identity:{" "}
            </span>{" "}
            Filing ITR consistently creates a record of your financial history.
            This helps in building long-term wealth credibility for funding,
            tenders, or business growth.
          </li>
        </ul>
        <p className="text-center my-6 font-semibold text-lg">
          👉 In short, ITR filing is not just about paying tax — it’s about
          securing your financial future.
        </p>
      </Section>

      <Section title="Who Should File ITR?" icon={FaBalanceScale}>
        <p>
          1. Under Indian law, ITR filing is mandatory if your income exceeds{" "}
          <span className="font-semibold">basic exemption limit:</span>
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>₹2.5 lakh – Individuals below 60 years</li>
          <li>₹3 lakh – Senior Citizens (60–80 years)</li>
          <li>₹5 lakh – Super Senior Citizens (80+ years)</li>
        </ul>
        <p className="my-3">
          2. You also need to file ITR even if income is below these limits, if:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>You want to claim a tax refund.</li>
          <li>You own foreign assets or earn foreign income.</li>
          <li>You deposited ₹1 crore or more in a current account.</li>
          <li>Your annual electricity bill exceeded ₹1 lakh.</li>
          <li>
            You invested ₹50 lakh or more in mutual funds, shares, or bonds.
          </li>
        </ul>
      </Section>

      <Section
        title="Types of ITR Forms (Explained Simply)"
        icon={FaCheckCircle}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* ITR-1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">
              ITR-1 (Sahaj)
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                For salaried individuals, pensioners, or those with one house
                property.
              </li>
              <li>Income must be ≤ ₹50 lakh.</li>
            </ul>
          </div>

          {/* ITR-2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">ITR-2</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                For individuals & HUFs with income ₹50 lakh, capital gains, or
                foreign assets.
              </li>
            </ul>
          </div>

          {/* ITR-3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">ITR-3</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                For individuals & HUFs earning from business or profession.
              </li>
              <li>
                Freelancers, shopkeepers, consultants, and doctors use this
                form.
              </li>
            </ul>
          </div>

          {/* ITR-4 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">
              ITR-4 (Sugam)
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                For presumptive income taxpayers under Sections 44AD, 44ADA,
                44AE.
              </li>
              <li>
                Small businesses, professionals, and transporters prefer this.
              </li>
            </ul>
          </div>

          {/* ITR-5 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">ITR-5</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>For firms, LLPs, AOPs, and BOIs.</li>
            </ul>
          </div>

          {/* ITR-6 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">ITR-6</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>For companies (other than Section 8 charitable entities).</li>
            </ul>
          </div>

          {/* ITR-7 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
            <p className="font-semibold text-lg text-[#37517E] mb-2">ITR-7</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                For trusts, NGOs, political parties, and research institutions
                filing under Section 139(4A–4D).
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ITR filling process */}
      <Section title="Step-by-Step ITR Filing Process" icon={FaFileAlt}>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Collect Documents - </span>Form 16,
            Form 26AS, AIS, bank statements, investment proofs.
          </li>
          <li>
            <span className="font-semibold">Choose the Right ITR Form - </span>
            Based on income type.
          </li>
          <li>
            <span className="font-semibold">Compute Total Income - </span>
            Salary, house property, business, capital gains, other sources.
          </li>
          <li>
            <span className="font-semibold">
              Claim Exemptions & Deductions –{" "}
            </span>
            HRA, 80C, 80D, 80G, etc.
          </li>
          <li>
            <span className="font-semibold">5. Calculate Tax Liability – </span>
            Compare old vs. new regime.
          </li>
          <li className="font-semibold">Pay Self-Assessment Tax (if any).</li>
          <li>
            <span className="font-semibold">File ITR online - </span> On the IT
            portal, with Aadhaar OTP, Net Banking, or DSC.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Verify return - </span>Without
            verification, your ITR is invalid.
          </li>
        </ul>
      </Section>

      {/* Due Dates for Filing */}
      <Section title="Due Dates for Filing" icon={FaRegClock}>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-semibold">31st July:</span> Salaried
            individuals & non-audit cases
          </li>
          <li>
            <span className="font-semibold">31st October:</span> Businesses
            requiring audit
          </li>
          <li>
            <span className="font-semibold">30th November:</span> Companies with
            transfer pricing reports
          </li>
        </ul>
        <p className="font-semibold mt-4 mb-3">Late filing results in:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-semibold">Penalty under Section 234F </span>
            (₹1,000–₹5,000).
          </li>
          <li>
            <span className="font-semibold">Interest u/s 234A/B/C </span>for
            delayed tax payments.
          </li>
          <li>
            <span className="font-semibold">
              Loss of carry forward benefits
            </span>{" "}
            for business/capital losses.
          </li>
        </ul>
      </Section>

      {/* Common Mistakes to Avoid */}
      <Section title="Common Mistakes to Avoid" icon={ImCross}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Choosing the wrong ITR form.</li>
          <li>Not reconciling AIS/TIS with Form 26AS.</li>
          <li>Missing income from savings interest, FD, or capital gains.</li>
          <li>Incorrect PAN/Aadhaar linking.</li>
          <li>Forgetting to verify the ITR after filing.</li>
        </ul>
      </Section>

      {/* Case Study */}
      <Section title="Case Study" icon={ImCross}>
        <p className="font-semibold">Case Study – Salaried Professional</p>
        <p>
          Priya, an IT employee in Bangalore, earned ₹14 lakh annually. Her
          company deducted TDS, but she had investments under 80C and home loan
          benefits. She approached Fintaxion, and we re-computed her taxes,
          filed ITR-2, and secured a refund of ₹45,000.
        </p>
        <p>
          <span className="font-semibold">Lesson: </span>Even salaried people
          need professional tax filing to avoid missing refunds.
        </p>
      </Section>

      {/* How Fintaxion Consulting Helps */}
      <Section title="How Fintaxion Consulting Helps" icon={FaRegLightbulb}>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Right ITR Form Selection - </span>
            Ensure compliance & avoid rejection.
          </li>
          <li>
            <span className="font-semibold">Tax Planning & Deductions – </span>
            Maximize your savings legally.
          </li>
          <li>
            <span className="font-semibold">Refund Assistance – </span>Claim
            every rupee you deserve.
          </li>
          <li>
            <span className="font-semibold">
              Business & Professional ITRs –{" "}
            </span>
            Specialized in ITR-3 & ITR-4.
          </li>
          <li>
            <span className="font-semibold">Handling Tax Notices – </span>Expert
            response to IT Department queries.
          </li>
          <li>
            <span className="font-semibold">Audit & Compliance Support – </span>
            For companies, LLPs, and trusts.
          </li>
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
         Filing an <span className="font-semibold">Income Tax Return</span> is not just a legal duty — it is a smart financial habit. It builds your financial record, helps in wealth management, and keeps you safe from unnecessary notices.
        </p>
        <p className="text-[#444444] mb-6">
          At <span className="font-semibold">Fintaxion Consulting,</span> we combine expert knowledge with practical tax planning to file your ITR correctly, maximize your refunds, and keep you compliant.
        </p>
        <h3 className="font-semibold">👉 Contact Fintaxion Consulting today for expert ITR filing services in India.</h3>
      </div>
    </motion.div>
    </div>
  );
};

export default ITRS;
