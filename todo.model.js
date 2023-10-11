"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* SEQUELIZE

const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize(
//   "postgres://postgres:23442344@localhost:5432/todo"
// );
const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);
const Todo = sequelize.define("todo", {
  // id: {
  //     type: DataTypes.INTEGER,
  //     unique: true,
  //     allowNull: false, // default: true
  //     field: 'custom_column_name', // Change column name
  //     comment: 'Description',
  //     primaryKey: true,
  //     autoIncrement: true,
  // },

  title: {
    type: DataTypes.STRING(64), // varchar(64)
    allowNull: false,
  },

  description: DataTypes.TEXT, // ShortHand Using.

  priority: {
    // 1: High, 0: Normal, -1: Low
    type: DataTypes.SMALLINT, // postgres: INTEGER
    allowNull: false,
    defaultValue: 0, // set default value.
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  //? Not need define "createdAt" & "updatedAt" fields.
  // createdAt: false, // Unset
  // updatedAt: false, // Unset
});

// Synchronization:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP & CREATE
sequelize.sync({ alter: true }); // TO BACKUP & DROP & CREATE & FROM BACKUP

// Connect:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch((err) => console.log("* DB Not Connected *", err));

module.exports = Todo;
