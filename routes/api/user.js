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

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userController.login
);

router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  userController.logout
);

// Matches with "/api/user/:email"
router.route("/:email").get(userController.find);

module.exports = router;
