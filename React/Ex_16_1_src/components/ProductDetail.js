import React from "react";
import Store from "../store";
import { Link } from "react-router-dom";

export default function ProductDetail(props) {
  const store = Store();
  let product = null;
  store.forEach((item) => {
    if (item.id === parseInt(props.match.params.id)) {
      product = item;
    }
  });
  console.log(product);
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.imageUrl} alt="product" />
      <p>Price: {product.price}$</p>
      <Link to="/products">Back</Link>
    </div>
  );
}
