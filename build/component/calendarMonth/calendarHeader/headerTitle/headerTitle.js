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
var moment_1 = require("moment");
var _DIMENSION = ["Day", "Month"];
var HeaderTitle = /** @class */ (function (_super) {
    __extends(HeaderTitle, _super);
    function HeaderTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            typeDateSelectedIndex: 1,
            date: new Date()
        };
        return _this;
    }
    HeaderTitle.prototype.press = function (id) {
        this.setState({ typeDateSelectedIndex: id });
    };
    HeaderTitle.prototype.left = function () {
        var date = this.state.date;
        switch (this.state.typeDateSelectedIndex) {
            case 0: // Day
                date.setDate(date.getDate() - 1);
                this.setState({ date: date });
                break;
            case 1: // Month
                date.setMonth(date.getMonth() - 1);
                this.setState({ date: date });
                break;
            default:
                return;
        }
    };
    HeaderTitle.prototype.right = function () {
        var date = this.state.date;
        switch (this.state.typeDateSelectedIndex) {
            case 0: // Day
                date.setDate(date.getDate() + 1);
                this.setState({ date: date });
                break;
            case 1: // Month
                date.setMonth(date.getMonth() + 1);
                this.setState({ date: date });
                break;
            default:
                return;
        }
    };
    HeaderTitle.prototype.today = function () {
        var date = new Date();
        this.setState({ date: date });
    };
    HeaderTitle.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "headerTitle" },
            this._getDateHTMLElement(),
            react_1["default"].createElement("ul", { className: "headerTypeData" }, _DIMENSION.map(this._getDimension.bind(this))),
            react_1["default"].createElement("div", { className: "headerToggleData" },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/l.png", onClick: function () { return _this.left(); } })),
                react_1["default"].createElement("span", { onClick: function () { return _this.today(); } }, "Today"),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/r.png", onClick: function () { return _this.right(); } })))));
    };
    HeaderTitle.prototype._getDimension = function (item, index) {
        var isCurrent = this.state.typeDateSelectedIndex === index;
        var className = isCurrent ? "clicked" : "";
        var onClick = isCurrent ? undefined : this.press.bind(this, index);
        return (react_1["default"].createElement("li", { key: item, className: className, onClick: onClick }, item));
    };
    HeaderTitle.prototype._getDateHTMLElement = function () {
        var date = this.state.date;
        var currentDateIndex = this.state.typeDateSelectedIndex;
        var dayElement = currentDateIndex == 0 ? react_1["default"].createElement("span", null, date.getDate()) : null;
        return (react_1["default"].createElement("div", { className: "headerData" },
            dayElement,
            react_1["default"].createElement("span", { className: "headerDateMonth" }, moment_1["default"](date).format("MMMM")),
            react_1["default"].createElement("span", { className: "headerDateYear" }, date.getFullYear())));
    };
    return HeaderTitle;
}(react_1.Component));
exports["default"] = HeaderTitle;
