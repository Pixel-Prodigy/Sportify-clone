import React, { useContext, useEffect } from "react";
import { MainHeader } from "../ui/Main/MainHeader";
import { Context } from "../ui/context/Context";
import { HistoryParent } from "../ui/Main/mainHistory/HistoryParent";
import { MainShadow } from "../ui/Main/MainShadow/MainShadow";
import { MainTopComp } from "../ui/Main/MainTopComp";
import { MainSmallBoxesParent } from "../ui/Main/MainSmallBoxes/MainSmallBoxesParent";
import { SmallBoxGrandDad } from "../ui/Main/MainSmallBoxes/SmallBoxGrandDad";

export function Main() {
  const { setScrolled } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <div className="main w-full z-1 overflow-x-scroll relative px-10 bg-[#121212] pt-5 rounded-lg shadow-xl">
        <MainHeader />
        <MainTopComp />
        <SmallBoxGrandDad />
    </div>
  );
}
