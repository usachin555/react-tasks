import { useState } from "react";
import React from "react";
import "./theme.css";

const Theme = () => {
    debugger;
  
  const [darkTheme, setDarkTheme] = useState(false);
  // const [lightTheme, setLightTheme] = useState(true)

  const theme = {
    darkTheme: {
      backgroundColor: "grey",
      color: "white",
      padding: "20px",
    },
    lightTheme: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
    },
  };
  return (
    <div className="main-container">
      <div className="toggle">
        <label for="innput">Enable Dark Theme:</label>
        <input
          className="innput"
          type="checkbox"
          checked={darkTheme}
          onChange={() => setDarkTheme((prevTheme) => !prevTheme)}
        />
      </div>
      <div
        className="theme"
        style={darkTheme ? theme.darkTheme : theme.lightTheme}
      >
        <h1>useState hook in React</h1>
        <p>
          useState hook allows us to state iinside the functional Components
        </p>
      </div>
    </div>
  );
};

export default Theme;
