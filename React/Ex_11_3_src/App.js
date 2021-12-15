import React from "react";
import Form from "./components/Form.js";

class App extends React.Component {
  state = { selectedColor: "" };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
