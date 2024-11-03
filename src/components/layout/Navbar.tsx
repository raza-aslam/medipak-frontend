"use client";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { NavbarData } from '../shared/InfrasturctureData';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <div className="bg-[#071952] p-4">
        <div className="flex justify-between items-center relative w-full">
          {/* Toggle button for small screens */}
          <div className="lg:hidden w-full">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <RiMenuFold2Fill className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Name */}
          <div className="flex-shrink-0 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer whitespace-nowrap">
            <h1>MEDIPAK INTERNATIONAL</h1>
          </div>

          {/* Desktop menu (visible on medium screens and larger) */}
          <div className={`lg:flex hidden items-center justify-between w-full`}>
            <ul className={`lg:flex mr-auto hidden items-center  ${searchOpen ? 'ml-40 flex-wrap space-x-6 mb-2' : 'ml-4 lg:ml-40 xl:ml-60 space-x-4'}`}>
              {NavbarData.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} className="text-white 2xl:text-lg xl:text-base text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

{/* Search Icon */}
<div className="lg:flex hidden relative items-center">
  {searchOpen ? (
    <FaSearch className="text-white cursor-pointer ml-24" size={20} onClick={toggleSearch} />
  ) : (
    <FaSearch className="text-white cursor-pointer" size={20} onClick={toggleSearch} />
  )}
</div>

{/* Search Input Box for larger screens */}
{searchOpen && (
  <div className="hidden lg:flex md:w-1/3 ml-2"> {/* Adjusted margin */}
    <input
      type="search"
      placeholder="Search..."
      className="w-full h-8 px-2 bg-white text-black border-b-2 border-[#FF6700] focus:outline-none"
    />
  </div>
)}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "fixed inset-0 w-1/2 h-full bg-[#FF6700] z-50" : "hidden"
          } lg:hidden`}
        >
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <RiMenuFold2Fill className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="p-4 w-full mt-12 border-b-2">
            <input
              type="search"
              placeholder="Search..."
              className="w-full p-1 rounded-lg mr-3 bg-white text-black border-b-2 border-[#FF6700] focus:outline-none"
            />
          </div>

          <ul className="">
            {NavbarData.map((item) => (
              <li key={item.id} className="w-full border-b-2">
                <Link href={item.path} className="block text-white m-5 text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
