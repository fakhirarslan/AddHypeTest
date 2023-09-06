const CartModel = require("../models/Cart");
const UserModel = require("../models/User");

exports.getAllCarts = async (req, res) => {
  return await CartModel.find({ user: req.user.user_id });
};
