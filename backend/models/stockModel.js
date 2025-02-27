const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isFavorite: { type: Boolean, default: false }
});
module.exports = mongoose.model("Stock", stockSchema);
