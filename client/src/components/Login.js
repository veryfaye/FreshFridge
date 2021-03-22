import React, { useState } from "react";
import API from "../utils/API";

export default function Login(props) {
  console.log(props)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // get email, password from user's input
  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = document.querySelector("#email").value.trim();
    const userPassword = document.querySelector("#password").value.trim();

    API.getUser({
      email: userEmail,
      password: userPassword,
    })
      .then((response) => {
        if (response.data.isAuthenticated) {
          window.location.replace("/home");
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Try again!");
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="./resetpass">password?</a> Need to <a href="./sign-up">sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
