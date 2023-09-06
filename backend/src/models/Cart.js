const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  user: { type: String, ref: "User", requried: true },
});

module.exports = mongoose.model("Cart", blogSchema);
