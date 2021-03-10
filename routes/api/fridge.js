const router = require("express").Router();
const fridgeController = require("../../controllers/fridgeController");
const passport = require("passport");
const passportConfig = require("../../passport");

// Matches with "/api/fridge"
//router.route("/").post(fridgeController.create)
//.get(fridgeController.findAll);

// Matches with "/api/fridge/:id"
// router.route("/:id").get(fridgeController.findById);
router.put(
  "/:id",
  //   passport.authenticate("jwt", { session: false }),
  fridgeController.updateAuth
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  fridgeController.createAuth
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  fridgeController.getAllAuth
);

module.exports = router;
