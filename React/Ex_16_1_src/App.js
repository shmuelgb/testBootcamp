import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage";
import Products from "./components/Products";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
