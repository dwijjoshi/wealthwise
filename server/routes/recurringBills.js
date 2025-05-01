const express = require("express");
const router = express.Router();
const Bill = require("../models/RecurringBills");

// Save a new recurring bill
router.post("/add", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res
      .status(201)
      .json({ success: true, message: "Bill saved successfully." });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all bills
router.get("/bills/alltransaction", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json({ success: true, bills });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
