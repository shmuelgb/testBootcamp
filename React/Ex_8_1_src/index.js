//import libraries
import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import "./index.css";


class App extends React.Component{
  state = {favoriteColor: 'red'};

  componentDidMount = () =>{
    setTimeout(()=> this.setState({favoriteColor: 'green'}),1000);
  }

  componentDidUpdate = ()=>{
    const divEl = document.querySelector('#something');
    divEl.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  // handleClick = (e) =>{
  //   if(e.target.dataset.btn === '+' && this.state.counter < 10){
  //     this.setState({counter: (this.state.counter+1)});
  //     if(this.state.counter+1 > 0) this.setState({label: 'green'});
  //   } 
  //   if(e.target.dataset.btn === '-' && this.state.counter > -10){
  //     this.setState({counter: (this.state.counter-1)});
  //     if (this.state.counter-1 < 0) this.setState({label: 'red'});
  //   } 
  // }
  

  render(){
    return (
          <div className='container'>
            <p>My favorite color is {this.state.favoriteColor}</p>
            <div id="something"></div>
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
