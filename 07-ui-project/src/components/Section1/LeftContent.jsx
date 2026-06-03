import React from "react";
import "remixicon/fonts/remixicon.css";
import Arrow from "./Arrow";
import HeroText from "./HeroText";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col w-1/3">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
