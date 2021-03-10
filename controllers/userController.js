const db = require("../models");
const JWT = require("jsonwebtoken");

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

  find: function (req, res) {
    db.User.find({ email: req.params.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
