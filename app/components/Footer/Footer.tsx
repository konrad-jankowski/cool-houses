import Map from "./Map";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { IoTriangleOutline } from "react-icons/io5";
import { LogoIcon } from "../Icons/LogoIcon";

const Footer = () => {
  return (
    <footer className="text-white bg-darkColor px-8 lg:px-28 py-10 flex flex-col lg:flex-row justify-between">
      <LogoIcon className="mx-auto lg:mx-0 w-40 h-40 text-primary cursor-pointer" />
      <div>
        <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row gap-6 lg:gap-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-primary">Adres</span>
              <span>Słoneczne Chatki</span>
              <span>ul. Polna 16</span>
              <span>34-434 Knurów</span>
            </div>
            <div>
              <span className="text-primary">Social Media</span>
              <div className="flex gap-4 mt-1.5">
                <BsFacebook
                  size={20}
                  className="fill-white hover:fill-primary cursor-pointer"
                />
                <BsInstagram
                  size={20}
                  className="fill-white hover:fill-primary cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-primary">Kontakt</span>
            <div>
              tel:{" "}
              <span className="hover:text-primary cursor-pointer">
                +48 880 251 809
              </span>
            </div>
            <div>
              email:{" "}
              <span className="hover:text-primary cursor-pointer">
                slonecznechatki@gmail.com
              </span>
            </div>
          </div>
          <Map />
        </div>
        <nav>
          <ul className="font-beautyFont flex flex-col lg:flex-row items-center gap-4 lg:gap-20 text-base lg:text-lg mt-8 lg:mt-4">
            <li className="hover:text-primary cursor-pointer">O NAS</li>
            <li className="hover:text-primary cursor-pointer">OFERTY</li>
            <li className="hover:text-primary cursor-pointer">GALERIA</li>
            <li className="hover:text-primary cursor-pointer">KONTAKT</li>
            <li className="hover:text-primary cursor-pointer">OPINIE</li>
            <IoTriangleOutline
              size={30}
              className="text-primary cursor-pointer"
            />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
