import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { FaPlay } from "react-icons/fa";
export function MainSmallBoxes() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(faker.person.fullName());
    setImage(faker.image.avatar());
  }, []);
  return (
    <div className="relative text-white w-full h-fit hover:bg-  max-w-[173px] cursor-pointer group ">
      {image ? (
        <img
          className="h-[153px] min-w-[153px]  rounded-[6px]"
          src={image}
          alt=""
        />
      ) : (
        <p className="text-white font-bold text-xl">loading...</p>
      )}
      <div>
        <h2 className="flex gap-2 "></h2>
        <p className="text-sm brake-words line-clamp-2  text-white/80 hover:underline decoration-1  mt-3">
          {name},{name}
        </p>
      </div>

      <div className="opacity-0 hover:scale-101 flex absolute shadow-md shadow-black/30 top-23 right-1 justify-center items-center group-hover:opacity-100 duration-250 transition-all group-hover:translate-y-0 translate-y-2 scale-90 bg-[#1ed760;] rounded-full h-[55px] w-[55px]">
        <FaPlay className="text-black ml-1 text-[20px]" />
      </div>
    </div>
  );
}
