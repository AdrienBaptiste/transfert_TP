"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storageKey = 'cart';
    }
    LocalStorage.prototype.addProduct = function (product) {
        var products = this.getProducts();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    };
    LocalStorage.prototype.getProducts = function () {
        var storedProducts = localStorage.getItem(this.storageKey);
        return storedProducts ? JSON.parse(storedProducts) : [];
    };
    LocalStorage.prototype.getTotalPrice = function () {
        return this.getProducts().reduce(function (total, product) { return total + product.price; }, 0);
    };
    LocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.storageKey);
    };
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
