const cartService = require("../services/CartService");

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await cartService.getAllCarts(req, res);
    res.json({ data: carts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
