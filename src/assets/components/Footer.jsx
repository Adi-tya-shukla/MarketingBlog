import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerElements = [
    ["Home", "Why Us", "Deals"],
    ["Service", "Case Studies", "Plan"],
    ["Testimonials", "About", "FAQ"],
  ];

  return (
    <footer className="bg-green-900 text-gray-100 py-12 px-6 md:px-12 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="max-w-xs leading-tight">
            <p className="text-gray-300 text-left text-xs">
              We make onboarding new employees ridiculously easy.  
              On day one, they're ready to go.  
              And retaining them is easier.
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-10">
            <p>Follow us:</p>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={16} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left">
          {footerElements.map((col, i) => (
            <div key={i} className="flex flex-col">
              {col.map((link) => (
                <a key={link} href="#" className="hover:underline mt-3 sm:mt-4">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
