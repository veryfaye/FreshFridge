const router = require("express").Router();
const fridgeController = require("../../controllers/fridgeController");
const passport = require("passport");

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
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
