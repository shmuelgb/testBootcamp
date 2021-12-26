import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleChange = (value, type) => {
    // console.log(value, type);
    switch (type) {
      case "seconds":
        setSeconds(value);
        setMinutes(value / 60);
        setHours(value / 120);
        break;
      case "minutes":
        setSeconds(value * 60);
        setMinutes(value);
        setHours(value / 60);
        break;
      case "hours":
        setSeconds(value * 120);
        setMinutes(value * 60);
        setHours(value);
        break;
      default:
        console.log("!");
    }
  };

  return (
    <div>
      <label htmlFor="seconds">seconds</label>
      <input
        onChange={(e) => handleChange(e.target.value, "seconds")}
        value={seconds}
        name="seconds"
        type="text"
      />
      <br />
      <label htmlFor="minutes">minutes</label>
      <input
        onChange={(e) => handleChange(e.target.value, "minutes")}
        value={minutes}
        name="minutes"
        type="text"
      />
      <br />
      <label htmlFor="hours">hours</label>
      <input
        onChange={(e) => handleChange(e.target.value, "hours")}
        value={hours}
        name="hours"
        type="text"
      />
    </div>
  );
}
