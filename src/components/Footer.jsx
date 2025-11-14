import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F6F8] text-[#444444] py-10 w-full font-jost">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row flex-wrap justify-between gap-10">
        
        {/* About Section */}
        <div className="space-y-4 sm:w-[45%]">
          <h3 className="text-[28px] sm:text-[32px] font-semibold text-[#37517E]">Fintaxion</h3>
          <p className="text-sm leading-relaxed">
            <span className="inline-flex items-center gap-2">
              <GrLocation className="text-lg" /> 
              201 DSIDC Shed, Okhla Industrial Area, Phase-I, New Delhi – 1100202
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FaPhoneSquareAlt className="text-xl mt-1" />
            <span>
              Hemant Singh (+91-8178363761)<br />
              Vijay Pal (+91-7042067976)
            </span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdMailOpen className="text-xl" /> info@fintaxion.in
          </p>
        </div>

        {/* Social Media Section */}
        <div className="sm:w-[45%]">
          <h3 className="text-lg font-semibold mb-3 text-[#37517E]">Follow Us</h3>
          <p className="text-sm mb-3">
            Follow us on social media for updates, tips, and more!
          </p>
          <div className="flex gap-4 text-2xl">
            <Link to="https://www.instagram.com/fintaxion_consulting?utm_source=qr&igsh=YXN0d3JzOXFzc3ll" className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-blue-600 transition-colors duration-300">
              <FaFacebook />
            </Link>
            <Link to="#" className="hover:text-black transition-colors duration-300">
              <FaXTwitter />
            </Link>
            <Link to="https://wa.me/qr/KDII4Q47RDRSB1" className="hover:text-green-500 transition-colors duration-300">
              <FaSquareWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm border-t border-gray-300 pt-4 text-[#444444]">
        © {new Date().getFullYear()} Fintaxion Consulting. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
