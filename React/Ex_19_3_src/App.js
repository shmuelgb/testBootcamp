import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import "./App.css";

// const CORS = "https://intense-mesa-62220.herokuapp.com/";

export default function App() {
  const [data, setData] = useState();
  const [term, setTerm] = useState("hooks");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${term}`
      );
      console.log(data);
      setData(data.hits);
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    getData();
  };

  const renderData = () => {
    return data.map((item) => {
      return (
        <div key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </div>
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <Spinner />}
      {data && renderData()}
    </div>
  );
}
