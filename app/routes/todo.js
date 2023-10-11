"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require("express").Router();

// Call Todo Controller
const todo = require("../controllers/todo");

router
  .route("/")
  .get(todo.list) // list
  .post(todo.create); // create

router
  .route("/:id")
  .get(todo.read) // Read
  .put(todo.update) // Update
  .delete(todo.delete); // Delete

module.exports = router;
