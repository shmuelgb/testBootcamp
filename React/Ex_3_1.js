//import libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//create components
const App = () => {
  return (
    <div
      className="box-1"
      style={{
        // backgroundColor: "green",
        height: "500px",
        width: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          height: "400px",
          width: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "pink",
            height: "300px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "purple",
              height: "100px",
              width: "400px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "purple",
              height: "100px",
              width: "400px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
