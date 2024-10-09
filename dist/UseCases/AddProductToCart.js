"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductToCart = void 0;
var AddProductToCart = /** @class */ (function () {
    function AddProductToCart(storage) {
        this.storage = storage;
    }
    AddProductToCart.prototype.execute = function (product) {
        this.storage.addProduct(product);
    };
    return AddProductToCart;
}());
exports.AddProductToCart = AddProductToCart;
