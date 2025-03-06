import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  { title: "Event 1", start: new Date(2024, 1, 10), end: new Date(2024, 1, 10) },
  { title: "Event 2", start: new Date(2024, 1, 13), end: new Date(2024, 1, 13) },
  { title: "Event 3", start: new Date(2024, 1, 15), end: new Date(2024, 1, 15) },
];

const ReactCalender = () => {
  const [filterMode, setFilterMode] = useState("all");
  const [events, setEvents] = useState(initialEvents);
  const [count , setCount] = useState(0);

  const add =()=> {
    setCount(prev => prev+1); // react state bach upgrade 
    setCount(prev => prev+1);
    setCount(prev => prev+1);
  }

  const handleNextClick = () => {
    setFilterMode("all");
    generateEvents(); 
  };

  const handlePrevClick = () => {
    setFilterMode("odd"); 
    generateEvents();
  };

  const generateEvents = () => {
   
    const today = new Date();
    const newEvents = Array.from({ length: 31 }, (_, i) => ({
      title: `Hey${i + 1}`,
      start: addDays(today, i),
     end: addDays(today, i),
    }));
    setEvents(newEvents);
  };


  const filteredEvents =
    filterMode === "odd" ? events.filter((event) => event.start.getDate() % 2 !== 0)
: events;

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-center mb-3">

        <button className="btn btn-primary mx-2" onClick={handlePrevClick}>
          Prev (Odd Dates)
        </button>
        <button className="btn btn-success mx-2" onClick={handleNextClick}>
          Next (All Dates)
        </button>

      </div>

      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />


      <div classNam = "">
        {count}

        <button className="" onClick={add}>
          add
        </button>
      </div>
    </div>
  );
};

export default ReactCalender;
