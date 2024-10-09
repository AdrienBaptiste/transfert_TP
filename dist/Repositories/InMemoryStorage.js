"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
var InMemoryStorage = /** @class */ (function () {
    function InMemoryStorage() {
        this.products = [];
    }
    InMemoryStorage.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    InMemoryStorage.prototype.getProducts = function () {
        return this.products;
    };
    InMemoryStorage.prototype.getTotalPrice = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    InMemoryStorage.prototype.clear = function () {
        this.products = [];
    };
    return InMemoryStorage;
}());
exports.InMemoryStorage = InMemoryStorage;
