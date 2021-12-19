import React from "react";

export default function Names(props) {
  const display = () => {
    return props.list.map((PersonName, index) => {
      return <div key={index}>{PersonName}</div>;
    });
  };
  return <div>{display()}</div>;
}
