const mongoose = require("mongoose");

const BookDataSchema = new mongoose.Schema({
  coverUrl: String,
  title: String,
  description: String,
  type: String,
  subtype: String
});

module.exports = mongoose.model("Books", BookDataSchema);
