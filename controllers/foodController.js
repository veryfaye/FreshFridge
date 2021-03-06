const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Food.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
