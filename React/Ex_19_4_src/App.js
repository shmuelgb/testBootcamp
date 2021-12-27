import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Jokes from "./components/Jokes";
import Categories from "./components/Categories";
import "./App.css";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const randomJoke = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    displayJoke(data.value);
  };

  const jokesByCategory = async (category) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    displayJoke(data.value);
  };

  const displayJoke = (joke) => {
    const jokesCopy = [...jokes];
    jokesCopy.push(joke);
    setJokes(jokesCopy);
  };

  return (
    <div>
      <h1>Welcome to Chuck Norris Jokes generator!</h1>
      <div className="wrapper">
        <div className="buttons">
          <button onClick={randomJoke}>Tell me a random Joke please!</button>
          {categories[0] && (
            <Categories categories={categories} clickFn={jokesByCategory} />
          )}
        </div>
        <div className="jokes">{jokes[0] && <Jokes jokes={jokes} />}</div>
      </div>
    </div>
  );
}
