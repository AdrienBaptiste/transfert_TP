"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var InMemoryStorage_1 = require("./Repositories/InMemoryStorage");
var CartController_1 = require("./Controllers/CartController");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var storage = new InMemoryStorage_1.InMemoryStorage();
var cartController = new CartController_1.CartController(storage);
app.post('/cart/products', function (req, res) { return cartController.addProduct(req, res); });
app.get('/cart/total', function (req, res) { return cartController.getTotal(req, res); });
app.post('/cart/clear', function (req, res) { return cartController.clearCart(req, res); }); // Route pour vider le panier
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../frontend/build', 'index.html'));
});
var port = 3000;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
