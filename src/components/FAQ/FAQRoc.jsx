import React, {useState} from 'react'
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQRoc = () => {

const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is ROC filing mandatory even if my company had no transactions?",
      answer:
        "Yes, every company/LLP must file annual returns, irrespective of turnover.",
    },
    {
      question: "What happens if a company doesn’t file ROC returns?",
      answer:
        "It attracts ₹100/day penalty, director disqualification, and possible strike-off.",
    },
    {
      question: "Can an LLP be struck off for non-compliance?",
      answer:
        "Yes, persistent default leads to MCA strike-off.",
    },
    {
      question: "Is DIR-3 KYC required for inactive directors?",
      answer:
        "Yes, every DIN holder must file KYC annually.",
    },
    {
      question: "Can I file ROC returns myself?",
      answer:
        "Technically yes, but professional filing ensures accuracy and prevents penalties.",
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
  )
}

export default FAQRoc