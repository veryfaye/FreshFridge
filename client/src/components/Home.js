import { Link } from "react-router-dom";
import React from "react";
import API from "../utils/API";
import List from "./List";
import Fridge from "./Fridge";
import Moment from "./Date";
import { StoreContext } from "../utils/store";

function handleLogout() {
  API.logoutUser({})
    .then((response) => {
      window.location.replace("/sign-in");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Home() {
  const {
    grocery: [grocItem, setGrocItem],
  } = React.useContext(StoreContext);

  const {
    list: [growingFoodList, setGrowingFoodList],
  } = React.useContext(StoreContext);

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
                <Link className="nav-link" to={"/sign-in"}
                 onClick={handleLogout}>
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
