"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLi from "./NavLi";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <>
      <header
        className={`
        hidden
        lg:block
        top-0 
        left-0 
        right-0 
        z-40 
        bg-black
        text-white
        px-[9rem] 
        font-beautyFont 
        tracking-wider
      `}
      >
        <div className="flex justify-between items-center py-4">
          <nav className="flex-1 text-center">
            <ul className="flex justify-between  items-center">
              <NavLi title="O NAS" isActive />
              <NavLi title="DOMKI" />
              <NavLi title="OFERTY" />
              <NavLi title="ATRAKCJE" />
            </ul>
          </nav>
          <Logo />
          <nav className="flex-1 text-center">
            <ul className="flex justify-between items-center">
              <NavLi title="GALERIA" />
              <NavLi title="OKOLICA" />
              <NavLi title="KONTAKT" />
              <Link href="/rezerwuj" className="_button">
                REZERWUJ
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <nav className="lg:hidden flex justify-between items-center px-4 py-4">
        <div className="invert w-[60px] h-[60px]">
          <Logo />
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
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
