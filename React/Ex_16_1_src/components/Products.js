import React from "react";
import { Link } from "react-router-dom";
import Store from "../store";
// import ProductDetail from "./ProductDetail";

export default class Products extends React.Component {
  state = { store: null };

  componentDidMount = () => {
    const store = Store();
    this.setState({ store });
  };
  createLinks = () => {
    return this.state.store.map((product) => {
      return (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}dd</Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        Products
        {this.state.store && this.createLinks()}
      </div>
    );
  }
}
