//import libraries
import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import "./index.css";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter: 0, label: null};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    if(e.target.dataset.btn === '+' && this.state.counter < 10){
      this.setState({counter: (this.state.counter+1)});
      if(this.state.counter+1 > 0) this.setState({label: 'green'});
    } 
    if(e.target.dataset.btn === '-' && this.state.counter > -10){
      this.setState({counter: (this.state.counter-1)});
      if (this.state.counter-1 < 0) this.setState({label: 'red'});
    } 
  }
  

  render(){
    return (
          <div className='container'>
            <button onClick={this.handleClick} data-btn='-'>Decrement</button>
            <p className={this.state.label}>{this.state.counter}</p>
            <button onClick={this.handleClick} data-btn='+'>Increment</button>
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
