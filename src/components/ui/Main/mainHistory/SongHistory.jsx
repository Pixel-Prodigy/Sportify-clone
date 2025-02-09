import React, { useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { FaPlay } from "react-icons/fa";
import { Context } from "../../context/Context";

export function SongHistory({ hover, ...props }) {
  const [randomName, setRandomName] = useState("");
  const [randomImage, setRandomImage] = useState("");
  useEffect(() => {
    setRandomName(faker.person.fullName());
    setRandomImage(faker.image.avatar());
  }, []);

  return (
    <div
      className="flex group gap-2 z-20  text-white/90 font-semibold bg-gray-500/29 items-center hover:bg-gray-400/35 justify-between rounded-[2px]  cursor-pointer transition-colors pr-2 duration-350"
      {...props}
    >
      <div className="flex gap-2 h-full">
        {randomImage ? (
          <img
            className="h-[54px] rounded-tl-[2px] rounded-bl-[2px]"
            src={randomImage}
            alt={randomName}
          />
        ) : (
          "loading..."
        )}
        <span className="flex font-bold h-full items-center">{randomName}</span>
      </div>
      <div className="opacity-0 flex justify-center pl-1 items-center shadow-md shadow-black/80 group-hover:opacity-100 transition-transform group-hover:scale-100 scale-90 bg-green-500 rounded-full h-[32px] w-[32px]">
        <FaPlay className="text-black h-[16px] w-[16px]" />
      </div>
    </div>
  );
}
