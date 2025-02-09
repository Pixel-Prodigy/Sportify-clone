import React, { useState } from "react";
import { HistoryParent } from "./mainHistory/HistoryParent";
import { MainShadow } from "./MainShadow/MainShadow";

export function MainTopComp() {
  const [shadow, setShadow] = useState(false);
  return (
    <>
      <MainShadow topShadow={shadow} />
      <HistoryParent
        onMouseEnter={() => setShadow(true)}
        onMouseLeave={() => setShadow(false)}
      />
    </>
  );
}
