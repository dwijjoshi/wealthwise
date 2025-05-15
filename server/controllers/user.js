const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    console.log("here");
    const user = new User({ name, email, password });
    const activityLog = {
      activityType: "Account Registered",
      status: "Successful",
    };

    user.activityLogs.push(activityLog);
    await user.save();
    const token = await user.generateToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        success: true,
        user,
        token,
        message: "Registered succesfully",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists",
      });
    }

    const doesPasswordMatch = await user.matchPassword(password);

    if (!doesPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const activityLog = {
      activityType: "Logged In",
      status: "Successful",
    };

    user.activityLogs.push(activityLog);
    await user.save();
    const token = await user.generateToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .json({
        success: true,
        user,
        token,
        message: "Logged in succesfully",
      });
  } catch (error) {}
};

exports.updateUser = async (req, res) => {
  try {
    const {
      userName,
      email,
      name,
      phoneNumber,
      dateOfBirth,
      address,
      currentJob,
      placeOfWork,
    } = req.body;
    console.log(req.user);
    console.log(req.body, "body");
    const updatedBody = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: updatedBody,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const activityLog = {
      accountEdit: "Profile Update",
      status: "Successful",
    };

    updatedUser.activityLogs.push(activityLog);
    updatedUser.save();

    res.json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(req.user._id);

    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete account",
    });
  }
};
