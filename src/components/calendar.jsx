import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns";

const Calendar = ({ changeColor, toggleModal, modalToggled }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const selectedDate = new Date();
  const [jumpDate, setJumpDate] = useState(new Date());
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
      <div className="header row border-b-2 border-gray-100 flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        {/* Date Display */}
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

  // Main Function That Renders cells correctly in calendar
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
      // Render Cells as long as no of cells are less then the set no of cells to render here it is 36
      for (let i = 0; i < 36; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? ""
                : ""
            } border border-gray-100 h-48 flex justify-center flex-col p-2`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <br />

            {/* if cell is of same month else do not add button*/}
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

            {/* if cell is of same month else do not add button*/}
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

            {/* if cell is of same month else do not add button*/}

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

            {/* if cell is of same month else do not add button*/}

            {dateFns.isSameMonth(day, monthStart) ? (
              <div className="relative">
                <input type="checkbox" className="top-2 left-4 absolute" />
                <button
                  className="bg-pink-400 w-48 h-auto ml-1.5 text-xs text-white px-7 py-1.5 text-left"
                  onClick={() => [changeColor("pink"), toggleModal(true)]}
                >
                  Custom Shift
                </button>
                <input
                  type="number"
                  placeholder="From"
                  className="absolute top-1.5 right-14 w-1/5 text-xs"
                />
                <input
                  type="number"
                  placeholder="To"
                  className="absolute top-1.5 right-2 w-1/5 text-xs"
                />
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
          <div className="p-5">
            <input type="month" id="start" name="start" />
            <button>Go</button>
          </div>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      ) : (
        <>
          <div className="p-5">
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
        </>
      )}
    </div>
  );
};

export default Calendar;
