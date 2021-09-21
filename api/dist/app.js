"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var productsRoutes_1 = require("./routes/productsRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Headers", "X-PINGOTHER, X-Forwarder-For, Content-Type, Authorization");
    app.use((0, cors_1.default)());
    next();
});
app.use("/products", productsRoutes_1.productsRouter);
app.listen(process.env.PORT || 3001);
