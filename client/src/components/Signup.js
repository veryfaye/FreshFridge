import React, { useEffect, useState } from "react";
import API from "../utils/API";
function SignUp() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    // not sure if anything is needed here
  }, []);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.email &&
      newUser.password
    ) {
      API.saveUser({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        password: newUser.password,
      })
        .then(() => {
          window.location.replace("/home")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={handleInputChange}
              name="firstName"
              type="text"
              className="form-control"
              value={newUser.firstName}
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={handleInputChange}
              name="lastName"
              type="text"
              className="form-control"
              value={newUser.lastName}
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              className="form-control"
              value={newUser.email}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="form-control"
              value={newUser.password}
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleFormSubmit}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="./sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
