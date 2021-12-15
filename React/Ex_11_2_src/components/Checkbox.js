import React from "react";

function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" defaultChecked={props.checked} />
      <label>{props.label}</label>
    </div>
  );
}
export default Checkbox;
