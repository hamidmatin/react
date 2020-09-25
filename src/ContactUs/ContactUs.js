import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,  
  useHistory
} from "react-router-dom";

import ContanctMethod from './ContanctMethod'

export default function ContactUs() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  function handleClick() {
    history.goBack();
  }
  return (
    <div>
      <h1>Contact us</h1>
      <p>sahd asjkdsahdf asjfh</p>
      <button onClick={handleClick}>Go Back</button>
      <ul>
        <li>
            <Link to={`${url}/phone`}>Phone</Link>
        </li>
        <li>
          <Link to={`${url}/address`}>Address</Link>
        </li>
        <li>
          <Link to={`${url}/map`}>Map</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:method`} component={ContanctMethod} />
      </Switch>
    </div>
  );
}
