import React from "react";

function Card(prop) {
  return (
    <div className="card">
      <img src={prop.img} alt="a" />
      <h2>{prop.title}</h2>
      <p>{prop.description}</p>
      <div className="card-footer">
        <a href={prop.linkHref1}>{prop.linkText1}</a>
        <a href={prop.linkHref2}>{prop.linkText2}</a>
      </div>
    </div>
  );
}

export default Card;
