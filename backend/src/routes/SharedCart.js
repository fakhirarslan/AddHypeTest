const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllSharedCarts,
  createSharedCart,
} = require("../controllers/SharedCartController");
const { getAllCarts } = require("../controllers/CartController");

const router = express.Router();

router.get("/", auth, getAllCarts);
router.get("/share-cart/", auth, getAllSharedCarts);
router.post("/share-cart/", auth, createSharedCart);

module.exports = router;
