// Commented out lines are from original copied file. After creating the api routes for this application copy the commented lines and update with appropriate information

const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./user");

// Book routes
// router.use("/books", bookRoutes);

// User routes
router.use("/user",userRoutes)

module.exports = router;