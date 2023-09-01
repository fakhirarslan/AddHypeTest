const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    items: Array,
});

module.exports = mongoose.model("Cart", blogSchema);
