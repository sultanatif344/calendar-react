import React from "react";

const SelectButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="p-2 px-5 flex items-center space-x-2 w-full hover:bg-gray-100 rounded-md"
    >
      <input
        id={props.checkboxId}
        type="checkbox"
        className="w-4 h-4 rounded-md"
        name={props.checkboxName}
        value={props.value}
      />
      <span>{props.text}</span>
    </button>
  );
};

export default SelectButton;
