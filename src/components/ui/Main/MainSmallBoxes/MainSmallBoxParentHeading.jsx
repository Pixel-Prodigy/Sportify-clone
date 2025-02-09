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
    <div className="relative text-white w-full h-fit cursor-pointer group ">
      {image ? <img className="h-34 min-w-34  rounded-md" src={image} alt="" /> : <p className="text-white font-bold text-xl">loading...</p>}
    <h2 className=" text-xl text-white hover:underline decoration-1">{name}</h2>
      <p className="text-sm text-white/60 hover:underline decoration-1  mt-3">
        {name},{name}
      </p>
      <div className="opacity-0 flex absolute shadow-md shadow-black/30 top-19 right-1 justify-center items-center group-hover:opacity-100 duration-250 transition-all group-hover:translate-y-0 translate-y-2 scale-90 bg-green-500 rounded-full h-13 w-13">
        <FaPlay className="text-black ml-1 text-xl" />
      </div>
    </div>
  );
}
