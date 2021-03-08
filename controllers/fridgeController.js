const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Fridge.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { fridge: _id } }, { new: true })
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
