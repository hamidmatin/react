import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Services from "./Services/Services";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
      <NavLink to="/services">Services</NavLink>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/services" component={Services} />        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
