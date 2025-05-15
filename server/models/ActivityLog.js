const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  location: { type: String, default: "Anand" },
  device: { type: String, default: "HP" },
  accountEdit: { type: String, default: "None" },
  activityType: { type: String, default: "None" },
  paymentActivity: { type: String, default: "None" },
  status: { type: String },
});

module.exports = activityLogSchema;
