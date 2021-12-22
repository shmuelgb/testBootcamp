import React from "react";
import "./Avatar.css";

export default function Avatar(props) {
  const displayAvatars = () => {
    if (props.avatars[0]) {
      return props.avatars.map((avatar) => {
        return (
          <div className="avatar" key={avatar.id}>
            <figure style={{ backgroundImage: `url(${avatar.img})` }}></figure>
            <ul>
              <li>Name: {avatar.name}</li>
              <li>Age: {avatar.age}</li>
              <li>Origin: {avatar.origin}</li>
            </ul>
            <button onClick={() => props.editModeFn(avatar)}>Edit</button>
          </div>
        );
      });
    }
  };
  return <div className="avatar-container">{displayAvatars()}</div>;
}
