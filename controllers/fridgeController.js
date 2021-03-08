const db = require("../models");
module.exports = {
  create: function (req, res) {
    db.Fridge.create(req.body)
      // .then(({ _id }) =>
      //   db.User.findOneAndUpdate({}, { $push: { fridge: _id } }, { new: true })
      // )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
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
