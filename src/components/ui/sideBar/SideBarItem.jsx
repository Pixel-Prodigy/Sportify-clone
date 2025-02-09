import React, { useEffect, useMemo, useState } from "react";
import { FaBookmark, FaBullseye, FaPlay } from "react-icons/fa";
import { faker } from "@faker-js/faker";

export function SideBarItem() {
  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    setFirstName(faker.person.firstName());
    setImage(faker.image.avatar());
    setNum(faker.number.int({ min: 1, max: 99 })); 
  }, []);

  return (
    <div className="flex cursor-pointer items-center gap-3 relative py-1 hover:bg-gray-500/25 rounded-l-md group">
      {image ? (
        <div className="relative">
          <img className="h-[48px] w-[48px]  rounded-md" src={image} alt="Avatar" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
            <FaPlay size={21} className="text-white group-hover: group-hover:scale-105 " />
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}

      <div className="flex flex-col ">
        <h2 className="text-white text-lg">{firstName}</h2>
        <p className="text-sm text-white/50 flex items-center gap-2">
          <FaBookmark className="text-green-500/90 text-md" />
          {firstName}
          <FaBullseye className="text-[7px]" />
          {num} songs
        </p>
      </div>
    </div>
  );
}
