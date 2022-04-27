const express = require("express");
const routes = express.Router();

const BookController = require("./controllers/BookController");

routes.post("/book/create", BookController.create);
routes.get("/book/:type", BookController.read);
routes.get("/book/:type/:id", BookController.readById);
routes.delete("/book/delete/:id", BookController.delete);

module.exports = routes;
