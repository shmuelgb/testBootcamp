//import libraries
import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import "./index.css";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter: 0,};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
      console.log('click');
    this.setState({counter: (this.state.counter+1)});
  }
  

  render(){
    return (
          <div className='container'>
            <button onClick={this.handleClick}>Increment</button>
            {this.state.counter}
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
