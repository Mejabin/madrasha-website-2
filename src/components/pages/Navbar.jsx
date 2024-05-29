import React, { useState } from "react";
import { FaSearch, FaMosque } from "react-icons/fa";
import DropdownButton from "../hook/DropdownButton";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    {
      label: "Causes",
      items: [
        { label: "Causes list", herf: "#Causes list" },
        { label: "Cause Grid", herf: " causes Grid" },
        { label: "Cause Grid", herf: " causes Grid" },
        { label: "Cause Grid", herf: " causes Grid" },
        { label: "Cause Grid", herf: " causes Grid" },
      ],
    },
    { label: "Event", href: "#event" },
    {
      label: "Page",
      items: [
        { label: "About", herf: "#Causes list" },
        { label: "Gallary Grid", herf: " Gallary  Grid" },
        { label: "Event ", herf: " Event" },
        { label: "Eid-Ul-Adha", herf: " Eid-Ul-Adha" },
        { label: "Eid-Ul-Fitr", herf: " Eid-Ul-Fitr" },
      ],
    },
    { label: "Sermon", href: "#sermon" },
    {
      label: "Blog",
      items: [
        { label: "Blog 1", href: "#blog1" },
        { label: "Blog 2", href: "#blog2" },
        { label: "Blog 3", href: "#blog3" },
      ],
    },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <FaMosque className="text-2xl text-green-600" />
          <div className="flex flex-col">
            MOSQUE
            <span className="text-sm font-semibold text-gray-600">
              Islamic Center
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.items ? (
                
                <DropdownButton label={item.label} items={item.items} />
              ) : (
                // If it's a regular link
                <a
                  href={item.href}
                  className="font-semibold text-gray-600 hover:text-green-600"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>

        <button onClick={toggleSearch} className="relative text-gray-600">
          <FaSearch className="h-6 w-6" />
        </button>

        {/* Search bar */}
        {showSearch && (
          <div className="absolute top-full left-0 w-full bg-green-500 shadow-lg border rounded-lg mt-1">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-1 px-4 w-full text-blue-600"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
