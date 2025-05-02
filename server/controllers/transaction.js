const User = require("../models/User");

exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = {
      username: req.body.username,
      amount: req.body.amount,
      type: req.body.type,
      status: req.body.status,
      note: req.body.note || "",
    };

    const user = await User.findById(req.user._id);
    user.transactions.push(newTransaction);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Transactions added successfully",
      transactions: user.transactions,
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add transaction" });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, transactions: user.transactions });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch transactions" });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactionId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const transaction = user.transactions.id(transactionId);

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, message: "Transaction not found" });
    }

    transaction.username = req.body.username || transaction.username;
    transaction.amount = req.body.amount || transaction.amount;
    transaction.type = req.body.type || transaction.type;
    transaction.status = req.body.status || transaction.status;
    transaction.note = req.body.note || transaction.note;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      transactions: user.transactions,
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update transaction" });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactionId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    user.transactions = user.transactions.filter(
      (txn) => txn._id.toString() !== transactionId
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Transaction deleted",
      transactions: user.transactions,
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete transaction" });
  }
};

exports.getSingleTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const transaction = user.transactions.id(id);

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, message: "Transaction not found" });
    }

    return res.status(200).json({ success: true, transaction });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
