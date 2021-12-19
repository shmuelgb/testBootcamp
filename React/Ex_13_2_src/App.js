import React from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  state = { data: null, filter: "" };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    let data = await Promise.all(this.promise());
    data = data.map((response) => {
      return {
        name: response.data.results[0].name,
        picture: response.data.results[0].picture.medium,
      };
    });
    this.setState({ data: data });
  };

  promise = () => {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(axios.get("https://randomuser.me/api/"));
    }
    return promises;
  };

  filter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.filter}
          value={this.state.filter}
          placeholder="search here"
        />

        {this.state.data && (
          <Card data={this.state.data} filter={this.state.filter} />
        )}
      </div>
    );
  }
}

export default App;
