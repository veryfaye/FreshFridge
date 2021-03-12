const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");


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
