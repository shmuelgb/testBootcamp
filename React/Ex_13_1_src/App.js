import React from "react";
// import axios from "axios";
import "./App.css";
import Data from "./data.js";
import Names from "./components/Names";
import Card from "./components/Card";

class App extends React.Component {
  state = { data: Data(), names: [], seniors: null };

  componentDidMount = () => {
    const names = this.names();
    this.setState({ names: names });
    const older = this.older();
    this.setState({ seniors: older });
  };
  names = () => {
    return this.state.data.map((person) => {
      return person.name;
    });
  };
  older = () => {
    return this.state.data.filter((person) => {
      const birthday = person.birthday.split("-");
      if (birthday[2] < 1990) {
        return person;
      }
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.names && <Names list={this.state.names} />}</div>
        <div>{this.state.seniors && <Card list={this.state.seniors} />}</div>
      </div>
    );
  }
}

export default App;
