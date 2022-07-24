import React, { useEffect, useRef } from "react";
import "../App.css";
import MultipleSelectButton from "./MultipleSelectButton";

import MultipleSelectMenu from "./MultipleSelectMenu";

import SelectButton from "./Select";

import {
  DeselectAllCheckboxes,
  SelectAllCheckboxes,
  ToggleCurrentCheckbox,
  ToggleSelectMenu,
  CloseSelectMenu,
} from "../functions";
const Modal = ({ eventColor, toggleModal }) => {
  const optionSelect = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (optionSelect.current && !optionSelect.current.contains(e.target)) {
        CloseSelectMenu("option-select");
      }
    });
  }, []);
  return (
    <div className="modal">
      <div
        style={{
          position: "absolute",
          zIndex: "40",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          top: "0px",
        }}
      >
        <div
          id="calendar-modal"
          style={{
            backgroundColor: "white",
            position: "fixed",
            top: "220px",
            left: "300px",
            width: "58%",
            padding: "10px",
            height: "300px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "10%",
                border: "1px solid white",
                height: "80px",
                backgroundColor: eventColor,
                marginTop: "9.9%",
              }}
            ></div>
            <div
              className="w-full absolute border-black h-1/5 top-0"
              style={{ backgroundColor: "#324960" }}
            >
              <h1 className="text-3xl text-center text-white mt-3">
                Event Details
              </h1>
            </div>
            <div
              class="table-wrapper"
              style={{ marginLeft: "3%", marginTop: "10%", width: "82%" }}
            >
              <table class="fl-table">
                <thead>
                  <tr>
                    <th>RN</th>
                    <th>RN/LPN</th>
                    <th>CRMA/PSS</th>
                    <th>CNA</th>
                    <th>CNA-M</th>
                    <th>Repeat This Needs List</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-20">
                      <input
                        className="border-2 rounded-md border-slate-400 outline-none"
                        type="number"
                        style={{ width: "80%" }}
                      />
                    </td>
                    <td className="w-20">
                      <input
                        className="border-2 rounded-md border-slate-400 outline-none"
                        type="number"
                        style={{ width: "80%" }}
                      />
                    </td>
                    <td className="w-20">
                      <input
                        className="border-2 rounded-md border-slate-400 outline-none"
                        type="number"
                        style={{ width: "80%" }}
                      />
                    </td>
                    <td className="w-20">
                      <input
                        className="border-2 rounded-md border-slate-400 outline-none"
                        type="number"
                        style={{ width: "80%" }}
                      />
                    </td>
                    <td className="w-20">
                      <input
                        className="border-2 rounded-md border-slate-400 outline-none"
                        type="number"
                        style={{ width: "80%" }}
                      />
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <div className="relative mr-5">
                          <MultipleSelectButton
                            text="Select Option"
                            onClick={() => {
                              ToggleSelectMenu("option-select");
                            }}
                          />

                          <MultipleSelectMenu
                            id="option-select"
                            reference={optionSelect}
                          >
                            <SelectButton
                              onClick={(e) => {
                                if (e.currentTarget.firstChild.checked) {
                                  DeselectAllCheckboxes("option");
                                } else {
                                  SelectAllCheckboxes("option");
                                }
                              }}
                              checkboxName="option"
                              text="SELECT ALL"
                            />

                            <SelectButton
                              onClick={() => {
                                ToggleCurrentCheckbox("option-1");
                              }}
                              checkboxId="option-1"
                              checkboxName="option"
                              text="Option 1"
                              value="Option 1"
                            />

                            <SelectButton
                              onClick={() => {
                                ToggleCurrentCheckbox("option-2");
                              }}
                              checkboxId="option-2"
                              checkboxName="option"
                              text="Option 2"
                              value="Option 2"
                            />

                            <SelectButton
                              onClick={() => {
                                ToggleCurrentCheckbox("option-3");
                              }}
                              checkboxId="option-3"
                              checkboxName="option"
                              text="Option 3"
                              value="Option 3"
                            />
                          </MultipleSelectMenu>
                        </div>
                        <input
                          type="date"
                          className="w-32 rounded-md border-2 border-slate-400 pl-1 outline-none text-center"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ float: "right" }}>
            <button
              style={{
                width: "100px",
                height: "40px",
                position: "relative",
                right: "31px",
                backgroundColor: "#324960",
                border: "1px solid whitesmoke",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => toggleModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
