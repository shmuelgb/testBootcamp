import React from "react";
import axios from "axios";
import "./App.css";
import Jokes from "./components/Jokes";
import Categories from "./components/Categories";

class App extends React.Component {
  state = { categories: [], jokes: [] };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    const categories = response.data;
    this.setState({ categories: categories });
  };

  randomJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.displayJoke(response.data.value);
  };

  jokesByCategory = async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.displayJoke(response.data.value);
  };

  displayJoke = (joke) => {
    const jokes = this.state.jokes;
    jokes.push(joke);
    this.setState({ jokes: jokes });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Chuck Norris Jokes generator!</h1>
        <div className="wrapper">
          <div className="buttons">
            <button onClick={this.randomJoke}>
              Tell me a random Joke please!
            </button>
            {this.state.categories[0] && (
              <Categories
                categories={this.state.categories}
                clickFn={this.jokesByCategory}
              />
            )}
          </div>
          <div className="jokes">
            {this.state.jokes[0] && <Jokes jokes={this.state.jokes} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
