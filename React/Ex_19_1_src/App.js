import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const CORS = "https://intense-mesa-62220.herokuapp.com/";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(`${CORS}https://swapi.dev/api/films/1/`);
    setData(data);
    console.log(data);
  };

  const renderData = () => {
    return (
      <div>
        {data.title}
        <br />
        {data.director}
      </div>
    );
  };

  return <div>{data && renderData()}</div>;
}
