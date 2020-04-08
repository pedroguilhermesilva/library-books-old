const express = require("express");

const UserController = require("./controllers/UserController");
const BooksController = require("./controllers/BooksController");
const SessionController = require("./controllers/SessionController");
const FiltersController = require("./controllers/FiltersController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

routes.get("/books", BooksController.index);
routes.post("/books", BooksController.create);
routes.delete("/books/:id", BooksController.delete);

routes.get("/books/filters", FiltersController.index);

module.exports = routes;
