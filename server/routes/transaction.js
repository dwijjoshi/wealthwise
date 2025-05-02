const express = require("express");
const {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
  getSingleTransaction,
} = require("../controllers/transaction");

const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.post("/transaction", isAuthenticated, createTransaction);
router.get("/transaction", isAuthenticated, getAllTransactions);
router.put("/transaction/:id", isAuthenticated, updateTransaction);
router.delete("/transaction/:id", isAuthenticated, deleteTransaction);
router.get("/transaction/:id", isAuthenticated, getSingleTransaction);

module.exports = router;
