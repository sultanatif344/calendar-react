import React from "react";
import { useRef } from "react";

const MultipleSelectMenu = (props) => {
  return (
    <div
      id={props.id}
      ref={props.reference}
      className="absolute z-40 top-full h-40 overflow-auto bg-white mt-2 rounded-md border shadow-md transition-all duration-300"
      style={{ display: "none" }}
    >
      {props.children}
    </div>
  );
};

export default MultipleSelectMenu;
