"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var CartComponent_1 = require("./components/CartComponent");
var ProductComponent_1 = require("./components/ProductComponent");
var App = function () { return (react_1.default.createElement("div", null,
    react_1.default.createElement("h1", null, "Mon Panier d'Achat"),
    react_1.default.createElement(ProductComponent_1.ProductComponent, null),
    react_1.default.createElement(CartComponent_1.CartComponent, null))); };
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
