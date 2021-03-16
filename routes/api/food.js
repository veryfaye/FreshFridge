const router = require("express").Router();
const foodController = require("../../controllers/foodController");
const passport = require("passport");

// Matches with "/api/food"
router.route("/").get(foodController.findAll).post(foodController.create);

// Matches with "/api/food/:id"
router.route("/:id").get(foodController.findById);

router.get(
  "/get-all/grocery",
  passport.authenticate("jwt", { session: false }),
  foodController.getAllAuth
);

//api/food/grocery-item/id
// router.get(
//   "/grocery-item/:id",
//   passport.authenticate("jwt", { session: false }),
//   foodController.updateUserAuth
// );
//api/food/grocery-item/id
// router.get(
//   "/delete/:id",
//   passport.authenticate("jwt", { session: false }),
//   foodController.deleteUserAuth
// );

module.exports = router;
