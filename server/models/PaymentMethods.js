const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = paymentMethodSchema;
