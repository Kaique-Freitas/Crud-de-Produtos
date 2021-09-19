"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../infra/database");
exports.Products = database_1.db.define("products", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
// Products.sync({force: true})
