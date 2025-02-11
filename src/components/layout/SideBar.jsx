import React, { useEffect, useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { SideBarItem } from "../ui/sideBar/SideBarItem";
import {
  FaBook,
  FaListUl,
  FaArrowRight,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
export function SideBar() {
  const [show, setShow] = useState(false);
  if (!show) {
    return (
    
      <div className=" flex max-w-20 items-center h-full bg-[#121212] rounded-lg py-6 px-3  flex-col gap-4">
        <button className="p-2 cursor-pointer mb-2" onClick={() => setShow(true)}>
          <FaBook className="text-[1.3rem] text-white" />
        </button>
        <img className="h-14 rounded-[6px]" src="https://picsum.photos/100/100" alt="" />
        <img className="h-14 rounded-[6px]" src="https://picsum.photos/100/100" alt="" />
        <img className="h-14 rounded-[6px]" src="https://picsum.photos/100/100" alt="" />
        <img className="h-14 rounded-[6px]" src="https://picsum.photos/100/100" alt="" />
        <img className="h-14 rounded-[6px]" src="https://picsum.photos/100/100" alt="" />
      </div>
    );
  }
  return (
    <div className="h-full">
    <div className="text-white sidebar bg-[#121212] h-[93vh] xl:w-140 2xl:w-140 w-110   rounded-lg py-6 px-4  flex flex-col gap-3 ">
      <div className="flex items-center justify-between">
        <div
          onClick={() => setShow(false)}
          className="flex items-center gap-3 transition-colors duration-500 cursor-pointer hover:text-white text-white/60 "
        >
          <button className="px-2 py-2">
            <FaBook className="text-[1.3rem] " />
          </button>
          <span className="text-[1.2rem] mb-1 font-semibold">Your Library</span>
        </div>
        <div className="flex items-center gap-5 ">
          <span>
            <FaPlus className="transition-colors text-white/70 hover:text-white duration-400" />
          </span>
          <span>
            <FaArrowRight className="transition-colors text-white/70 hover:text-white duration-400" />
          </span>
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-between">
        <div>
          <span>
            <FaSearch className="text-lg text-white/60 hover:text-white pointer" />
          </span>
        </div>
        <div className="flex items-center gap-2 scale-95 text-white/70 hover:text-white hover:scale-100 text-md">
          <span className=" mt-[1px]">Recent</span>
          <span className="">
            <FaListUl />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {Array.from({ length: 5 }, (_, index) => {
          return <SideBarItem key={index} />;
        })}
      </div>
    </div>
    </div>
  );
}
