import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false); // dropdown toggle for mobile

  return (
    <header className="bg-[#376173] w-full fixed top-0 right-0 left-0 z-10 py-4">
      <nav className="flex justify-between items-center mx-5 sm:mx-10">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-[70px] rounded-full" />
        </NavLink>

        {/* Mobile Toggle */}
        <div className="sm:hidden text-[22px] text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:text-[16px] items-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#47B2E4]" : "text-white")}>
            Home
          </NavLink>

          <NavLink to="/About" className={({ isActive }) => (isActive ? "text-[#47B2E4]" : "text-white")}>
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative group inline-block">
            <button className="text-white focus:outline-none">
              Services ▾
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-[#444444] mt-2 rounded-lg shadow-lg min-w-[250px]">
              <NavLink
                to="/WebDevelopment"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                All Kinds of ITRs
              </NavLink>
              <NavLink
                to="/AppDevelopment"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                GST Registrations & Returns
              </NavLink>
              <NavLink
                to="/DigitalMarketing"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                TDS Returns
              </NavLink>
              <NavLink
                to="/SEO"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                MSME Registrations
              </NavLink>
               <NavLink
                to="/SEO"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                Digital Signatures
              </NavLink>
               <NavLink
                to="/SEO"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                ESIC Registration & Return
              </NavLink>
               <NavLink
                to="/SEO"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                Startup Registrations
              </NavLink>
               <NavLink
                to="/SEO"
                className="block px-4 py-2 hover:bg-[#47B2E4] transition-all duration-200"
              >
                All ROC Related Work
              </NavLink>
            </div>
          </div>

          <NavLink to="/OurTeam" className={({ isActive }) => (isActive ? "text-[#47B2E4]" : "text-white")}>
            Our Team
          </NavLink>

          <NavLink to="/Help" className={({ isActive }) => (isActive ? "text-[#47B2E4]" : "text-white")}>
            Help
          </NavLink>

          <NavLink to="/Quote">
            <button className="bg-[#3C3D3D] px-4 py-2 rounded-full text-white border hover:bg-[#47B2E4] transition">
              Request a Quote
            </button>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-6 ml-7 flex flex-col items-start space-y-3 py-3 sm:hidden text-white">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/About" onClick={() => setIsOpen(false)}>About Us</NavLink>

          {/* Mobile Services Dropdown */}
          <div className="w-full">
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => setShowServices(!showServices)}
            >
              <span>Services</span>
              <span className="mr-[250px]">{showServices ? "▲" : "▼"}</span>
            </button>
            {showServices && (
              <div className=" mt-2 flex flex-col space-y-2 text-sm bg-white text-[#444444] rounded-lg p-3">
                <NavLink to="/WebDevelopment" onClick={() => setIsOpen(false)}>All Kinds of ITRs</NavLink>
                <NavLink to="/AppDevelopment" onClick={() => setIsOpen(false)}>GST Registrations & Returns</NavLink>
                <NavLink to="/DigitalMarketing" onClick={() => setIsOpen(false)}>TDS Returns</NavLink>
                <NavLink to="/SEO" onClick={() => setIsOpen(false)}>MSME Registrations</NavLink>
                <NavLink to="/SEO" onClick={() => setIsOpen(false)}>Digital Signatures</NavLink>
                <NavLink to="/SEO" onClick={() => setIsOpen(false)}>ESIC Registration & Return</NavLink>
                <NavLink to="/SEO" onClick={() => setIsOpen(false)}>Startup Registrations</NavLink>
                <NavLink to="/SEO" onClick={() => setIsOpen(false)}>All ROC Related Work</NavLink>

              </div>
            )}
          </div>

          <NavLink to="/OurTeam" onClick={() => setIsOpen(false)}>Our Team</NavLink>
          <NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
