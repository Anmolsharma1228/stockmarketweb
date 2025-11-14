import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFileAlt,
  FaUserTie,
  FaRegClipboard,
  FaBalanceScale,
  FaLightbulb
} from "react-icons/fa";

const PropriRegs = () => {
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
        📌 Proprietorship Registration in India
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
        <p className="leading-relaxed">
          A <strong>Sole Proprietorship</strong> is the simplest and most common
          form of business in India, owned and managed by a single individual.
          It is not a separate legal entity — the owner and business are
          considered the same person.{" "}
        </p>
        <p className="leading-relaxed mt-2">
          <strong>At Fintaxion Consulting,</strong> we help entrepreneurs establish their proprietorship with <strong>GST, MSME, Shop & Establishment, and bank registrations</strong> so they can run smoothly and compliantly.
        </p>
      </motion.div>

      {/* Why Choose Proprietorship */}
      <motion.div
        className="max-w-4xl mx-auto mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#FF4655] mb-4">
          Why Choose Proprietorship?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Easy setup",
            "Minimal compliance",
            "Low cost of registration",
            "Complete control with the owner",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl p-4"
            >
              <FaCheckCircle className="text-[#FF4655] text-xl" />
              <span>{item}</span>
            </div>
          ))}
        </div>
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
          <FaRegClipboard /> Process of Proprietorship Registration
        </h2>
        <ol className="list-decimal list-inside text-[#444444] space-y-3 leading-relaxed">
          <li>Decide Business Name (no central registration required).</li>
          <li>Apply for PAN (if not already available).</li>
          <li>Open Current Account in the business name.</li>
          <li>
            Obtain Registrations/Licenses (as applicable):
            <ul className="list-disc list-inside ml-5 mt-2 text-[#444444] space-y-1">
              <li>
                GST Registration (if turnover exceeds ₹40 lakh/₹20 lakh for
                services).
              </li>
              <li>MSME/Udyam Registration.</li>
              <li>Shop & Establishment Act license (state-specific).</li>
              <li>Professional Tax (if applicable).</li>
            </ul>
          </li>
        </ol>
      </motion.div>

      {/* Documents Section */}
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
          <li>Aadhaar & PAN of proprietor</li>
          <li>Passport-size photograph</li>
          <li>Business address proof (rent agreement/utility bill)</li>
          <li>Bank account proof (cheque/cancelled slip)</li>
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
            <FaUserTie /> Advantages of Proprietorship
          </h3>
          <ul className="list-disc list-inside text-[#444444] space-y-2">
            <li>Low cost of formation</li>
            <li>Full profit retention</li>
            <li>Easy decision-making</li>
          </ul>
        </div>
        <div className="rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#444444] mb-3 flex items-center gap-2">
            <FaBalanceScale /> Disadvantages
          </h3>
          <ul className="list-disc list-inside text-[#444444] space-y-2">
            <li>Unlimited liability</li>
            <li>No separate legal identity</li>
            <li>Limited fundraising capacity</li>
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
          <li>End-to-end registration support</li>  
          <li>GST, MSME, and banking assistance</li>  
          <li>Compliance advisory (ITR, GST returns)</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default PropriRegs;
