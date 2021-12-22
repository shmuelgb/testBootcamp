import React, { Component } from "react";
// import axios from "axios";

export default class NewAvatar extends Component {
  state = {
    name: "",
    age: 0,
    origin: "",
    image: "",
    active: true,
    edit: this.props.edit,
  };

  componentDidMount = () => {
    console.log("mount");
  };

  shouldComponentUpdate = () => {
    return this.state.edit !== this.props.edit;
  };

  componentDidUpdate = () => {
    if (this.shouldComponentUpdate()) {
      const edit = this.props.edit;
      if (edit) {
        this.setState({
          name: edit.name,
          age: edit.age,
          origin: edit.origin,
          image: edit.img,
        });
      }
    }
  };

  resetState = () => {
    this.setState({
      name: "",
      age: 0,
      origin: "",
      image: "",
      active: true,
      edit: this.props.edit,
    });
  };

  verifyImage = async () => {
    // const verify = await axios.get(this.state.image);
    // // return Number(verify.status) !== 404;
    // console.log(verify);
    // return false;
    return true;
  };

  verifyData = () => {
    if (
      this.state.active &&
      this.state.name.length > 5 &&
      this.state.age > 0 &&
      this.state.origin.length > 3
    ) {
      return this.verifyImage();
    }
    return false;
  };

  onChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  add = () => {
    if (this.verifyData()) {
      this.setState({ active: false }, () => {
        if (this.props.addFn(this.state)) this.setState({ active: true });
        this.resetState();
      });
    }
  };

  render() {
    return (
      <div>
        {!this.state.edit && <h2>Create new Avatar:</h2>}
        {this.state.edit && <h2>Edit Avatar</h2>}
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={(e) => this.onChange(e, "name")}
        />
        <input
          type="number"
          placeholder="age"
          value={this.state.age}
          onChange={(e) => this.onChange(e, "age")}
        />
        <input
          type="text"
          placeholder="origin"
          value={this.state.origin}
          onChange={(e) => this.onChange(e, "origin")}
        />
        <input
          type="text"
          placeholder="image"
          value={this.state.image}
          onChange={(e) => this.onChange(e, "image")}
        />
        {!this.state.edit && <button onClick={this.add}>Add</button>}
        {this.state.edit && (
          <button onClick={() => this.props.editFn(this.state.edit.id)}>
            Update
          </button>
        )}
      </div>
    );
  }
}
