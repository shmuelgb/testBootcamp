import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (toggle) {
      inputRef.current.focus();
    }
  }, [toggle]);

  const handleEdit = (e) => {
    setToggle(!toggle);
    e.target.innerText = "Save";
  };

  return (
    <div>
      <button onClick={(e) => handleEdit(e)}>Edit</button>
      {toggle && <input type={"text"} ref={inputRef} />}
    </div>
  );
}
