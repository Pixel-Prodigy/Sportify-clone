import React, { useEffect, useState } from "react";
import { MainSmallBoxes } from "./MainSmallBoxes";
import { faker } from "@faker-js/faker";
export function MainSmallBoxesParent() {
  const [word, setWord] = useState("");
  useEffect(() => {
    setWord(faker.word.words(3));
  }, []);
  return (
    <div className="flex flex-col gap-5 max-h-fit  w-fit">
      <div className="flex justify-between items-center cursor-pointer ">
        <h2 className="text-white text-[1.9rem] hover:underline decoration-1 font-bold">
          {word}
        </h2>
        <p className="text-white mt-1 text-sm mr-11 font-semibold hover:underline decoration-white decoration-1 ">
          Show all
        </p>
      </div>
      <div className="flex overflow-x-auto max-w-[85vh]  gap-6 ">
        {Array.from({ length: Math.floor(Math.random(5) * 50) }, (_, index) => (
          <MainSmallBoxes key={index} />
        ))}
      </div>
    </div>
  );
}
