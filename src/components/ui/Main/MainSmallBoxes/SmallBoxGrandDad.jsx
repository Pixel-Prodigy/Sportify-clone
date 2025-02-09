import React from "react";
import { MainSmallBoxesParent } from "./MainSmallBoxesParent";

export function SmallBoxGrandDad() {
  return (
    <div className="flex flex-col gap-12 mt-11">
      {Array.from({ length: 10 }, (_, index) => (
        <MainSmallBoxesParent key={index} />
      ))}
    </div>
  );
}
