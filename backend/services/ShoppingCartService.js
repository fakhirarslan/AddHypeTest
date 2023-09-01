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

exports.getShareCart = async (user) => {
    return await SharedCartModel.findById({ userId: user });
};

exports.createShareCart = async (id, user, permission) => {
    return await SharedCartModel.create({ cardId: id, userId: user, permission });
};
