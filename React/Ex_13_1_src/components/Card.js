import React from "react";

export default function Card(props) {
  const display = () => {
    return props.list.map((person) => {
      const { name, birthday, favoriteFoods } = person;
      return (
        <div style={{ border: "1px solid black", margin: "10px" }}>
          <h3>{name}</h3>
          <h5>{birthday}</h5>
          <h5>{favoriteFoods.meats}</h5>
        </div>
      );
    });
  };

  return (
    <div>
      <div>{display()}</div>
    </div>
  );
}
