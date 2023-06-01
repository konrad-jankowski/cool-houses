import Button from "../Button";
import Logo from "./Logo";
import NavLi from "./NavLi";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white/90 px-[9rem] font-beautyFont tracking-wider	">
      <div className="flex justify-between items-center mt-10">
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
            <Button />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
