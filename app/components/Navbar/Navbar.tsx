"use client";

import { useEffect, useState } from "react";
import NavLi from "./NavLi";
import Link from "next/link";
import { LogoIcon } from "../Icons/LogoIcon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        ${scrolled ? "bg-white text-black shadow" : "bg-transparent text-white"}
        hidden
        lg:block
        lg:fixed
        top-0 
        left-0 
        right-0 
        relative  
        z-[9999] 
        px-[9rem] 
        font-beautyFont 
        tracking-wider
        transition-all
        
      `}
      >
        <div className="flex justify-between items-center py-4">
          <nav className="flex-1 text-center">
            <ul className="flex justify-between items-center">
              <NavLi title="O NAS" isActive scrolled />
              <NavLi title="DOMKI" />
              <NavLi title="OFERTY" />
              <NavLi title="ATRAKCJE" />
            </ul>
          </nav>
          <LogoIcon
            className={`mx-14 transition-all duration-200 hover:opacity-70 cursor-pointer ${
              scrolled && "text-primary w-16 h-16"
            }`}
          />
          <nav className="flex-1 text-center">
            <ul className="flex justify-between items-center">
              <NavLi title="GALERIA" />
              <NavLi title="OKOLICA" />
              <NavLi title="KONTAKT" />
              <Link
                href="/rezerwuj"
                className={`${scrolled ? "_button3" : "_button"}`}
              >
                REZERWUJ
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="lg:hidden flex justify-between items-center px-4 py-4 text-primary">
        <LogoIcon className="w-12 h-12" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
