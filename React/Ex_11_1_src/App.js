import React from "react";
import Button from "./components/Button.js";

class App extends React.Component {
  state = { selectedColor: "" };
  createButtons = () => {
    const colors = ["red", "green", "blue", "black"];
    return colors.map((color) => {
      return (
        <div>
          <Button color={color} onBtnClick={this.onBtnClick} />
        </div>
      );
    });
  };

  onBtnClick = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div>
        {this.createButtons()}
        <h1>the color selected is {this.state.selectedColor}</h1>
      </div>
    );
  }
}

export default App;
