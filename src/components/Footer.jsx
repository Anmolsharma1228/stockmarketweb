import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-[450px] sm:w-full">
      <div className="px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">BEHIND THE PROFIT</h3>
          <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">USEFUL LINKS</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/Market" className="hover:text-red-500">Market Activity</Link>
            <Link to="/News&insight" className="hover:text-red-500">News & Insight</Link>
            <Link to="/About" className="hover:text-red-500">About</Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">SOCIAL MEDIA</h3>
          <div className="flex gap-4 text-2xl mt-2">
            <Link to="#"><FaInstagram className="hover:text-pink-500" /></Link>
            <Link to="#"><FaFacebook className="hover:text-blue-500" /></Link>
            <Link to="#"><FaXTwitter className="hover:text-blue-400" /></Link>
            <Link to="#"><FaSquareWhatsapp className="hover:text-green-500" /></Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
          <div className="flex items-start gap-2 text-sm mb-2">
            <GrLocation className="mt-1" />
            <p>New Delhi - 110044</p>
          </div>
          <div className="flex items-start gap-2 text-sm mb-2">
            <IoMdMailOpen className="mt-1" />
            <p>behindtheprofit@gmail.com</p>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <FaPhoneSquareAlt className="mt-1" />
            <p>+012456789</p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Behind The Profit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
