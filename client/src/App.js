import React, { useState }  from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Moment from "./components/Date";
import ResetPass from "./components/ResetPassword"
function App() {

  const [auth, setAuth] = useState(false);

  return (
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
            {auth ? <Redirect to="/home"/> : <Login setAuth={setAuth}/>}
          </Route>
          <Route path="/sign-in">
            {auth ? <Redirect to="/home"/> : <Login setAuth={setAuth}/>}
          </Route>
          <Route path="/sign-up" component={Signup} />
          <Route path="/home" component={Home} />
          <Route exact path="/resetpass/:token">
            <ResetPass />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
