import React, { useState, useEffect, useRef } from "react";
import video from "./flower.webm";
import "./App.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (toggle) videoRef.current.play();
    else videoRef.current.pause();
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Play/Pause</button>
      <video ref={videoRef}>
        <source src={video} />
      </video>
    </div>
  );
}
