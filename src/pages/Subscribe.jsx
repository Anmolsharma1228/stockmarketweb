import React from 'react';
import cta1 from '../assets/images/cta1.webp';

const Subscribe = () => {
  return (
    <section className="bg-[#F5F6F8] py-12 px-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
        
        {/* Text + Input Section */}
        <div className="text-center md:text-left space-y-6 w-full md:w-1/2 font-jost">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#37517E]">
            Subscribe to Get Updates
          </h2>
          <p className="text-[#444444] text-[16px] leading-relaxed">
            Stay informed! Subscribe now for the latest updates and expert insights.
          </p>

          {/* Input Field */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <input
              type="email"
              placeholder="WhatsApp Number..."
              className="w-full sm:w-[300px] px-5 py-3 rounded-full border border-[#3C3D3D] outline-none focus:ring-2 focus:ring-[#37517E] transition"
            />
            <button className="bg-[#37517E] text-white px-6 py-3 rounded-full hover:bg-[#2b3d63] transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={cta1}
            alt="Subscribe illustration"
            className="w-[280px] sm:w-[350px] md:w-[420px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Subscribe;
