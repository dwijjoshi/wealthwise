const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  status: {
    type: String,
    enum: ["confirmed", "pending", "declined"],
    required: true,
  },
  note: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = transactionSchema;
