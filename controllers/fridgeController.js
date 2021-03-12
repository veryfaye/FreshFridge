const db = require("../models");

module.exports = {
  //authenticated methods
  createAuth: function (req, res) {
    const fridge = new db.Fridge(req.body);
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
    db.User.findById({ _id: req.user._id })
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
    db.Fridge.findOneAndUpdate(
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
  },
};
