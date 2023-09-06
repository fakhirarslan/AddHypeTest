const CartModel = require("../models/Cart");
const UserModel = require("../models/User");
const SharedCartModel = require("../models/SharedCart");

exports.getAllCarts = async () => {
  return await CartModel.find();
};

exports.createCart = async (cart) => {
  return await CartModel.create(cart);
};
exports.getCartById = async (id) => {
  return await CartModel.findById(id);
};

exports.updateCart = async (id, cart) => {
  return await CartModel.findByIdAndUpdate(id, cart);
};

exports.deleteCart = async (id) => {
  return await CartModel.findByIdAndDelete(id);
};

exports.getShareCart = async (req, res) => {
  return await SharedCartModel.find({ userId: req.user.user_id }).populate();
};

exports.createShareCart = async (req, res) => {
  const { listId, sharedWith, permission } = req.body;
  const sharedWithUser = await UserModel.findOne({ email: sharedWith });
  const user = req.user;

  // Validate if same user
  if (user.user_id === sharedWithUser._id.toString()) {
    res.status(500).json({ error: "Cannot share with yourself" });
  }

  return await SharedCartModel.create({
    cartId: listId,
    userId: user.user_id,
    permission,
    sharedWith: sharedWithUser._id.toString(),
  });
};
