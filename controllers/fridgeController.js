const db = require("../models");
const Fridge = require("../models/fridge");
const User = require("../models/user");
module.exports = {
  create: function (req, res) {
    db.Fridge.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //authenticated methods
  createAuth: function (req, res) {
    const fridge = new Fridge(req.body);
    fridge.save((err) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Error has occurred", msgError: true } });
      else {
        req.user.fridges.push(fridge);
        req.user.save((err) => {
          if (err)
            res.status(500).json({
              message: { msgBody: "Error has occurred", msgError: true },
            });
          else
            res.status(200).json({
              message: {
                msgBody: "Successfully created fridge item",
                msgError: false,
              },
            });
        });
      }
    });
  },

  getAllAuth: function (req, res) {
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
  },
  updateAuth: function (req, res) {
    Fridge.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true },
      (err, response) => {
        if (err)
          res.status(500).json({
            message: {
              msgBody: "Unable to Update Fridge",
              msgError: true,
            },
          });
        else
          res.status(200).json({
            message: {
              msgBody: "Successfully Updated Fridge",
              msgError: false,
            },
          });
      }
    );
    //get post by id
    // console.log("=====================REQ=======================");
    // console.log(req);
    // console.log("=====================RES=======================");
    // console.log(res);
    // Fridge.findByIdAndUpdate(req,res);
  },

  //original methods
  update: function (req, res) {
    db.Fridge.findOneAndUpdate(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { fridge: _id } }, { new: false })
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Fridge.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
