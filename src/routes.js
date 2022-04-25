const express = require("express");
const routes = express.Router();

const BookController = require("./controllers/BookController");

routes.post("/book", BookController.create);
routes.get("/book/:type", BookController.read);
routes.delete("/book/:id", BookController.delete);

module.exports = routes;
