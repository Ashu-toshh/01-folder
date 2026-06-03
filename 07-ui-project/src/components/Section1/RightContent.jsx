import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-2/3 overflow-x-auto rounded-4xl p-4 flex flex-nowrap gap-7"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            img={elem.img}
            color={elem.color}
            key={idx}
            id={idx}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
