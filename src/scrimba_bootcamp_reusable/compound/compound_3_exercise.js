import React, { useState } from 'react';

import { createContext, useContext } from 'react';

// We want to change App to:
// <DateFields value={startDate} onChange={setStartDate}>
//  <MonthField aria-label="Start Month" />
//  <DayField aria-label="Start Day" />
//  <YearField start={2018} end={2019} aria-label="Start year" />
// </DateFields>

// The tasks:
// 1) Edit App to stop rendering the individual components
//    in DateFields and render children instead
// 2) Provide Context in DateFields
// 3) Use the Context in MonthField, DayField, and YearField.
function App() {
  const [startDate, setStartDate] = useState(new Date('May 28, 2020'));
  return (
    <div>
      <h1>Dates!</h1>
      <DateFields
        value={startDate}
        onChange={setStartDate}
        start={2010}
        end={2020}
      >
        <YearField />
        <MonthField />/
        <DayField />/
      </DateFields>
    </div>
  );
}

let DateContext = createContext();
function DateFields({ children, start, end, value, onChange }) {
  let date = value;
  return (
    <DateContext.Provider value={{ start, end, date, onChange }}>
      {children}
    </DateContext.Provider>
  );
}

function DayField() {
  const { date, onChange } = useContext(DateContext);
  const value = date.getDate();
  const handleChange = (event) => {
    const newDate = new Date(date.getTime());
    newDate.setDate(parseInt(event.target.value));
    onChange(newDate);
  };

  return (
    <select value={value} onChange={handleChange}>
      {Array.from({ length: 31 }).map((_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
}

function MonthField() {
  const { date, onChange } = useContext(DateContext);
  const month = date.getMonth();
  const handleChange = (event) => {
    const newDate = new Date(date.getTime());
    console.log('month', event.target.value);
    newDate.setMonth(parseInt(event.target.value - 1));
    console.log('newDate', newDate);
    onChange(newDate);
  };

  return (
    <select value={month} onChange={handleChange}>
      {Array.from({ length: 12 }).map((_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
}

function YearField() {
  const { date, onChange, start, end } = useContext(DateContext);
  const years = Array.from({ length: end - start + 1 }).map(
    (_, index) => index + start
  );
  const handleChange = (event) => {
    const newDate = new Date(date.getTime());
    newDate.setYear(parseInt(event.target.value), 1);
    onChange(newDate);
  };

  return (
    <select value={date.getFullYear()} onChange={handleChange}>
      {years.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}

export default App;
