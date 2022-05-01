const express = require("express");
const routes = express.Router();

const BookController = require("./controllers/BookController");
const SubtypeController = require("./controllers/SubtypeController");

routes.get("/book/:type", BookController.read);
routes.get("/book/:type/:id", BookController.readById);
routes.post("/book/create", BookController.create);
routes.delete("/book/delete/:id", BookController.delete);

routes.get("/subtypes/:type", SubtypeController.read);

module.exports = routes;
