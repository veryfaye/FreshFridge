const router = require("express").Router();
const fridgeController = require("../../controllers/fridgeController");

// Matches with "/api/fridge"
router.route("/").post(fridgeController.create)
// .get(fridgeController.findAll);

// Matches with "/api/fridge/:id"
// router.route("/:id").get(fridgeController.findById);



module.exports = router;
