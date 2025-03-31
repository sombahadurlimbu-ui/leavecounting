import React, { useState } from 'react';
import "./DateList.css" 

function DateList() {
  const [days, setDays] = useState(1); // Default to 10 days

  // Function to generate dates
  const getDates = (numDays) => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  return (
    <div className='datelist'>
      <h2>Dates from Today:</h2>
      <ul>
        {getDates(days).map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
      <label>
        Number of days:
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value, 10))}
        />
      </label>
    </div>
  );
}

export default DateList;
