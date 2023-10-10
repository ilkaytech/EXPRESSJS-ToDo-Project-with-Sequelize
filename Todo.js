"use strict";
const { DataTypes } = require("sequelize");
const { sequelize } = require("./server");

//sequelize.define('tableName', { colums})
const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    field_name: "custom_column_name",
    comment: "Description",
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  description: DataTypes.TEXT,
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
});
