import React from "react";
import "../App.css";

const Modal = ({ eventColor, toggleModal }) => {
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
            left: "450px",
            width: "40%",
            padding: "10px",
            height: "350px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "100%",
                border: "1px solid white",
                height: "89px",
                backgroundColor: eventColor,
                marginTop: "15%",
              }}
            ></div>
            <div
              class="table-wrapper"
              style={{ marginLeft: "3%", marginTop: "15%" }}
            >
              <table class="fl-table">
                <thead>
                  <tr>
                    <th>RN</th>
                    <th>LPN</th>
                    <th>CNA</th>
                    <th>Add Another</th>
                    <th>Repeat This Needs List</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="number" style={{ width: "40px" }} />
                    </td>
                    <td>
                      <input type="number" style={{ width: "40px" }} />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <select style={{ margin: "10px" }}>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      <input type="date" />
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
                backgroundColor: "black",
                marginTop: "45px",
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
