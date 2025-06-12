import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo1 from "../assets/logo1.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 right-0 left-0 rounded shadow-md shadow-black container mx-auto z-10">
      <nav className="flex justify-between sm:justify-between items-center mx-4">
        <div className="">
          <NavLink to="#" className="">
            <img src={logo1} className="w-[70px] rounded-full" />
          </NavLink>
        </div>
        <div className="sm:hidden text-[20px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
        <div className="md:space-x-6 lg:text-[18px] hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 hover:text-indigo-700 duration-500"
                : "text-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Market"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 hover:text-indigo-700 duration-500"
                : "text-gray-500"
            }
          >
            Market Activity
          </NavLink>
          <NavLink
            to="/News&insight"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 hover:text-indigo-700 duration-500"
                : "text-gray-500"
            }
          >
            News & insight
          </NavLink>
          {/* <NavLink to="#" className="hover:text-indigo-700 duration-500">
            Solution
          </NavLink> */}
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 hover:text-indigo-700 duration-500"
                : "text-gray-500"
            }
          >
            About
          </NavLink>
        </div>
        <div className="space-x-4 lg:text-[20px] text-[17px] hidden sm:block">
          <input
            type="search"
            placeholder="Search here..."
            className="px-2 border-2"
          />
        </div>
      </nav>
      {isOpen && (
        <div className="ml-6 flex flex-col items-start justify-start space-y-2 py-2 lg:text-[18px] sm:hidden">
  <NavLink to="/" className="hover:text-indigo-700 duration-500">
    Home
  </NavLink>
  <NavLink to="/" className="hover:text-indigo-700 duration-500">
    Market Activity
  </NavLink>
  <NavLink to="/News&insight" className="hover:text-indigo-700 duration-500">
    News & insight
  </NavLink>
  <NavLink to="/About" className="hover:text-indigo-700 duration-500">
    About
  </NavLink>
</div>

      )}
    </header>
  );
};

export default Navbar;
