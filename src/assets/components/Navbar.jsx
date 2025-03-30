import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] py-4 px-6 flex justify-between items-center max-w-7xl mx-auto rounded-[20px] mt-5 mb-5 ">
        <div className="text-base font-bold flex items-center">
          <span className="text-base font-extrabold">STRATLAB</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 text-xs">
          <li>
            <a href="#" className="hover:text-green-600">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Why Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              About
            </a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-3">
          <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
            Login
          </button>
          <button className="px-3 py-1 text-xs bg-green-600 text-white rounded-full">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={24} className="text-gray-700" />
            ) : (
              <FaBars size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-gray-700 text-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-700"
        >
          <FaTimes size={24} />
        </button>
        <a href="#" className="hover:text-green-600">
          Service
        </a>
        <a href="#" className="hover:text-green-600">
          Why Us
        </a>
        <a href="#" className="hover:text-green-600">
          Testimonial
        </a>
        <a href="#" className="hover:text-green-600">
          FAQ
        </a>
        <a href="#" className="hover:text-green-600">
          About
        </a>
        <button className="px-4 py-2 text-xs bg-gray-100 text-gray-700 rounded-full">
          Login
        </button>
        <button className="px-4 py-2 text-xs bg-green-600 text-white rounded-full">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Navbar;
