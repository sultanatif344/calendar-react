import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns";
import Modal from "./modal";
import { ShowModal } from "../functions";
const Calendar = ({ changeColor, toggleModal, modalToggled }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jumpDate, setJumpDate] = useState(new Date());
  const [color, setColor] = useState("blue");
  const [defaultValue, setDefaultValue] = useState("");
  useEffect(() => {
    const currentMonth = jumpDate.getMonth() + 1;
    const formattedValue =
      String(currentMonth).length == 1
        ? jumpDate.getFullYear() + "-0" + currentMonth
        : jumpDate.getFullYear() + "-" + currentMonth;
    console.log(formattedValue);
    setDefaultValue(formattedValue);
  }, []);
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div
        className="header row flex-middle"
        style={{ borderBottom: "1px solid grey" }}
      >
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return (
      <div className="days row" style={{ color: "black" }}>
        {days}
      </div>
    );
  };
  const renderCells = () => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 36; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            style={{
              height: "140px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "5px",
            }}
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? ""
                : ""
            }`}
            key={day}
            // onClick={() => onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <br />

            {dateFns.isSameMonth(day, monthStart) ? (
              <button
                style={{
                  backgroundColor: "blue",
                  border: "none",
                  width: "90%",
                  height: "20%",
                  marginLeft: "10px",
                }}
                onClick={() => [changeColor("blue"), toggleModal(true)]}
              ></button>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <button
                style={{
                  backgroundColor: "lightGreen",
                  border: "none",
                  width: "90%",
                  height: "20%",
                  marginLeft: "10px",
                }}
                onClick={() => [changeColor("lightGreen"), toggleModal(true)]}
              ></button>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <button
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  width: "90%",
                  height: "20%",
                  marginLeft: "10px",
                }}
                onClick={() => [changeColor("orange"), toggleModal(true)]}
              ></button>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <button
                style={{
                  backgroundColor: "pink",
                  border: "none",
                  width: "90%",
                  height: "20%",
                  marginLeft: "10px",
                }}
                onClick={() => [changeColor("pink"), toggleModal(true)]}
              ></button>
            ) : (
              <div></div>
            )}
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
      return <div className="body">{rows}</div>;
    }
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const jumpMonth = () => {
    console.log(jumpDate);
    setCurrentMonth(
      dateFns.setMonth(new Date(jumpDate), new Date(jumpDate).getMonth())
    );
  };

  const handleChange = (e) => {
    setJumpDate(e.target.value);
  };
  return (
    <div className="calendar">
      {modalToggled ? (
        <div style={{ filter: "blur(2.5px)" }}>
          <div style={{ padding: "5px" }}>
            <input type="month" id="start" name="start" />
            <button>Go</button>
          </div>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      ) : (
        <div>
          <div style={{ padding: "5px" }}>
            <input
              type="month"
              id="start"
              name="start"
              defaultValue={defaultValue}
              className="outline-none border text-center"
              onChange={(e) => handleChange(e)}
            />
            <button
              className="bg-black text-white w-20 ml-5 rounded-md"
              onClick={jumpMonth}
            >
              Go
            </button>
          </div>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      )}
    </div>
  );
};

export default Calendar;
