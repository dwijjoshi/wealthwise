const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  expirt: { type: String, required: true },
  cvc: { type: String, required: true },
  default: { type: Boolean, default: false },
  balance: { type: Number, default: 100000 },
});

module.exports = cardSchema;
