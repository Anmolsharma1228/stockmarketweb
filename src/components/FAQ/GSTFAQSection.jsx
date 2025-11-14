import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function GSTFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is GST mandatory for freelancers?",
      answer:
        "Yes, GST registration is mandatory if your annual turnover exceeds ₹20 lakh (₹10 lakh in special category states).",
    },
    {
      question: "Can GST be cancelled voluntarily?",
      answer:
        "Yes, GST registration can be voluntarily cancelled if your turnover falls below the threshold limit or the business is discontinued.",
    },
    {
      question: "What happens if I don’t file GST returns?",
      answer:
        "Non-filing attracts late fees, interest at 18% per annum, ITC blockage, and even cancellation of your GSTIN for continued default.",
    },
    {
      question: "Is GST applicable on exports?",
      answer:
        "Exports are treated as zero-rated supplies under GST, but filing GST returns is mandatory to claim refunds of input tax credit.",
    },
  ];

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.section
      className="mt-20 bg-gradient-to-b from-[#ffffff08] to-[#ffffff10] backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-bold text-[#37517E] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FAQs on GST
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-200 bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left group"
            >
              <span className="text-lg font-semibold text-gray-800 group-hover:text-[#FF4655] transition-colors duration-300">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#FF4655] text-2xl"
              >
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, scaleY: 0.9, y: -5 }}
                  animate={{ opacity: 1, scaleY: 1, y: 0 }}
                  exit={{ opacity: 0, scaleY: 0.9, y: -5 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="p-5 pt-0 text-gray-600 border-t border-gray-200 origin-top leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
