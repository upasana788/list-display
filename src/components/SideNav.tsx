import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="lg:hidden p-4 text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </button>
      <div
        className={`lg-block fixed top-0 left-0 w-60 h-full bg-gray-300 text-blue-800  p-4 space-y-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-4xl mb-6"> Listfy</h2>
        <ul>
          <li className="block mb-2 text-lg font-medium hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="block mb-2 text-lg font-medium hover:underline">
            <Link to="/aboutus">About Us </Link>
          </li>
          <li className="block mb-2 text-lg font-medium hover:underline">
            <Link to="/gallery">Gallery </Link>
          </li>
          <li className="block mb-2 text-lg font-medium hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
    </div>
  );
};

export default SideNav;
