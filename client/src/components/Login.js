import React, { useState } from "react";
import API from "../utils/API";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  API.getUser({
    // email: User.email,
    // password: User.password,
  })
    .then((response) => {
      if (
        response.email === user.email &&
        response.password === user.password
      ) {
        console.log(response.email)
        console.log(user.email)
        // window.location.replace("/home");
        alert("poo")
      }
      //  else {
      //   alert("Try again!");
      //   window.location.reload;
      // }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
            name="email"
              onChange={handleInputChange}
              type="email"
              value={user.email}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
            name="password"
              onChange={handleInputChange}
              value={user.password}
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

          <button type="submit" className="btn btn-primary btn-block">
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
