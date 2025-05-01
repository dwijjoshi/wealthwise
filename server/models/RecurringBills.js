const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  name: String,
  category: String,
  amount: String,
  frequency: String,
  startDate: Date,
  endDate: Date,
  account: String,
  autoPay: Boolean,
  status: { type: String, default: "Pending" },
});

module.exports = billSchema;
