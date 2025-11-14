import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUserFriends,
  FaRegClipboard,
  FaBalanceScale,
} from "react-icons/fa";

const NgoTrust = () => {
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
        📌 NGO, Trust, Society & Section 8 Company Registration
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
         Non-profit entities in India can be registered as:
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><strong>Trusts </strong> (under Indian Trusts Act, 1882)</li>
            <li><strong>Societies </strong>(under Societies Registration Act, 1860)</li>
            <li><strong>Section 8 Companies </strong>(under Companies Act, 2013)</li>
          </ul>
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl shadow-lg p-8 sm:p-10 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4 flex items-center gap-2">
          <FaRegClipboard /> Key Features
        </h2>
        <ol className="list-disc list-inside text-[#444444] space-y-2 leading-relaxed">
          <p className="font-semibold">Trust</p>
          <li>
            Formed with settlor & trustees.
          </li>
          <li>Easier setup, low compliance.</li>
        </ol>
        <ol className=" mt-3 list-disc list-inside text-[#444444] space-y-2 leading-relaxed">
          <p className="font-semibold">Society</p>
          <li>Minimum 7 members</li>
          <li>Governing body required</li>
        </ol>
        <ol className=" mt-3 list-disc list-inside text-[#444444] space-y-2 leading-relaxed">
          <p className="font-semibold">Section 8 Company</p>
          <li>Highest credibility.</li>
          <li>Requires ROC approval, high compliance.</li>
          <li>Eligible for tax exemptions (12A, 80G)</li>
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
                <li>PAN & Aadhaar of founders</li>
                <li>Trust Deed / MOA & AOA</li>
                <li>Registered office proof</li>
                <li>Photographs</li>
              </ul>
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
          <li>Drafting Trust Deed, MOA & AOA</li>
          <li>Registration with Charity Commissioner/ROC</li>
          <li>Tax exemption advisory (12A, 80G, FCRA)</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default NgoTrust;
