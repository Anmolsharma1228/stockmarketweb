import React from "react";
import taxmin from "../assets/images/taxmin.jpg";
import AboutUs from "../pages/AboutUs.jsx";
import Services from "../pages/Services.jsx";
import OurTeam from "./OurTeam.jsx";
import Subscribe from "./Subscribe.jsx";
import ContactUs from "../pages/ContactUs.jsx";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="sm:min-h-screen bg-gradient-to-b from-[#376173] to-[#1c3540] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-32 pb-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 md:mt-0">
          <h1 className="font-jost text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug">
            Welcome to Fintaxion
            <br />
            Consulting!
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            Financial | Taxation | Business Advisory
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            src={taxmin}
            alt="Taxmin"
            className="sm:w-80 md:w-[450px] lg:w-[550px] rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-12 bg-white">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section className="py-12">
        <Services />
      </section>

      {/* Our Team Section */}
      <section className="sm:py-12 bg-white">
        <OurTeam />
      </section>
      {/* Subscribe */}
      <section className="py-12">
        <Subscribe />
      </section>
      {/* Contact Us */}
      <section className="py-12">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
