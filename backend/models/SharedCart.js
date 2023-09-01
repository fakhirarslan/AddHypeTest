const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    cartId: String,
    userId: String,
    permission: String
});

module.exports = mongoose.model("SharedCart", blogSchema);
