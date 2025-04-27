const express = require("express");
const {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/transaction", isAuthenticated, createTransaction);
router.get("/transaction", isAuthenticated, getAllTransactions);
router.put("/transaction/:id", isAuthenticated, updateTransaction);
router.delete("/transaction/:id", isAuthenticated, deleteTransaction);

module.exports = router;
