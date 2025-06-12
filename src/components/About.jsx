import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import a1 from "../assets/a1.avif";
import u1 from "../assets/u1.jpeg"

const About = () => {
  return (
    // <Parallax bgImage={a1} strength={300} bgImageAlt="Stock Image">
      <div className=" mt-16 font-sans min-h-screen bg-black bg-opacity-50 text-gray-100 py-10 px-4 md:px-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            About Bull Stock
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Empowering investors with real-time insights, simplified tools, and trusted education.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Our mission is to make stock market investing accessible, simple, and trustworthy. Whether you're a
            first-time investor or an experienced trader, Bull Stock is here to support your financial journey with
            accurate data, helpful tutorials, and intuitive tools.
          </p>
        </motion.section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Real-Time Data", "Beginner Friendly", "Expert Insights", "Secure & Reliable"].map((title, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-black rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold mb-2 text-indigo-700">{title}</h3>
                <p className="text-sm text-gray-700">
                  {title === "Real-Time Data"
                    ? "Get market updates instantly so you never miss a move."
                    : title === "Beginner Friendly"
                    ? "Simple UI & tutorials for new investors to learn confidently."
                    : title === "Expert Insights"
                    ? "Curated analysis from finance professionals & analysts."
                    : "Your data is protected with bank-grade security."}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white text-black mt-10 w-full mx-auto rounded shadow-lg py-8 px-6">
          <h1 className="text-center text-3xl font-bold mb-6">Our Team</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Research Analyst", name: "Rohit Shukhla" },
              { title: "Managing Director", name: "Suyash Sharma" },
              { title: "Software Developer", name: "Vishal" },
              { title: "Graphic Designer", name: "Krishna" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group space-y-3 text-lg font-semibold flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img
                    src={u1}
                    alt={member.title}
                    className="w-[130px] sm:w-[160px] rounded-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                    {member.name}
                  </p>
                </div>
                <p>{member.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white text-black my-16 w-full mx-auto rounded shadow-sm py-10 px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl">
            Bull Stock began in 2024 when a group of finance enthusiasts and developers realized how
            difficult and confusing investing still is for many. We set out to create a platform that bridges
            the gap between Wall Street and everyday people.
          </p>
        </motion.section>

       
      </div>
    // </Parallax>
  );
};

export default About;
