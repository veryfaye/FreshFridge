const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// Matches with "/api/user"
router.route("/").post(foodController.create);

module.exports = router;
