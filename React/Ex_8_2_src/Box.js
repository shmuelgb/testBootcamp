import React from "react";
import './Box.css';

function Box(props){
    return (
        <div className={`box ${props.classes}`}
        style={{height: `${props.height}px`, width:`${props.width}px`}}>
        </div>
    );
}

export default Box;