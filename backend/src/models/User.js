const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

module.exports = mongoose.model("User", blogSchema);
