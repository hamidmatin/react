import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./Nav.css";


export default class Nav extends Component {
  render() {
      const activeStyle ={
          color: 'red'
      }
    return (
      <div>
        <BrowserRouter>
          {/* <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
          <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink> */}
          {/* <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact" >Contact</NavLink> */}
          <NavLink to="/about" activeClassName="custom-active">About</NavLink>
          <NavLink to="/contact" activeClassName="custom-active">Contact</NavLink>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
