import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import ButtonU from "@material-ui/core/Button";
import { FaShopify } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
export default function Nav() {
  return (
    <>
      <div className="top-header primary-color">
        <div className="container">
          <div className="row">
            <div className="col-md-5 padding-top-nav">www.gmailco.com <BsEnvelope/></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col-md-4 offset-md-2 padding-top-nav">search</div>
                <div className="col-md-2 padding-top-nav" >account <VscAccount className=""></VscAccount></div>
 
                <ButtonU
                  variant="contained"
                  color="secondary"
                  className="col-md-4"
                >
                  My card  <FaShopify className="padding-icon-nav"></FaShopify>
                </ButtonU>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="primary-color main-header ">
          <ul className="container">
            <li>
              <NavLink
                className="link"
                to="/"
                exact
                activeClassName="custom-active"
              >
                {" "}
                home
              </NavLink>{" "}
            </li>
            <li id="drp">
              category
              <div id="wrappe-div">drhdn</div>
            </li>
            <li>Deleniti.</li>
            <li>Est.</li>
            <li>
              <NavLink
                className="link"
                to="/contact"
                exact
                activeClassName="custom-active"
              >
                {" "}
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
