import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import List from "./List";
import Fridge from "./Fridge";
import Moment from "./Date";

export default function Home() {
  return (
    <div className="auth-wrapper">
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            FreshFridge
          </Link>
          <div className="date">
            <Moment />
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="date"></div>
      <div className="row">
        <div className="col-sm-6">
          <List />
        </div>
        <div className="col-sm-6">
          <Fridge />
        </div>
      </div>
    </div>
  );
}
