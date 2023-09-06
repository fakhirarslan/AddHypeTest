const cartService = require("../services/ShoppingCartService");

exports.getAllSharedCarts = async (req, res) => {
  try {
    const carts = await cartService.getShareCart(req, res);
    res.json({ carts: carts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSharedCart = async (req, res) => {
  try {
    const cart = await cartService.createShareCart(req, res);
    res.json({ data: cart, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
