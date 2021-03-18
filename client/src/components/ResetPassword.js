import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
function ResetPassword() {
  const [user, setUser] = useState({ _id: "" });
  const { token } = useParams();
  console.log(token);

  useEffect(() => {
    API.getUserByToken(token)
      .then((res) => {
        console.log(res.data);
        setUser({ _id: res.data });
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (user.password) {
      console.log(user);
      API.updateUser({
        _id: user._id,
        password: user.password,
      })
        .then(() => {
          window.location.replace("/sign-in");
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
