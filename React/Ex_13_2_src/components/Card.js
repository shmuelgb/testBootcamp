import React from "react";
import "./Card.css";

export default function Card(props) {
  const filter = () => {
    const term = props.filter.toLowerCase();
    const people = [];
    props.data.forEach((person) => {
      const firstName = person.name.first.toLowerCase();
      const lastName = person.name.last.toLowerCase();
      if (firstName.includes(term) || lastName.includes(term))
        people.push(person);
    });
    return people;
  };

  const createCard = () => {
    return filter().map((person, index) => {
      const name = `${person.name.first} ${person.name.last}`;
      const picture = person.picture;
      return (
        <div className="card" key={index}>
          <h3>{name}</h3>
          <img src={picture} alt="avatar" />
        </div>
      );
    });
  };

  return <div className="cards-container">{createCard()}</div>;
}
