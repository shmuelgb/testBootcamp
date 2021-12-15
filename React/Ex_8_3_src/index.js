//import libraries
import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import "./index.css";


class App extends React.Component{
  state = {color: 'red', class: ''};

  componentDidMount = () =>{
    this.randomColor();
    setTimeout(()=> this.setState({class: 'circle'}),3000);
  }

  componentDidUpdate = ()=>{
    this.randomColor();
  }
  
  randomColor = ()=>{
    let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setTimeout(()=> this.setState({color: color}),500);
  }

  render(){
    return (
          <div className='container'>
            <Box 
            height = '100' 
            width = '150'
            color = {this.state.color}
            class = {this.state.class}
            />
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
