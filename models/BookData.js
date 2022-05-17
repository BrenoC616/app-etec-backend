const mongoose = require("mongoose");

const BookDataSchema = new mongoose.Schema({
  coverUrl: String,
  downloadAndReadName: String,
  title: String,
  description: String,
  author: String,
  type: String,
  subtype: String
});

module.exports = mongoose.model("Books", BookDataSchema);
