"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO APpI");
});

/* ------------------------------------------------------- */
//* SEQUELİZE
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);
//sequelize.define('tableName', { colums})
const Todo = sequelize.define("todo", {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     unique: true,
  //     allowNull: false,
  //     field_name: "custom_column_name",
  //     comment: "Description",
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

sequelize.sync();
/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler runned.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
    body: req.body,
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
