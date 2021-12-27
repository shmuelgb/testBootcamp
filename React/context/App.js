import React, { useState } from "react";
import SomeCompo from "./components/SomeCompo";
import Something from "./context/Something";
import "./App.css";

const initialList = ["one", "two", "three", "four", "five"];
export default function App() {
  const [list, setList] = useState([...initialList]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  const handleCheckbox = (e, index) => {
    const selected = e.target.checked;
    if (selected) {
      setCheckedIndexes([...checkedIndexes, index]);
    } else {
      const updatedCheckedIndexes = list.filter((item, index) => {
        return item && !checkedIndexes.includes(index);
      });
      setCheckedIndexes(updatedCheckedIndexes);
    }
  };

  const handleReset = () => {
    setList([...initialList]);
  };
  const handleDelete = () => {
    const updatedList = list.filter((item, index) => {
      return item && !checkedIndexes.includes(index);
    });
    console.log("updatedList", updatedList);
    setList(updatedList);
  };

  const renderList = () => {
    return list.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={item}>{item}</label>
          <input
            name={item}
            onChange={(e) => handleCheckbox(e, index)}
            type="checkbox"
          />
        </div>
      );
    });
  };

  const data = { name: "sam", age: 25, array: [1, 2, 3] };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Delete</button>
      {renderList()}
      <Something.Provider value={data}>
        <SomeCompo />
      </Something.Provider>
    </div>
  );
}
