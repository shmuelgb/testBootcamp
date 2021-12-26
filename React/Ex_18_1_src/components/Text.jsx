import React, { useState } from "react";

export default function Text(props) {
  const [maxLength, setMaxLength] = useState(props.maxLength);

  return (
    <div>
      {props.content.slice(0, maxLength)}
      <br />
      <button onClick={() => setMaxLength(props.content.length)}>Expand</button>
    </div>
  );
}
