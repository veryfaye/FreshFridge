// FILE IS HERE FOR EXAMPLE ONLY

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expirationDateSchema = new Schema({
  product: { type: String, required: true },
  shelfLife: { type: Number, required: true },
   });

const FreshFridge = mongoose.model("FreshFridge", expirationDateSchema);

module.exports = FreshFridge;
