import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Posts from "./component/Posts";
import Post from "./component/Post";
import BlogContextProvider from "./context/BlogContext";
import CartContextProvider from "./context/CartContext/CartContext";
import Cart from './component/Cart';

function App() {
  return (
    <>
      <BlogContextProvider>
        <CartContextProvider>
          <Nav />

          <Switch>
            {/* <Route path="/Contact" exact component={Contact} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/posts">
              <Posts message="Posts" />
            </Route>
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </CartContextProvider>
      </BlogContextProvider>
    </>
  );
}

export default App;
