import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // get email, password from user's input
  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = document.querySelector("#email").value.trim();
    const userPassword = document.querySelector("#password").value.trim();
    // setUser({
    //   email: userEmail,
    //   password: userPassword,
    // });
    // console.log(user)

    API.getUser({
      email: userEmail,
      password: userPassword,
    })
      .then((response) => {
        console.log(response);
        console.log(user.email);
        if (response.data.isAuthenticated) {
          window.location.replace("/home");
          // alert("it worked");
        // } else {
        //   alert("Try again!");
        //   //   window.location.reload;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Try again!");
      });
    // ,[user]})
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
              // onSubmit={handleSubmit}
              type="email"
              // value={user.email}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              // onSubmit={handleSubmit}
              // value={user.password}
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

          <button type="submit"  onClick={handleSubmit} className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="./">password?</a>
            Need to <a href="./sign-up">sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
