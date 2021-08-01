import React from "react";

//API
const api = {
  key: "e32b604e9e53656e3f87f1ff8f73ccfe",
  base: "https://api.openweathermap.org/data/2.5/",
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
      </main>
    </div>
  );
}

export default App;
