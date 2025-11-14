import React from "react";
import { NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { BsBoundingBoxCircles, BsCalendar4Week } from "react-icons/bs";
import { PiBroadcast } from "react-icons/pi";
import { FaSignature } from "react-icons/fa";
import { IoIosReturnLeft } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { FcKindle } from "react-icons/fc";

const services = [
  {
    icon: <FiActivity className="text-4xl text-[#37517E]" />,
    title: "All Kinds of ITRs",
    desc: "File all types of ITRs with ease and accuracy!",
    link: "/Services/ITRS", // route
  },
  {
    icon: <BsBoundingBoxCircles className="text-4xl text-[#37517E]" />,
    title: "GST Registrations & Returns",
    desc: "Seamless GST registration and return filing!",
    link: "/Services/GSTreg",
  },
  {
    icon: <BsCalendar4Week className="text-4xl text-[#37517E]" />,
    title: "TDS Returns",
    desc: "Accurate TDS returns. Timely compliance!",
    link: "/Services/TDS",
  },
  {
    icon: <PiBroadcast className="text-4xl text-[#37517E]" />,
    title: "MSME Registrations",
    desc: "Quick and easy MSME registration for your business!",
    link: "/Services/MSME",
  },
  {
    icon: <FaSignature className="text-4xl text-[#37517E]" />,
    title: "Digital Signatures",
    desc: "Secure and reliable digital signatures for your needs!",
    link: "/Services/DigitalSig",
  },
  {
    icon: <IoIosReturnLeft className="text-4xl text-[#37517E]" />,
    title: "ESIC Registration & Return",
    desc: "Efficient ESIC registration and hassle-free return!",
    link: "/Services/ESICreg",
  },
  {
    icon: <MdAppRegistration className="text-4xl text-[#37517E]" />,
    title: "Startup Registrations",
    desc: "Fast and simple startup registration to kickstart growth!",
    link: "/Services/StartUpReg",
  },
  {
    icon: <FcKindle className="text-4xl" />,
    title: "All ROC Related Work",
    desc: "Comprehensive ROC services for Compliance and Growth!",
    link: "/Services/AllRoc",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F5F6F8] py-16 px-6">
      {/* Heading */}
      <div className="text-center space-y-3 mb-12">
        <h1 className="text-[32px] font-black text-[#37517E] font-jost">
          OUR SERVICES
        </h1>
        <span className="block w-24 h-[3px] mx-auto mt-2 bg-[#444444] rounded-full"></span>
        <p className="text-[16px] text-[#444444]">
          We provide all-in-one financial solutions
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <NavLink
            key={index}
            to={service.link}
            className="bg-white text-center px-6 py-10 rounded-2xl shadow-md 
                      transition-all duration-300 transform hover:-translate-y-2 
                      hover:shadow-lg hover:bg-[#f0f8ff] cursor-pointer block"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <p className="text-[#37517E] font-semibold text-lg mb-2 font-jost">
              {service.title}
            </p>
            <p className="text-[#444444] text-[15px] font-jost">
              {service.desc}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Services;
