const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const passportConfig = require("../../passport");

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

router.post("/sendResetEmail", userController.setResetToken);

module.exports = router;
