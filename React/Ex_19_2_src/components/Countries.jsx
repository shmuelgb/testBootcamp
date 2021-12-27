import React, { useState, useEffect } from "react";

export default function Countries({ data }) {
  const [term, setTerm] = useState("");

  const filerData = () => {
    return data.filter((country) => country.name.toLowerCase().includes(term));
  };

  const renderData = () => {
    const countries = filerData();
    return countries.map((country) => {
      return <li key={country.alpha2Code}>{country.name}</li>;
    });
  };
  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <ul>{renderData()}</ul>
    </div>
  );
}
