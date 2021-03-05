import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              FreshFridge
            </Link>
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

// <<<<<<< loginFlow
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
// =======
//       <Switch>
//         <Route exact path='/' component={Login} />
//         <Route path="/sign-in" component={Login} />
//         <Route path="/sign-up" component={Signup} />
//         <Route path="/home" component={Home} />
//       </Switch>

//     </div></Router>
// >>>>>>> main
  );
}

export default App;
