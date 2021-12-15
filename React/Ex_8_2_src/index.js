//import libraries
import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import "./index.css";


class App extends React.Component{
  state = {classes: 'hide'};

  componentDidMount = () =>{
    setTimeout(()=> this.setState({classes: 'start-anim'}),1000);
  }

  componentDidUpdate = ()=>{
    setTimeout(()=> this.setState({classes: 'hide'}),6000);
  }

  render(){
    return (
          <div className='container'>
            <Box 
            height = '100' 
            width = '150'
            classes = {this.state.classes}
            />
            <Box 
            height = '100' 
            width = '100'
            classes = {this.state.classes}
            />
            <Box 
            height = '100' 
            width = '200'
            classes = {this.state.classes}
            />
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
