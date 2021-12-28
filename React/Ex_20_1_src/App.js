import React, { useState, useEffect } from "react";
import Fetcher from "./components/Fetcher";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Fetcher />}
    </div>
  );
}
