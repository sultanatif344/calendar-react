import React from "react";

import { AiFillCaretDown } from "react-icons/ai";

const MultipleSelectButton = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="relative bg-white border-2 border-slate-400 rounded-md cursor-pointer"
    >
      <div className="p-1.5 px-5">{props.text}</div>
      <span className="absolute right-4 top-2.5">
        <AiFillCaretDown />
      </span>
    </div>
  );
};

export default MultipleSelectButton;
