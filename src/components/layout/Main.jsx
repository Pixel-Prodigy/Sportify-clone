import { MainHeader } from "../ui/Main/MainHeader";
import { MainTopComp } from "../ui/Main/MainTopComp";
import { SmallBoxGrandDad } from "../ui/Main/MainSmallBoxes/SmallBoxGrandDad";

export function Main() {
  return (
    <div className="main w-full z-1 overflow-y-auto relative px-10 bg-[#121212] pt-5 rounded-lg shadow-xl">
      <div className="ml-[40%]">
        {" "}
        <MainHeader />
        <div className="pt-7 max-h-[90vh] mainParent">
          <MainTopComp />
          <SmallBoxGrandDad />
        </div>
      </div>
    </div>
  );
}
