import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Redirect, useParams, Switch } from "react-router-dom";
import API from "../utils/API";
import Login from "./Login";
function ResetPassword() {
  const [user, setUser] = useState({ _id: "" });
  const { token } = useParams();

  useEffect(() => {
    API.getUserByToken(token)
      .then((res) => {
        setUser({ _id: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (user.password) {
      API.updateUser({
        _id: user._id,
        password: user.password,
      })
        .then(() => {
          console.log("pass reset");
          // window.location.replace("/sign-in");
          return (
            <Switch>
              <Redirect to="/sign-in" />
            </Switch>
          );
        })
        .catch((err) => {});
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Reset Your Password</h3>
          <div className="form-group">
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="form-control"
              value={user.password}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleFormSubmit}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword;
