import React from "react";
import "./App.css";
import Input from "./components/Input";

class App extends React.Component {
  state = { input: "" };
  inputChange = (ref) => {
    this.setState({ input: ref.current.value }, () => {
      navigator.clipboard.writeText(this.state.input);
    });
  };

  render() {
    return (
      <div>
        <Input inputChange={this.inputChange} value={this.state.input} />
      </div>
    );
  }
}

export default App;
