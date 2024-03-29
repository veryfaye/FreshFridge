import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Moment from "./components/Date";
import ResetPass from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import API from "./utils/API";
import { StoreContext } from "./utils/store";

function App() {
  const [grocItem, setGrocItem] = useState([]);
  const [growingFoodList, setGrowingFoodList] = useState([]);
  const [auth, setAuth] = useState(false);
  const [fridgeItem, setFridgeItem] = useState([]);

  useEffect(() => {
    API.isUserAuthenticated()
      .then((res) => {
        setAuth(res.data.isAuthenticated);
        loadData();
      })
      .catch((err) => console.log(err));
  }, [auth]);

  const loadData = () => {
    API.getFood()
      .then((res) => {
        setGrocItem(res.data);
        API.getAllGrocery()
          .then((res) => {
            setGrowingFoodList(res.data.foods);
            API.userFridge()
              .then((res) => {
                setFridgeItem(
                  res.data.fridges.filter((food) => !food.tossed && !food.eaten)
                );
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  const store = {
    grocery: [grocItem, setGrocItem],
    list: [growingFoodList, setGrowingFoodList],
    getData: [loadData],
    fridgeItem: [fridgeItem, setFridgeItem],
  };

  return (
    <StoreContext.Provider value={store}>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                FreshFridge
              </Link>
              <div className="date">
                <Moment />
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              {auth ? <Redirect to="/home" /> : <Login setAuth={setAuth} />}
            </Route>
            <Route path="/sign-in">
              {auth ? <Redirect to="/home" /> : <Login setAuth={setAuth} />}
            </Route>
            <Route path="/sign-up" component={Signup} />
            <Route path="/home">
              {!auth ? <Redirect to="/sign-in" /> : <Home setAuth={setAuth} />}
            </Route>
            <Route exact path="/resetpass" component={VerifyEmail} />
            <Route exact path="/resetpass/:token">
              <ResetPass />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreContext.Provider>
  );
}
export default App;
