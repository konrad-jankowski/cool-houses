"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src={logo}
      alt="logo"
      width={110}
      height={110}
      className="flex-2 text-center mx-14 transition duration-300 hover:opacity-70 cursor-pointer"
    />
  );
};

export default Logo;
