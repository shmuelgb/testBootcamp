import axios from "axios";
import React, { useState, useEffect } from "react";
import api from "../api";

const source = axios.CancelToken.source();

function Fetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/1", {
          cancelToken: source.token,
        });
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    return () => {
      source.cancel("unmounted");
    };
  }, []);

  return (
    <div>
      Fetcher
      {data && data.director}
    </div>
  );
}

export default Fetcher;
