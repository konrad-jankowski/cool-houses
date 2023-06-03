"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLi from "./NavLi";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <header
      className={`
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
  );
};

export default Navbar;
