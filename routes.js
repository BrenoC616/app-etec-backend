const express = require("express");
const routes = express.Router();

const BookController = require("./controllers/BookController");
const SubtypeController = require("./controllers/SubtypeController");

routes.get("/", async (request, response) => {
  try {
    response.status(200).json({
      message: "API está Funcional!",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Error no Servidor!");
  }
});

routes.get("/book/:type", BookController.read);
routes.get("/book/:type/:id", BookController.readById);

routes.get("/subtypes/:type", SubtypeController.read);

routes.get("/*", async (request, response) => {
  response.status(404).json({
    message: "Not found!",
  });
});

module.exports = routes;
