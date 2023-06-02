"use client";

import Image from "next/image";
import logo from "../../../public/chatki.svg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src={logo}
      alt="logo"
      width={210}
      height={210}
      className="flex-2 text-center mx-14 transition duration-300 hover:opacity-70 cursor-pointer"
    />
  );
};

export default Logo;
