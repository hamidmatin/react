import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./component/nav/Nav";
import MainFooter from "./component/footer/MainFooter";
import Home from "./component/Page/Home";
import Contact from "./component/Page/Contact";


function App() {
  return (
    <>
      {/* <Route component={Nav} /> */}      
      <Nav/>

      <Switch>
        <Route path="/Contact" exact component={Contact} />
        <Route path="/" component={Home} />
      </Switch>

      <MainFooter/>
      {/* <Route component={MainFooter}/> */}
    </>
  );
}

export default App;
