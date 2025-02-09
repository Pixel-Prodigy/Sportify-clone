import React, { useRef, useCallback, useContext } from "react";
import { SongHistory } from "./SongHistory";
import { Context } from "../../context/Context";

export function HistoryParent({...props}) {
  return (
    <div className="grid z-20 grid-cols-2 xl:grid-cols-4 gap-2 mt-6 gap-x-3 w-full max-w-[1600px] pr-10">
      {Array.from({ length: 8 }, (_, index) => (
        <SongHistory key={index} {...props} />
      ))}
    </div>
  );
}
