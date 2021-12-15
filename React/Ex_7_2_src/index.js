//import libraries
import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import "./index.css";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {toggle: 'on',};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(this.state.toggle === 'on')
    this.setState({toggle: 'off'});
    else this.setState({toggle: 'on'});
  }
  

  render(){
    return (
          <div className='container'>
            <div><button onClick={this.handleClick}>show/hide</button></div>
            <div className={this.state.toggle}></div>
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
