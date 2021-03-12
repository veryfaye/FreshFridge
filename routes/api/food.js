const router = require("express").Router();
const foodController = require("../../controllers/foodController");
const passport = require("passport");
const User = require("../../models/user");
const Food = require("../../models/food");

// Matches with "/api/food"
router.route("/").get(foodController.findAll).post(foodController.create);

// Matches with "/api/food/:id"
router.route("/:id").get(foodController.findById);

router.get(
  "/grocery-list",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    User.findById({ _id: req.user._id })
      .populate("fridges")
      .exec((err, document) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        else {
          res
            .status(200)
            .json({ fridges: document.fridges, authenticated: true });
        }
      });
  }
);

router.get(
  "/grocery-item/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
      console.log(req.params)
      console.log("==================================")
      console.log(req.user)
      console.log("==================================")

      User.findOneAndUpdate({_id: req.user._id })
  }
);

module.exports = router;
