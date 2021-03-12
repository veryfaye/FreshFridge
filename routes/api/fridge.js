const router = require("express").Router();
const fridgeController = require("../../controllers/fridgeController");
const Fridge = require("../../models/fridge");

// Matches with "/api/fridge"
router.route("/").post(fridgeController.create)
.get(fridgeController.findAll);

// Matches with "/api/fridge/:id"
router.route("/:id").get(fridgeController.findById);

// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const fridge = new Fridge(req.body);
//     fridge.save((err) => {
//       if (err)
//         res
//           .status(500)
//           .json({ message: { msgBody: "Error has occurred", msgError: true } });
//       else {
//         req.user.fridges.push(fridge);
//         req.user.save((err) => {
//           if (err)
//             res
//               .status(500)
//               .json({
//                 message: { msgBody: "Error has occurred", msgError: true },
//               });
//           else
//             res
//               .status(200)
//               .json({
//                 message: {
//                   msgBody: "Successfully created fridge item",
//                   msgError: false,
//                 },
//               });
//         });
//       }
//     });
//   }
// );

module.exports = router;
