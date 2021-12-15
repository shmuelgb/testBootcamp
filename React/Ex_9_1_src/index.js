//import libraries
import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner.js";
import "./index.css";


class App extends React.Component{
  state = {loading: true};

  componentDidMount = () =>{
    setTimeout(() => {
      this.setState({loading: false});
    },5000)
  }

  componentDidUpdate = ()=>{
  }


  render(){
    return (
          <div className='container'>
            {this.state.loading && <Spinner />}
          </div>
        ); 
  }
}


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
