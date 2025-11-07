import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#376173] w-full fixed top-0 right-0 left-0 mx-auto z-10 py-4">
      <nav className="flex justify-between sm:justify-between items-center mx-5 sm:mx-10">
        <div className="">
          <NavLink to="#" className="">
            <img src={logo} className="w-[70px] rounded-full" />
          </NavLink>
        </div>
        <div className="sm:hidden text-[22px] text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
        <div className="md:space-x-6 lg:text-[16px] hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Aboutus"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/News&insight"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/OurTeam"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Contact Us
          </NavLink>
          <NavLink to="/About">
            <button className="bg-[#3C3D3D] p-[8px] rounded-full text-white border ">
              Request a Quote
            </button>
          </NavLink>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-6 ml-7 flex flex-col items-start justify-start space-y-2 py-2 lg:text-[18px] sm:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About Us"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/OurTeam"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? "text-[#47B2E4]" : "text-white"
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
