const express = require("express");

const { isAuthenticated } = require("../middleware/auth");
const {
  addPaymentMethod,
  getAllPaymentMethods,
  updatePaymentMethod,
  deletePaymentMethod,
} = require("../controllers/paymentMethod");
const router = express.Router();

router.route("/payment-method").post(isAuthenticated, addPaymentMethod);
router.route("/payment-method").get(isAuthenticated, getAllPaymentMethods);
router.route("/payment-method").put(isAuthenticated, updatePaymentMethod);
router.route("/payment-method").delete(isAuthenticated, deletePaymentMethod);

module.exports = router;
