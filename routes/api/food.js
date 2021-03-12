const router = require("express").Router();
const foodController = require("../../controllers/foodController");
const passport = require("passport");
const User = require("../../models/user");
const Food = require("../../models/food");
const mongoose = require("mongoose");

// Matches with "/api/food"
router.route("/").get(foodController.findAll).post(foodController.create);

// Matches with "/api/food/:id"
router.route("/:id").get(foodController.findById);

router.get(
  "/get-all/grocery",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    User.findById({ _id: req.user._id })
      .populate("foods")
      .exec((err, document) => {
        console.log(document);
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        else {
          res.status(200).json({ foods: document.foods, authenticated: true });
        }
      });
  }
);

//api/food/grocery-item/id
router.get(
  "/grocery-item/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    const food = mongoose.Types.ObjectId(req.params.id);
    req.user.foods.push(food);
    req.user.save((err) => {
      if (err)
        res.status(500).json({
          message: { msgBody: "Error has occurred", msgError: true },
        });
      else
        res.status(200).json({
          message: {
            msgBody: "Successfully added food item",
            msgError: false,
          },
        });
    });
  }
);

module.exports = router;
