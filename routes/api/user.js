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
router.route("/getByToken/:token").get(userController.getByToken);

router.route("/updatePassword").put(userController.updatePassword);

router.put("/sendResetEmail", userController.setResetToken);
// router.post("/resetPassword/:token", userController.resetPassword);

//api/user/grocery-item/id
router.put(
  "/grocery-item/:id",
  passport.authenticate("jwt", { session: false }),
  userController.addGroceryItem
);
//api/user/delete/id
router.put(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  userController.deleteGroceryItem
);

module.exports = router;
