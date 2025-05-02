const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { isAuthenticated } = require("../middleware/auth");

/**
 * @swagger
 * /bills:
 *   get:
 *     summary: Get all bills for the authenticated user
 *     tags: [Bills]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved bills
 */

/**
 * @swagger
 * /bills/add:
 *   post:
 *     summary: Add a new bill
 *     tags: [Bills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               amount:
 *                 type: number
 *               frequency:
 *                 type: string
 *               dueDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bill added successfully
 */

// Add a new bill for the authenticated user
router.post("/bills/add", isAuthenticated, async (req, res) => {
  try {
    // Ensure that required fields are provided
    const {
      name,
      category,
      amount,
      frequency,
      startDate,
      endDate,
      account,
      autoPay,
    } = req.body;
    if (
      !name ||
      !category ||
      !amount ||
      !frequency ||
      !startDate ||
      !endDate ||
      !account
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findById(req.user._id);

    // Check if user exists

    // Add bill to user's bills array
    user.bills.push(req.body);
    await user.save();
    res.status(201).json({ success: true, message: "Bill added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all bills for authenticated user
router.get("/bills", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, bills: user.bills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
