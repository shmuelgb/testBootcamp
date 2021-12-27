import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import "./App.css";

const CORS = "https://intense-mesa-62220.herokuapp.com/";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(`${CORS}https://restcountries.com/v2/all`);
    setData(data);
  };

  return <div>{data && <Countries data={data} />}</div>;
}
