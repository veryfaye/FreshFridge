// Commented out lines are from original copied file. After creating the api routes for this application copy the commented lines and update with appropriate information

const router = require("express").Router();

const userRoutes = require("./user");
const foodRoutes = require("./food");
const fridgeRoutes = require("./fridge")


// User routes
router.use("/user",userRoutes)
// food routes
router.use("/food",foodRoutes)
// fridge routes
router.use("/fridge",fridgeRoutes)
module.exports = router;

