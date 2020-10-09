import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext/CartContext';
import * as cartActions from '../context/CartContext/CartActions'

const Home = () => {
  const initState = [
    {
      id: 1,
      name: "Black Top",
      price: 35.0,
    },
    {
      id: 2,
      name: "Little Black Top",
      price: 20.0,
    },
    {
      id: 3,
      name: "Red Magawi Shoes",
      price: 25.0,
    },
    {
      id: 4,
      name: "Jennifer Scarf",
      price: 36.0,
    },
  ];

  const { dispatch } = useContext(CartContext);

  const [products] = useState(initState);

  const productList = products.length ? (
    products.map((product) => {
      return (
        <div className="card" key={product.id}>
          <h4 className="card-header">{ product.name }</h4>
          <p>Price : {product.price}</p>
          <button className='btn waves-effect' onClick={ ()=>{ dispatch(cartActions.addCart(product))}}>Add to cart</button>
        </div>
      );
    })
  ) : (
    <div className="center">Not Product yet</div>
  );

  return (
    <div className="container">
      <h1>Products</h1>
      { productList }
    </div>
  );
};

export default Home;
