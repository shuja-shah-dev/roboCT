"use client"
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  
  const [scrolled, setScrolled] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<nav 
className={` fixed w-full z-20 top-0 start-0 ${scrolled
  ? "bg-white text-black transition ease-in-out duration-300"
  : "backdrop-brightness-90 transition ease-in-out duration-300"
}`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap focus:outline-none ">RoboCT</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className=" focus:outline-none font-medium rounded-lg text-base px-4 py-2 text-center "> <SearchIcon/></button> 
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4  font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
      <li>
        <a href="#" className="block py-2 px-3 focus:outline-none" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 focus:outline-none ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 focus:outline-none">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 focus:outline-none">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar;
