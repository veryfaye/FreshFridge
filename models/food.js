const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expirationDateSchema = new Schema({
  product: { type: String, required: true },
  shelfLife: { type: Number, required: true },
  });

const Food = mongoose.model("Food", expirationDateSchema);

module.exports = Food;
