import React from "react";

interface NavLi {
  title: string;
  isActive?: boolean;
  scrolled?: boolean;
}

const NavLi: React.FC<NavLi> = ({ title, isActive, scrolled }) => {
  return (
    <li
      className={`
      relative 
      cursor-pointer 
      hover:text-primary 
      after:content-[''] 
      after:w-full 
      after:h-[1.5px] 
      after:left-0 
      after:-bottom-[6px] 
      ${scrolled ? "after:bg-white" : "after:bg-black"} 
      after:bg-white 
      after:scale-x-[0] 
      after:absolute 
      after:transition 
      after:duration-300 
      ${isActive && "after:scale-x-[1.1]"} 
      hover:after:scale-x-[1.1] 
      hover:after:bg-primary
      `}
    >
      {title}
    </li>
  );
};

export default NavLi;
