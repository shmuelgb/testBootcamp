import React from "react";
import Checkbox from "./components/Checkbox.js";

class App extends React.Component {
  state = { selectedColor: "" };

  render() {
    return (
      <div>
        <form action="">
          <Checkbox label="first" checked="" />
          <Checkbox label="second" checked="" />
          <Checkbox label="third" checked="true" />
          <Checkbox label="forth" checked="true" />
        </form>
      </div>
    );
  }
}

export default App;
