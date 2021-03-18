import React, { useState } from "react";
import API from "../utils/API";
function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("")

  function handleInputChange(e) {
    const { value } = e.target;
    setEmail(value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (email) {
      API.sendResetEmail({
        email: email,
      })
        .then((res) => {
          if(!res.data.message.msgError){
            setSuccessMessage("Email Sent!");
            console.log(successMessage)
          }
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
          <h3>Verify Your Email</h3>
          <div className="form-group">
            <input
              onChange={handleInputChange}
              name="email"
              type="text"
              className="form-control"
              value={email}
              placeholder="email"
            />
          </div>
          {successMessage ? <p>{successMessage}</p>:null}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleFormSubmit}
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
}
export default VerifyEmail;
