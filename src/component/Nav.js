import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext/CartContext";

export default function Nav() {
  const { cartState } = useContext(CartContext);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="navbar-brand left" to="/">
          LOGO
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/comments">Comments</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Cart <span style={{backgroundColor: 'white', color: 'black', padding: '5px'}}>{cartState.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
