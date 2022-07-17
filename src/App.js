import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/calendar.jsx";
import Modal from "./components/modal";
function App() {
  const [color, setColor] = useState("blue");
  const [toggleModal, setToggleModal] = useState(false);
  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div className="App">
      <Calendar changeColor={changeColor} toggleModal={setToggleModal} />
      {toggleModal ? (
        <Modal
          id={"calendar-modal"}
          eventColor={color}
          toggleModal={setToggleModal}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
