"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var square_1 = require("./../../reducer/square");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = square_1["default"].getState();
        _this._unsubscribe = function () { };
        return _this;
    }
    Square.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = square_1["default"].subscribe(function () {
            _this.setState(square_1["default"].getState());
        });
    };
    Square.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    Square.prototype.press = function (id, e) {
        square_1["default"].close();
    };
    Square.prototype.render = function () {
        return (react_1["default"].createElement("div", { onClick: square_1["default"].close },
            react_1["default"].createElement("div", { className: "squareclass", key: "id" })));
    };
    return Square;
}(react_1.Component));
exports["default"] = Square;
