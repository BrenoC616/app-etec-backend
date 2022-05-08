const mongoose = require("mongoose");

const SubtypeDataSchema = new mongoose.Schema({
  value: String,
  name: String,
  type: String,
});

module.exports = mongoose.model("Subtype", SubtypeDataSchema);
