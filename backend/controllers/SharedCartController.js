const cartService = require("../services/ShoppingCartService");

exports.getAllSharedCarts = async (req, res) => {
    try {
        const carts = await cartService.getShareCart();
        res.json({ data: carts, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createSharedCart = async (req, res) => {
    try {
        const cart = await cartService.createShareCart(req.body);
        res.json({ data: cart, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
