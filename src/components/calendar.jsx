import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns";

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
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <br />

            {dateFns.isSameMonth(day, monthStart) ? (
              <div className="relative">
                <input type="checkbox" className="top-2 left-4 absolute" />
                <button
                  className="bg-blue-800 w-48 h-auto ml-1.5 text-xs text-white px-7 py-1.5 text-left"
                  onClick={() => [changeColor("blue"), toggleModal(true)]}
                >
                  First Shift | 9am - 3pm
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <div className="relative">
                <input type="checkbox" className="top-2 left-4 absolute" />
                <button
                  className="bg-green-400 w-48 h-auto ml-1.5 text-xs text-white px-7 py-1.5 text-left"
                  onClick={() => [changeColor("lightGreen"), toggleModal(true)]}
                >
                  Second Shift | 3pm - 6pm
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <div className="relative">
                <input type="checkbox" className="top-2 left-4 absolute" />
                <button
                  className="bg-orange-400 w-48 h-auto ml-1.5 text-xs text-white px-7 py-1.5 text-left"
                  onClick={() => [changeColor("orange"), toggleModal(true)]}
                >
                  Third Shift | 6pm - 9pm
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {dateFns.isSameMonth(day, monthStart) ? (
              <div className="relative">
                <input type="checkbox" className="top-2 left-4 absolute" />
                <button
                  className="bg-pink-400 w-48 h-auto ml-1.5 text-xs text-white px-7 py-1.5 text-left"
                  onClick={() => [changeColor("pink"), toggleModal(true)]}
                >
                  Custom Shift | Design
                </button>
              </div>
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
