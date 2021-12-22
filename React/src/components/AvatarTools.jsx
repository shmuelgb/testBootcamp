import React from "react";

export default function AvatarTools(props) {
  console.log(props);
  return (
    <div>
      {" "}
      {!props.edit && <h2>Create new Avatar:</h2>}
      {props.edit && <h2>Edit Avatar</h2>}
      <input type="text" placeholder="name" />
      <input type="number" placeholder="age" />
      <input type="text" placeholder="origin" />
      <input type="text" placeholder="image" />
      {/* {!props.edit && <button onClick={this.add}>Add</button>}
      {props.edit && (
        <button onClick={() => this.props.editFn(this.state.edit.id)}>
          Update
        </button>
      )} */}
    </div>
  );
}
