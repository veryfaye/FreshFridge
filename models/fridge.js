const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fridgeSchema = new Schema({
  product: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  expirationDate: { type: Date, required: true },
  eaten: { type: Boolean, required: true, default: false },
  eatenDate: { type: Date, required: false },
  tossed: { type: Boolean, required: true, default: false },
  tossedDate: { type: Date, required: false },
});
const Fridge = mongoose.model("Fridge", fridgeSchema);
module.exports = Fridge;
