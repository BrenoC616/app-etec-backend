const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://admin:4mBQHMfWSvSzXXSV@applibraryetec.bs8vh.mongodb.net/books?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
