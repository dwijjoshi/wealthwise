const express = require("express");
const {
  register,
  login,
  updateUser,
  myProfile,
  deleteAccount,
} = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").put(isAuthenticated, updateUser);
router.route("/me").get(isAuthenticated, myProfile);
router.route("/delete-account").delete(isAuthenticated, deleteAccount);
module.exports = router;
