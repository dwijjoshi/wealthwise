const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(req.cookies);
    if (!token) {
      return res.status(401).json({
        message: "Please login or signup",
      });
    }

    const decodedUserId = await jwt.verify(token, "jwtsecret");

    req.user = await User.findById(decodedUserId._id);

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
