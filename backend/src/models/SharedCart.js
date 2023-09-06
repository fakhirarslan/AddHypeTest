const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  cartId: { type: String, required: true },
  userId: { type: String, required: true, ref: "User" },
  permission: { type: String, required: true },
  sharedWith: { type: String, required: true, ref: "User" },
});

module.exports = mongoose.model("SharedCart", blogSchema);
