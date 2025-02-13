import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../context/Context";
export function MainHeader() {
  const { scrolled } = useContext(Context);
console.log(scrolled)

  return (
    <div
      className={`flex z-10 fixed gap-2 w-full ${
        scrolled ? " bg-[#221960]" : "bg-transparent "
      } transition-all duration-700 `}
    >
      <div className="py-2 px-4 bg-gray-600/50 text-sm  cursor-pointer w-fit rounded-full text-white ">
        All
      </div>
      <div className="py-2 px-4 bg-gray-600/50 text-sm  cursor-pointer w-fit rounded-full text-white ">
        Music
      </div>
      <div className="py-2 px-4 bg-gray-600/50 text-sm  cursor-pointer w-fit rounded-full text-white ">
        Podcasts
      </div>
    </div>
  );
}
