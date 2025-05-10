const mongoose = require("mongoose");
const Transaction = require("./Transaction");
const transactionSchema = require("./Transaction");
const billSchema = require("./RecurringBills");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cardSchema = require("./Card");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    transactions: [transactionSchema],
    cards: [cardSchema],
    bills: [billSchema],
    userName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    currentJob: { type: String },
    placeOfWork: { type: String },
    dateOfBirth: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  return jwt.sign({ _id: this._id }, "jwtsecret");
};

module.exports = mongoose.model("User", userSchema);
