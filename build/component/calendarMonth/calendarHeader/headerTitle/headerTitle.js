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
var _DIMENSION = ["Day", "Week", "Month"];
var HeaderTitle = /** @class */ (function (_super) {
    __extends(HeaderTitle, _super);
    function HeaderTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { typeDateSelectedId: 2 };
        return _this;
    }
    HeaderTitle.prototype.press = function (id) {
        this.setState({ typeDateSelectedId: id });
    };
    HeaderTitle.prototype.left = function () {
        console.log("left");
    };
    HeaderTitle.prototype.right = function () {
        console.log("right");
    };
    HeaderTitle.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "headerTitle" },
            react_1["default"].createElement("div", { className: "headerData" },
                react_1["default"].createElement("div", { className: "headerDataMonth" }, "October"),
                react_1["default"].createElement("div", { className: "headerDataYear" }, "2018")),
            react_1["default"].createElement("ul", { className: "headerTypeData" }, _DIMENSION.map(this._getDimension.bind(this))),
            react_1["default"].createElement("div", { className: "headerToggleData" },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/l.png", onClick: function () { return _this.left(); } })),
                react_1["default"].createElement("span", null, "Today"),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/r.png", onClick: function () { return _this.right(); } })))));
    };
    HeaderTitle.prototype._getDimension = function (item, index) {
        var isCurrent = this.state.typeDateSelectedId === index;
        var className = isCurrent ? "clicked" : "";
        var onClick = isCurrent ? undefined : this.press.bind(this, index);
        return (react_1["default"].createElement("li", { key: item, className: className, onClick: onClick }, item));
    };
    return HeaderTitle;
}(react_1.Component));
exports["default"] = HeaderTitle;
