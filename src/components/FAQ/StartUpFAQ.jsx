import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function StartupFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which is the best entity for startups?",
      answer:
        "Private Limited Company is most preferred due to funding and scalability benefits.",
    },
    {
      question: "Is it necessary to register a proprietorship?",
      answer:
        "Proprietorship itself isn’t registered, but licenses like GST/MSME are mandatory.",
    },
    {
      question: "Can an LLP be converted into a company?",
      answer:
        "Yes, LLPs can be converted into Private Limited Companies.",
    },
    {
      question: "Which is better – Trust, Society, or Section 8 Company for NGOs?",
      answer:
        "Depends on scope: Section 8 Companies offer higher credibility, while Trusts are easier to set up.",
    },
    {
      question: "Can NRIs/foreigners register companies in India?",
      answer:
        "Yes, subject to FEMA & RBI compliance.",
    },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.section
      className="mt-20 rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 text-[#444444]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-center text-3xl font-bold text-[#37517E] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FAQs on Startup Registration
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left group"
            >
              <span className="text-lg font-semibold duration-300">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
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
                  className="p-5 pt-0 text-gray-400 border-t border-gray-800 origin-top leading-relaxed"
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
