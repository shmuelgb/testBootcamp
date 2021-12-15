import React from "react";
import './Box.css';

function Box(props){
    return (
        <div className={`box ${props.class}`}
        style={{height: `${props.height}px`, width:`${props.width}px`, backgroundColor: props.color}}>
        </div>
    );
}

export default Box;