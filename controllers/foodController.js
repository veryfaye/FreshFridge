const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  create: function (req, res) {
    db.Food.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Food.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Food.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getAllAuth: function (req, res) {
    db.User.findById({ _id: req.user._id })
      .populate("foods")
      .exec((err, document) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        else {
          res.status(200).json({ foods: document.foods, authenticated: true });
        }
      });
  },
  // updateUserAuth: function (req, res) {
  //   const food = mongoose.Types.ObjectId(req.params.id);
  //   req.user.foods.push(food);
  //   req.user.save((err) => {
  //     if (err)
  //       res.status(500).json({
  //         message: { msgBody: "Error has occurred", msgError: true },
  //       });
  //     else
  //       res.status(200).json({
  //         message: {
  //           msgBody: "Successfully added food item",
  //           msgError: false,
  //         },
  //       });
  //   });
  // },
  // deleteUserAuth: function (req, res) {
  //   const food = mongoose.Types.ObjectId(req.params.id);
  //   const foodIndex = req.user.foods.indexOf(food);
  //   req.user.foods.splice(foodIndex,1);
  //   req.user.save((err) => {
  //     if (err)
  //       res.status(500).json({
  //         message: { msgBody: "Error has occurred", msgError: true },
  //       });
  //     else
  //       res.status(200).json({
  //         message: {
  //           msgBody: "Successfully deleted food item",
  //           msgError: false,
  //         },
  //       });
  //   });
  // }
};
