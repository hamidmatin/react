import React, { useState, useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import WebDesign from "./WebDesign";
import MobileApp from "./MobileApp";
import WindowsApp from "./WindowsApp";
let { path, url } = useRouteMatch();
const [isLoading, setIsLoading] = useState(true);
// let Content = null;

const [content, setContent] = useState(null);

useEffect(() => {
  setTimeout(() => {
    setContent( (
      <>
        <h1>Services</h1>
        <p>akjdsf akjdfg adfkg adkghf</p>
        {/* <Link to={`${url}/webdesign`}>Web Design</Link>
        <Link to={`${url}/mobileapp`}>Mobile</Link>
        <Link to={`${url}/windowsapp`}>Windows</Link>

        <Switch>
          <Route path={`${path}/webdesign`}>
            <WebDesign />
          </Route>
          <Route path={`${path}/mobileapp`} component={MobileApp} />
          <Route path={`${path}/windowsapp`} component={WindowsApp} />
        </Switch> */}
      </>
    ));
    console.log(content);
    setIsLoading(false)
  }, 3000);
});

export default function Services() {
  

  return <div>
    {content}
  </div>;
}
