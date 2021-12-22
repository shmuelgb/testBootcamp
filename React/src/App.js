import React from "react";
import api from "./api";
import Avatar from "./components/Avatar";
import NewAvatar from "./components/NewAvatar";
import AvatarTools from "./components/AvatarTools";
import "./App.css";

class App extends React.Component {
  state = { avatars: [], edit: false };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const response = await api.get("/avatar");
    this.setState({ avatars: response.data });
    console.log(response);
  };

  addAvatar = async (newAvatar) => {
    console.log("addAvatar");
    const post = await api.post("/avatar", newAvatar);
    this.setState({ avatars: [...this.state.avatars, post.data] });
    console.log(post);
    return post;
  };

  update = async (id) => {
    console.log(id);
    this.setState({ edit: false });
  };

  editMode = (edit) => {
    this.setState({ edit }, () => console.log(this.state.edit));
  };

  render() {
    return (
      <div>
        {/* {!this.state.edit && (
          <NewAvatar
            addFn={this.addAvatar}
            editFn={this.update}
            edit={this.state.edit}
          />
        )}

        {this.state.edit && (
          <NewAvatar
            addFn={this.addAvatar}
            editFn={this.update}
            edit={this.state.edit}
          />
        )} */}
        <AvatarTools
          addFn={this.addAvatar}
          editFn={this.update}
          edit={this.state.edit}
        />
        <Avatar avatars={this.state.avatars} editModeFn={this.editMode} />
      </div>
    );
  }
}

export default App;
