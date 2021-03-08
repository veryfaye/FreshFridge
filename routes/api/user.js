const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const passportConfig = require("../../passport");
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

// Matches with "/api/user"
router.route("/").post(userController.create);

// router.route("/login").post(userController.login);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    console.log("passport.authenticate");
    console.log(req.user);
    if (req.isAuthenticated()) {
      const { _id, email } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { email } });
    }
  }
);
// Matches with "/api/user/:email"
router.route("/:email").get(userController.find);

module.exports = router;
