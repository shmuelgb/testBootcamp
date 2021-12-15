import React, { Component } from "react";

class Form extends Component {
  state = { firstName: "", lastName: "", age: 0 };

  render() {
    return (
      <div>
        <label>
          First Name:
          <input
            type="text"
            onChange={(e) => this.setState({ firstName: e.target.value })}
            value={this.state.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={(e) => this.setState({ lastName: e.target.value })}
            value={this.state.lastName}
          />
        </label>
        <label>
          Age:
          <input
            type="dropdown"
            onChange={(e) => this.setState({ age: e.target.value })}
            value={this.state.age}
          />
        </label>
        <p>
          Your info is: {this.state.firstName}, {this.state.lastName},{" "}
          {this.state.age}
        </p>
      </div>
    );
  }
}

export default Form;
