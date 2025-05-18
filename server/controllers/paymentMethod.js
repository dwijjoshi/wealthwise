const User = require("../models/User");

exports.addPaymentMethod = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.paymentMethods.push(req.body);

    await user.save();
    res.status(201).json({
      success: true,
      message: "Payment method added successfully",
      paymentMethods: user.paymentMethods,
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add payment method" });
  }
};

exports.getAllPaymentMethods = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, paymentMethods: user.paymentMethods });
  } catch {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch payment methods" });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const paymentMethodId = req.params.id; // fix this line

    user.paymentMethods = user.paymentMethods.filter(
      (method) => method._id.toString() !== paymentMethodId
    );

    await user.save();
    res.status(201).json({
      success: true,
      message: "Payment method deleted successfully",
      paymentMethods: user.paymentMethods,
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add payment method" });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const userId = req.user._id;
  const paymentMethodId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const paymentMethod = user.paymentMethods.id(paymentMethodId);

  if (!paymentMethod) {
    return res
      .status(404)
      .json({ success: false, message: "Payment method not found" });
  }

  paymentMethod.type = req.body.type || paymentMethod.type;
  paymentMethod.details = req.body.details || paymentMethod.details;
  paymentMethod.updatedAt = new Date();

  await user.save();

  res.status(200).json({
    success: true,
    message: "Payment method updated successfully",
    paymentMethods: user.paymentMethods,
    user,
  });
};
