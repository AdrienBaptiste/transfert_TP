"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartTotal = void 0;
var GetCartTotal = /** @class */ (function () {
    function GetCartTotal(storage) {
        this.storage = storage;
    }
    GetCartTotal.prototype.execute = function () {
        return this.storage.getTotalPrice();
    };
    return GetCartTotal;
}());
exports.GetCartTotal = GetCartTotal;
