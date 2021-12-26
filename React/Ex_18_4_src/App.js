import React, { useState } from "react";
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

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Delete</button>
      {renderList()}
    </div>
  );
}
