import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount = () => {
    this.inputRef.current.focus();
  };
  inputChange = () => {
    this.props.inputChange(this.inputRef);
  };

  render() {
    return (
      <div>
        <textarea ref={this.inputRef} onChange={this.inputChange} />
      </div>
    );
  }
}
