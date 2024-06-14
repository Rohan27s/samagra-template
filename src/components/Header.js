import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import logoWhite from '../images/logo-2.png';

const navLinks = [
  { label: "Our Impact", ariaLabel: "Our Impact", hasDropdown: true },
  { label: "Our Programs", ariaLabel: "Our Programs" },
  { label: "SamagraX", ariaLabel: "SamagraX" },
  { label: "About Us", ariaLabel: "About Us" },
  { label: "Our Assets", ariaLabel: "Our Assets" },
  { label: "Ecosystem Initiatives", ariaLabel: "Ecosystem Initiatives" }
];

const dropdownItems = [
  "Agriculture",
  "Education",
  "Fellowships",
  "Health"
];

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="absolute w-full z-10">
      <div className="bg-transparent w-[95%] mx-auto text-white p-4 flex justify-between items-center">
        <img src={logoWhite} alt="Samagra Logo" className="w-44 h-auto" aria-label="Samagra Logo" />
        <nav>
          <ul className="flex gap-x-14">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`flex cursor-pointer items-center hover:font-bold ${showDropdown && link.hasDropdown ? "font-bold" : ""}`}
                onClick={() => link.hasDropdown && setShowDropdown(!showDropdown)}
                aria-haspopup={link.hasDropdown ? "true" : "false"}
                aria-expanded={link.hasDropdown && showDropdown}
                aria-label={link.ariaLabel}
              >
                {link.label}
                {link.hasDropdown && <FaAngleDown className="ml-1" aria-hidden="true" />}
              </li>
            ))}
          </ul>
      {showDropdown && (
        <ul
          className="absolute top-full w-[200px] bg-white text-gray-800 border border-gray-300 py-2 shadow-lg"
          role="menu"
        >
          {dropdownItems.map((item, index) => (
            <li key={index} className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer" role="menuitem">
              {item}
            </li>
          ))}
        </ul>

      )}
        </nav>
      </div>
      <hr className="block border-t-2 w-[95%] mx-auto border-white mt-4" />
    </header>
  );
};

export default Header;
