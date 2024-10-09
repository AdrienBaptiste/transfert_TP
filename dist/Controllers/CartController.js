"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
var AddProductToCart_1 = require("../UseCases/AddProductToCart");
var GetCartTotal_1 = require("../UseCases/GetCartTotal");
var Product_1 = require("../Entities/Product");
var CartController = /** @class */ (function () {
    function CartController(storage) {
        this.storage = storage;
    }
    CartController.prototype.addProduct = function (req, res) {
        var _a = req.body, name = _a.name, price = _a.price;
        if (!name || price === undefined) {
            res.status(400).send("Nom et prix sont requis.");
            return;
        }
        console.log("Ajout du produit : ".concat(name, ", Prix : ").concat(price));
        var product = new Product_1.Product(name, price);
        var addProductUseCase = new AddProductToCart_1.AddProductToCart(this.storage);
        addProductUseCase.execute(product);
        console.log("Total actuel du panier :", this.storage.getTotalPrice());
        res.status(200).send('Produit ajouté au panier');
    };
    CartController.prototype.getTotal = function (req, res) {
        var getTotalUseCase = new GetCartTotal_1.GetCartTotal(this.storage);
        var total = getTotalUseCase.execute();
        res.status(200).json({ total: total });
    };
    CartController.prototype.clearCart = function (req, res) {
        this.storage.clear(); // Vide le stockage
        console.log("Panier vidé");
        res.status(200).send("Panier vidé avec succès");
    };
    return CartController;
}());
exports.CartController = CartController;
