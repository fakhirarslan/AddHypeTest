const express = require("express");
const {
    getAllSharedCarts,
    createSharedCart,
} = require("../controllers/SharedCartController");

const router = express.Router();

router.route("/share-cart").post(createSharedCart);
router.route("/share-cart/:userId").get(getAllSharedCarts);

module.exports = router;