import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [win, setWin] = useState(false);
  const [winConformation, setWinConformation] = useState("");
  const [focusInterval, setFocusInterval] = useState();
  const inputRef = useRef();

  // String.prototype.cleanup = function () {
  //   return this.replace(/[^a-zA-Z0-9]+/g, " ");
  // };

  const myFunc = () => {
    setCounter((prevCounter) => setCounter(prevCounter + 1));
  };

  useEffect(() => {
    setFocusInterval(setInterval(() => inputRef.current.focus(), 50));
  }, []);

  useEffect(() => {
    if (win) clearInterval(focusInterval);
  }, [win]);

  const confirmWin = async () => {
    const { data } = await axios.get(
      "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=Pizza"
    );
    const targetSnippet = data.query.search[0].snippet;
    let token = winConformation.split(" ");
    const tokens = [];
    tokens.push(token[token.length - 1]);
    tokens.push(token[token.length - 2]);
    tokens.push(token[token.length - 3]);
    tokens.push(token[token.length - 4]);

    console.log("tokens:", tokens);
    console.log("snippet", data.query.search[0].snippet);
    console.log("winConformation", winConformation);

    if (tokens.every((t) => targetSnippet.includes(t))) console.log("!");
    else console.log("?");
  };

  return (
    <div>
      <div onFocus={myFunc}>
        <Iframe
          url="https://en.wikipedia.org/wiki/Pizza"
          width="100%"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
      {/* <iframe
        id="frame"
        title="uniq"
        width="50%"
        height="450px"
        src="https://he.wikipedia.org/wiki/%D7%A4%D7%99%D7%A6%D7%94"
      ></iframe> */}
      <h1>{counter}</h1>
      <input ref={inputRef} onBlur={myFunc} type="text" />
      <button onClick={() => setWin(true)}>I Won!</button>
      {win && (
        <input
          type="text"
          value={winConformation}
          onChange={(e) => setWinConformation(e.target.value)}
        />
      )}
      <button onClick={confirmWin}>Confirm</button>
    </div>
  );
}
