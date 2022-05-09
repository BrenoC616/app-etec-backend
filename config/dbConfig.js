const mongoose = require("mongoose");
require("dotenv").config();

const password = process.env.MONGO_PASSWORD;

const dbConfig =
`mongodb+srv://user:${password}@applibraryetec.bs8vh.mongodb.net/books?retryWrites=true&w=majority`;

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
