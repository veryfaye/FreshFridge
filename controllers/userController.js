const db = require("../models");
const JWT = require("jsonwebtoken");
//nodemailer items
require("dotenv").config();
const nodemailer = require("nodemailer");
//nodemailer step1
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "FreshFridge",
      sub: userID,
    },
    "FreshFridge",
    { expiresIn: "1h" }
  );
};

module.exports = {
  create: function (req, res) {
    const { email } = req.body;
    db.User.findOne({ email }, (err, user) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Error has occurred", msgError: true } });
      if (user)
        res.status(500).json({
          message: { msgBody: "Email is already taken", msgError: true },
        });
      else {
        db.User.create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
      }
    });
  },

  login: function (req, res) {
    if (req.isAuthenticated()) {
      const { _id, email } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { email } });
    }
  },

  logout: function (req, res) {
    res.clearCookie("access_token");
    res.json({ user: { email: "", role: "" }, success: true });
  },
  
  setResetToken: function (req, res) {
    //find one user where the email matches the email submitted
    const token = require("crypto").randomBytes(20).toString("hex");
  
    db.User.findOneAndUpdate(
      { email: req.body.email },
      { restPasswordToken: token },
      function (err, response) {
        console.log(err);
        console.log(response);
        if (err) {
          res.status(422).json(err);
        } else if(!response){
          res.status(500).json({
            message: {
              msgBody: "Email does not exist",
              msgError: true,
            },
          });
        } else {
          //step2
          const mailOptions = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: "Reset Your Fresh Fridge Password",
            text:
              "Click here to reset your fresh fridge password\n\n" +
              `http://localhost:3000/resetpass/${token}`,
          };
  
          //step 3
          transporter.sendMail(mailOptions, (err) => {
            if (err) {
              console.log("Error has occurred");
            } else {
              console.log("Email Sent");
            }
          });
          res.status(200).json({
            message: {
              msgBody: "Successfully sent email",
              msgError: false,
            },
          });
        }
      }
    );
  }
};
