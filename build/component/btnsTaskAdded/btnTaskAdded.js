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
var BtnsTaskAdded = /** @class */ (function (_super) {
    __extends(BtnsTaskAdded, _super);
    function BtnsTaskAdded(props) {
        var _this = _super.call(this, props) || this;
        _this.btnDuration = [
            { id: 1, name: 10, duration: 1 },
            { id: 2, name: 20, duration: 2 },
            { id: 3, name: 30, duration: 3 },
            { id: 4, name: 40, duration: 4 },
            { id: 5, name: 50, duration: 5 },
            { id: 6, name: 60, duration: 6 }
        ];
        _this.state = { isClicked: false };
        return _this;
    }
    BtnsTaskAdded.prototype.press = function (id, e) {
        this.setState({ isClicked: true });
    };
    BtnsTaskAdded.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "btnsTaskAdded" },
            react_1["default"].createElement("input", { className: "quickCompaign", value: "+ Quick compaign" }),
            react_1["default"].createElement("button", { className: "btnSave" }, "Save"),
            react_1["default"].createElement("div", { className: "btnsDuration" }, this.btnDuration.map(function (e) {
                return (react_1["default"].createElement("input", { className: "btnDuration", value: e.name, onClick: function (e) { return _this.press(e); } }));
            }))));
    };
    return BtnsTaskAdded;
}(react_1.Component));
exports["default"] = BtnsTaskAdded;
