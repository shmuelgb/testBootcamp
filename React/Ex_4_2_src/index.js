//import libraries
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";

//create components
const App = () => {
  return (
    <div className='container'>
      <Card 
      img='https://images.pexels.com/photos/9965184/pexels-photo-9965184.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      title='A random title11111'
      description = 'some description here'
      linkHref1 = '#'
      linkHref2 = '#'
      linkText1 = 'SHARE'
      linkText2 = 'EXPLORE'
      />
      <Card 
      img='https://images.pexels.com/photos/7224255/pexels-photo-7224255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      title='A random title2222222'
      description = 'some description here222222'
      linkHref1 = '#'
      linkHref2 = '#'
      linkText1 = 'SHARE'
      linkText2 = 'EXPLORE'
      />
      <Card 
      img='https://images.pexels.com/photos/10153219/pexels-photo-10153219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      title='A random title333333'
      description = 'some description here333333'
      linkHref1 = '#'
      linkHref2 = '#'
      linkText1 = 'SHARE'
      linkText2 = 'EXPLORE'
      />
    </div>
  );
};


//take components and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
