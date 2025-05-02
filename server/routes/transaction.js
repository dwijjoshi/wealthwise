const express = require("express");
const {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API for managing transactions
 */

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - amount
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 example: Netflix Subscription
 *               amount:
 *                 type: number
 *                 example: 499
 *               category:
 *                 type: string
 *                 example: Entertainment
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2025-05-02
 *     responses:
 *       201:
 *         description: Transaction created successfully
 */

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions for the authenticated user
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all transactions
 */

/**
 * @swagger
 * /transaction/{id}:
 *   put:
 *     summary: Update a specific transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
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
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 */

/**
 * @swagger
 * /transaction/{id}:
 *   delete:
 *     summary: Delete a specific transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 */

const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/transaction", isAuthenticated, createTransaction);
router.get("/transaction", isAuthenticated, getAllTransactions);
router.put("/transaction/:id", isAuthenticated, updateTransaction);
router.delete("/transaction/:id", isAuthenticated, deleteTransaction);

module.exports = router;
