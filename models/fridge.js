const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fridgeSchema = new Schema({
  product: { type: String, required: true },
  purchaseDate: { type: String, required: true },
  expirationDate: { type: String, required: true },
  eaten: { type: Boolean, required: true, default: false },
  eatenDate: { type: String, required: false },
  tossed: { type: Boolean, required: true, default: false },
  tossedDate: { type: String, required: false },
});
const Fridge = mongoose.model("Fridge", fridgeSchema);
module.exports = Fridge;
