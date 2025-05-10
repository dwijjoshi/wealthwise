const express = require("express");
const { createCard, getAllCards } = require("../controllers/card");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.route("/add-card").post(isAuthenticated, createCard);
router.route("/all-cards").get(isAuthenticated, getAllCards);
module.exports = router;
