"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var sequelize_1 = require("sequelize");
require("dotenv/config");
var DB_NAME = String(process.env.DB_NAME);
var DB_USER = String(process.env.DB_USER);
var DB_PASSWORD = String(process.env.DB_PASSWORD);
var DB_HOST = String(process.env.DB_HOST);
exports.db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
});
exports.db.authenticate()
    .then(function () { return console.log("Success connected database"); })
    .catch(function (error) { return console.log("Error: " + error); });
