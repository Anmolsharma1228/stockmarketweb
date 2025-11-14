import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUserFriends,
  FaRegClipboard,
  FaBalanceScale,
} from "react-icons/fa";

const PartnershipFirmReg = () => {
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
        📌 Partnership Firm Registration
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
         A Partnership Firm is registered under the Indian Partnership Act, 1932, where two or more persons agree to share profits and liabilities.
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
            Draft <strong>Partnership Deed</strong> (name, partners, profit
            ratio, duties).
          </li>
          <li>Apply for PAN in firm’s name.</li>
          <li>
            Register with <strong>Registrar of Firms</strong> (not mandatory,
            but recommended).
          </li>
          <li>Obtain GST, MSME, and bank account registrations.</li>
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
          <li>Partnership Deed</li>
          <li>PAN of partners & firm</li>
          <li>Address proof of firm & partners</li>
          <li>Passport-size photographs</li>
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
            <li>Simple structure</li>
            <li>Low compliance</li>
            <li>Shared responsibilities</li>
          </ul>
        </div>
        <div className="rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#444444] mb-3 flex items-center gap-2">
            <FaBalanceScale /> Disadvantages
          </h3>
          <ul className="list-disc list-inside text-[#444444] space-y-2">
            <li>Unlimited liability</li>
            <li>Disputes between partners</li>
            <li>Limited fundraising options</li>
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
  <h2 className="text-2xl font-semibold text-[#FF4655] mb-6">
    Fintaxion’s Role
  </h2>

  <ul className="text-[#444444] leading-relaxed max-w-md pl-4 text-left list-disc space-y-2">
    <li>Drafting Partnership Deed</li>
    <li>Registration with ROF</li>
    <li>Tax compliance support</li>
  </ul>
</motion.div>

    </motion.div>
  );
};

export default PartnershipFirmReg;
