import React from "react";

const ContactUs = () => {
  return (
    <section className="px-6 font-jost mb-12">
        <h1 className="text-center text-[32px] md:text-4xl font-black text-[#37517E] font-jost">CONTACT</h1>
         {/* Line Always Visible */}
          <span className="block w-24 h-[3px] mx-auto mt-2 bg-[#444444] rounded-full"></span>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-8 md:p-10">
        {/* LEFT SECTION */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="text-[#37517E] text-2xl">📍</div>
            <div>
              <h3 className="font-semibold text-lg text-[#37517E]">Address</h3>
              <p className="text-[#444] text-sm leading-relaxed">
                201 DSIDC Shed, Okhla Industrial Area, Phase-I,<br />
                New Delhi – 1100202
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-4">
            <div className="text-[#37517E] text-2xl">📞</div>
            <div>
              <h3 className="font-semibold text-lg text-[#37517E]">Call Us</h3>
              <p className="text-[#444] text-sm leading-relaxed">
                Hemant Singh (+91-8178363761) <br />
                Vijay Pal (+91-7042067976)
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-[#37517E] text-2xl">✉️</div>
            <div>
              <h3 className="font-semibold text-lg text-[#37517E]">Email Us</h3>
              <p className="text-[#444] text-sm leading-relaxed">
                info@fintaxion.in
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Fintaxion Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.72922307956!2d77.06889995!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b700000001%3A0x8f6aef92b4a1b3db!2sOkhla%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#37517E] mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#37517E] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#37517E] mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#37517E] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#37517E] mb-2">
              Phone No
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#37517E] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#37517E] mb-2">
              Query
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#37517E] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#37517E] text-white font-medium px-8 py-3 rounded-md hover:bg-[#2b3d63] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
