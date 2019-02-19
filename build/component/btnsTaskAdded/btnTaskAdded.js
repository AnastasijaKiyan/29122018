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
var btnQuickCompaign_1 = require("../btnQuickCompaign/btnQuickCompaign");
var btnsSaveDuration_1 = require("../btnsSaveDuration/btnsSaveDuration");
var BtnsTaskAdded = /** @class */ (function (_super) {
    __extends(BtnsTaskAdded, _super);
    function BtnsTaskAdded() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedBtn: false
        };
        return _this;
    }
    BtnsTaskAdded.prototype.press = function (id, e) {
    };
    BtnsTaskAdded.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "btnsTaskAdded" },
            react_1["default"].createElement(btnQuickCompaign_1["default"], null),
            react_1["default"].createElement(btnsSaveDuration_1["default"], null)));
    };
    return BtnsTaskAdded;
}(react_1.Component));
exports["default"] = BtnsTaskAdded;
