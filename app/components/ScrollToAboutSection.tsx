"use client";

import React from "react";
import { IoTriangleOutline } from "react-icons/io5";

export const ScrollToAboutSection = () => {
  return (
    <IoTriangleOutline
      onClick={() => {
        const element = document.getElementById("about");
        element?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="absolute m-auto left-0 right-0 z-50 bottom-10  _floating cursor-pointer"
      size={42}
      color="white"
    />
  );
};
