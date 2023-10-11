"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* SEQUELIZE

const { sequelize, DataTypes } = require("../dbConnection");
// Where is DB (DB Connection Details):
// const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/todoCH14') // $ npm i pg pg-hstore
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize(
//   "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
// );

// sequelize.define('tableName', { columns })
const Todo = sequelize.define("todo", {
  // id: { //? Not need define ID field, it will create auto.
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
    type: DataTypes.TINYINT, // postgres: INTEGER
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

module.exports = Todo;
