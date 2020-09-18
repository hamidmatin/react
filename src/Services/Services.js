import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import WebDesign from "./WebDesign";
import MobileApp from "./MobileApp";
import WindowsApp from "./WindowsApp";
export default function Services() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Services</h1>
      <p>akjdsf akjdfg adfkg adkghf</p>
      <Link to={`${url}/webdesign`}>Web Design</Link>
      <Link to={`${url}/mobileapp`}>Mobile</Link>
      <Link to={`${url}/windowsapp`}>Windows</Link>

      <Switch>
        <Route path={`${path}/webdesign`} component={WebDesign} />
        <Route path={`${path}/mobileapp`} component={MobileApp} />
        <Route path={`${path}/windowsapp`} component={WindowsApp} />
      </Switch>
    </div>
  );
}
