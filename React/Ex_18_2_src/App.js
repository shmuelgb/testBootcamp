import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [toDos, setToDos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const changeCompeted = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].completed = toDosCopy[index].completed ? false : true;
    setToDos(toDosCopy);
  };

  const renderToDos = () => {
    return toDos.map((item, index) => {
      const completed = item.completed ? "check" : "";
      return (
        <div className={completed} key={index}>
          {item.name}
          {item.completed && "v"}
          <button onClick={() => changeCompeted(index)}>toggle</button>
        </div>
      );
    });
  };

  return <div>{renderToDos()}</div>;
}
