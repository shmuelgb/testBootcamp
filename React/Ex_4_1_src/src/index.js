//import libraries
import React from "react";
import ReactDOM from "react-dom";
import Btn from './Btn.js'
import "./index.css";

//create components
const App = () => {
  return (
    <div className='buttons'>
      <Btn text = 'Important'/>
      <Btn text = 'Not Important'/>
    </div>
  );
};


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
