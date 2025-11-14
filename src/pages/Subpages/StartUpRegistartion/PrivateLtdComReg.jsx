import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUserFriends,
  FaRegClipboard,
  FaBalanceScale,
} from "react-icons/fa";

const PrivateLtdComReg = () => {
  return (
    <motion.div
      className="mt-28 sm:mt-36 mb-12 px-4 sm:px-10 lg:px-20 text-[#444444] font-jost leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-[#37517E]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📌 Private Limited Company Registration
      </motion.h1>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl shadow-xl p-8 sm:p-10 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4">
          Introduction
        </h2>
        <p className="text-[#444444] leading-relaxed">
         A <strong>Private Limited Company (Pvt Ltd) </strong>is the most popular choice for startups due to scalability, limited liability, and investor trust. Governed by the  <strong>Companies Act, 2013.</strong>
        </p>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl shadow-lg p-8 sm:p-10 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4 flex items-center gap-2">
          <FaRegClipboard /> Process of Registration
        </h2>
        <ol className="list-decimal list-inside text-[#444444] space-y-3 leading-relaxed">
          <li>
            Obtain<strong>DSC & DIN</strong> of directors.
          </li>
          <li>Apply through <strong>SPICe+ (INC-32)</strong> on MCA portal.</li>
          <li>
            Draft <strong>MOA & AOA.</strong>
          </li>
          <li>Apply for <strong>PAN, TAN.</strong></li>
          <li>Open Current Account, apply for GST/MSME.</li>
        </ol>
      </motion.div>

      {/* Documents Required */}
      <motion.div
        className="max-w-4xl mx-auto mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4 flex items-center gap-2">
          <FaFileAlt /> Documents Required
        </h2>
        <ul className="list-disc list-inside text-[#444444] space-y-2 leading-relaxed">
          <li>PAN & Aadhaar of directors</li>
          <li>Passport (if foreign national)</li>
          <li>Proof of registered office</li>
          <li>Utility bill, NOC from owner</li>
          <li>MOA & AOA</li>
        </ul>
      </motion.div>

      {/* Advantages / Disadvantages */}
      <motion.div
        className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#444444] mb-3 flex items-center gap-2">
            <FaUserFriends /> Advantages
          </h3>
          <ul className="list-disc list-inside text-[#444444] space-y-2">
            <li>Limited liability</li>
            <li>Easy fundraising (VCs, Angels)</li>
            <li>Separate legal entity</li>
            <li>Perpetual succession</li>
          </ul>
        </div>
        <div className="rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#444444] mb-3 flex items-center gap-2">
            <FaBalanceScale /> Disadvantages
          </h3>
          <ul className="list-disc list-inside text-[#444444] space-y-2">
            <li>High compliance</li>
            <li>Audit mandatory</li>
            <li>ROC filings required</li>
          </ul>
        </div>
      </motion.div>

      {/* Fintaxion Role */}
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl shadow-lg p-8 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4">
          Fintaxion’s Role
        </h2>
        <ul className="text-[#444444] leading-relaxed max-w-md pl-4 text-left list-disc space-y-2">
          <li>Incorporation via SPICe+</li>
          <li>Compliance advisory (ROC, GST, ITR)</li>
          <li>Startup India benefits support</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default PrivateLtdComReg;
