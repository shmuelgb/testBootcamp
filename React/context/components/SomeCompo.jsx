import React from "react";
import Something from "../context/Something";

export default function SomeCompo() {
  return (
    <div>
      <Something.Consumer>{(v) => v.name + v.age}</Something.Consumer>
    </div>
  );
}
