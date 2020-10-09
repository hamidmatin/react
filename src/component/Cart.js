import React, { useContext } from "react";
import { CartContext } from "../context/CartContext/CartContext";
import * as cartActions from "../context/CartContext/CartActions";

const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);

  const productList = cartState.length ? (
    cartState.map((product) => {
      return (
        <div className="card" key={product.id}>
          <h4 className="card-header">{product.name}</h4>
          <p>Price : {product.price}</p>
          <button
            className="btn waves-effect"
            onClick={() => {
              dispatch(cartActions.deleteCart(product.id));
            }}
          >
            Delete cart
          </button>
        </div>
      );
    })
  ) : (
    <div className="center">Not Product yet</div>
  );

  return (
    <div className="container">
      <h2>Carts</h2>
      {productList}
    </div>
  );
};

export default Cart;
