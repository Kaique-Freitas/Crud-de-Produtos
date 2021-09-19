"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productsRoutes_1 = require("./routes/productsRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', productsRoutes_1.productsRouter);
app.listen(process.env.PORT || 3001);
