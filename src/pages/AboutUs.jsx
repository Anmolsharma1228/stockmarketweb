import React from 'react';

const AboutUs = () => {
  return (
    <section className="sm:my-20 px-4">
      {/* Heading */}
      <div className="text-center my-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#37517E] font-jost inline-block relative">
          ABOUT US
          {/* Line Always Visible */}
          <span className="block w-24 h-[3px] mx-auto mt-2 bg-[#444444] rounded-full"></span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-base md:text-lg text-[#444444] leading-relaxed">
        <p>
          At{' '}
          <span className="font-bold text-[#37517E]">
            Fintaxion Consulting
          </span>
          , we go beyond traditional financial and taxation services. We are
          strategic partners dedicated to helping businesses navigate the
          complexities of financial management, taxation, audit, and accounting.
          Our tailored solutions cater to companies across industries, ensuring
          regulatory compliance, optimized tax structures, and financial
          efficiency. Our goal is to empower businesses with{' '}
          <span className="font-bold">
            clarity, compliance, and strategic insights
          </span>{' '}
          that foster long-term growth and sustainability.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
