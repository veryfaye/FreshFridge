const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// Matches with "/api/food"
router.route("/")
    .get(foodController.findAll)
    .post(foodController.create);

// Matches with "/api/food/:id"
router.route("/:id")
    .get(foodController.findById);

// Matches with "/api/food/:product" THIS IS FOR TESTING FUNCTIONALITY PROBABLY NOT TO BE USED
router.route("/:product")
    .get(foodController.findOne);

module.exports = router;
