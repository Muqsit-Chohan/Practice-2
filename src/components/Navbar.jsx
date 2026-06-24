import React from "react";
import { useState, useEffect } from "react";``

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); 
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);




  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
 


  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent backdrop-blur-md w-full transition-all duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="text-2xl font-bold text-gray-800">Travelo</div>
      
      <ul className="hidden md:flex gap-8  cursor-pointer text-gray-600">
        <li><a href="#home" className=" cursor-pointer hover:text-[#DF6951]" onClick={(e) => {
          e.preventDefault();
          handleScrollToSection("home");
        }}>Home</a></li>
        <li><a href="#categories" className=" cursor-pointer hover:text-[#DF6951]" onClick={(e) => {
          e.preventDefault();
          handleScrollToSection("categories");
        }}>Categories</a></li>
        <li><a href="#about" className="cursor-pointer hover:text-[#DF6951]" onClick={(e) => {
          e.preventDefault();
          handleScrollToSection("about");
        }}>About</a></li>
        <li><a href="#contact" className="cursor-pointer    hover:text-[#DF6951]" onClick={(e) => {
          e.preventDefault();
          handleScrollToSection("contact");
        }}>Contact</a></li>
      </ul>

      <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-600">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
