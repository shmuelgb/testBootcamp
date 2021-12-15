//import libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//create components
const App = () => {
  return (
    <div>
      <Quiz />
    </div>
  );
};

function Quiz(prop) {
  return (
    <div className="quiz">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}
function QuizTitle(prop) {
  return (
    <div className="quiz-title">
      <h2>How Do You Like Front End?</h2>
    </div>
  );
}
function Q1(prop) {
  return (
    <div className="q1">
      <Q1Title />
      <Q1Input />
    </div>
  );
}
function Q1Title(prop) {
  return (
    <div className="q1-title">
      <p>How Do You Love Front End?</p>
    </div>
  );
}
function Q1Input(prop) {
  return (
    <div className="q-input">
      <input type="range" />
    </div>
  );
}
function Q2(prop) {
  return (
    <div className="q2">
      <Q2Title />
      <Q2Input />
    </div>
  );
}
function Q2Title(prop) {
  return (
    <div className="q-title">
      <p>What is your favorite topic?</p>
    </div>
  );
}
function Q2Input(prop) {
  return (
    <div className="q-input">
      <input type="text" />
    </div>
  );
}

//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
