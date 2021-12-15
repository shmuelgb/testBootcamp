import React from "react";

function Button(props) {
    
    const onBtnClick = () =>{
        props.onBtnClick(props.color);
    }

  return (
    <div>
      <button onClick={onBtnClick} style={{backgroundColor: props.color}}>{props.color}</button>
    </div>
  );
}

export default Button;
