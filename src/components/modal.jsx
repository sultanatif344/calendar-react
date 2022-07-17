import React from "react";
import "../App.css";

const Modal = ({ eventColor, toggleModal }) => {
  return (
    <div className="modal">
      <div
        id="calendar-modal"
        style={{
          position: "absolute",
          zIndex: "40",
          top: "300px",
          left: "390px",
          backgroundColor: "white",
          width: "40%",
          padding: "10px",
          height: "auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "150px",
              border: "1px solid black",
              height: "89px",
              backgroundColor: eventColor,
            }}
          ></div>
          <div class="table-wrapper">
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
                  <td>3</td>
                  <td>4</td>
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
              border: "none",
              boxShadow: "30px",
              border: "1px solid whitesmoke",
              color: "white",
            }}
            onClick={() => toggleModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
