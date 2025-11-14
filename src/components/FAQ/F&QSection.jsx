import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "If TDS is deducted, should I still file ITR?",
      answer:
        "Yes, to claim refunds, carry forward losses, and build income proof.",
    },
    {
      question: "Can I file ITR after due date?",
      answer:
        "Yes, as a belated return before Dec 31, but with penalty & loss of benefits.",
    },
    {
      question: "Which regime should I choose – Old or New?",
      answer:
        "We compare both regimes for you and recommend the tax-saving option.",
    },
    {
      question: "Can housewives/students file ITR?",
      answer:
        "Yes, if they have income above exemption limits or want to claim refunds.",
    },
    {
      question: "Can I revise my ITR?",
      answer:
        "Yes, under Section 139(5), before Dec 31 of the assessment year.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="mt-20 bg-white/5 rounded-2xl p-6 sm:p-10 shadow-md"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-3xl font-bold text-[#37517E] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-[#FF4655] text-2xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 pt-0 text-gray-600 border-t border-gray-200"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;
