import React from "react";
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
  return (
    <div className="text-white sidebar bg-[#121212] rounded-lg py-6 px-4  flex flex-col gap-3 ">
      <div className="flex justify-between   items-center">
        <div className="flex gap-3  items-center hover:text-white transition-colors duration-500 cursor-pointer text-white/70 ">
          <span>
            <FaBook className="text-xl " />
          </span>
          <span className="text-md font-bold">Your Library</span>
        </div>
        <div className=" flex gap-5 items-center ">
          <span>
            <FaPlus className="text-white/70 hover:text-white transition-colors duration-400" />
          </span>
          <span>
            <FaArrowRight className="text-white/70 hover:text-white transition-colors duration-400" />
          </span>
        </div>
      </div>
      <div></div>
      <div className="flex justify-between items-center">
        <div>
          <span>
            <FaSearch className="text-lg  text-white/70 hover:text-white  pointer" />
          </span>
        </div>
        <div className="flex items-center gap-2  text-white/70 hover:text-white  hover:scale-100 scale-95 text-md">
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
  );
}
