const User = require("../models/User");

exports.createCard = async (req, res) => {
  try {
    const newCard = {
      name: req.body.name,
      number: req.body.number,
      category: req.body.category,
      cvc: req.body.cvc,
      default: req.body.default,
      expiry: req.body.expiry,
      balance: 100000,
    };

    const user = await User.findById(req.user._id);
    user.cards.push(newCard);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Card added successfully",
      transactions: user.cards,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to add Card" });
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, cards: user.cards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch cards" });
  }
};
