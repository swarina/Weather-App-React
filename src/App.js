import React from "react";

//API
const api = {
  key: "e32b604e9e53656e3f87f1ff8f73ccfe",
  base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter Location"
          />
        </div>
        <div className="location-box">
          <div className="location">India</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            10C
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
