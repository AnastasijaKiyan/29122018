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
var capitalize_1 = require("lodash/capitalize");
var selected_1 = require("./../../../reducer/selected");
var HeaderTitle = /** @class */ (function (_super) {
    __extends(HeaderTitle, _super);
    function HeaderTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = selected_1["default"].getState();
        _this._unsubscribe = function () { };
        return _this;
    }
    HeaderTitle.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = selected_1["default"].subscribe(function () {
            _this.setState(selected_1["default"].getState());
        });
    };
    HeaderTitle.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    HeaderTitle.prototype.left = function () {
        var _a = this.state, date = _a.date, selected = _a.selected;
        if (this.state.selected === selected_1.TYPE.MONTH)
            selected_1["default"].setMonth(moment_1["default"](date).subtract(1, selected));
        else
            selected_1["default"].setDay(moment_1["default"](date).subtract(1, selected));
    };
    HeaderTitle.prototype.right = function () {
        var _a = this.state, date = _a.date, selected = _a.selected;
        if (this.state.selected === selected_1.TYPE.MONTH)
            selected_1["default"].setMonth(moment_1["default"](date).add(1, selected));
        else
            selected_1["default"].setDay(moment_1["default"](date).add(1, selected));
    };
    HeaderTitle.prototype.today = function () {
        if (this.state.selected === selected_1.TYPE.MONTH)
            selected_1["default"].setMonth(moment_1["default"]());
        else
            selected_1["default"].setDay(moment_1["default"]());
    };
    HeaderTitle.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "headerTitle" },
            this._getDateHTMLElement(),
            react_1["default"].createElement("ul", { className: "headerTypeData" },
                this._getDimension(selected_1.TYPE.DAY),
                this._getDimension(selected_1.TYPE.MONTH)),
            react_1["default"].createElement("div", { className: "headerToggleData" },
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/l.png", onClick: function () { return _this.left(); } })),
                react_1["default"].createElement("span", { onClick: function () { return _this.today(); } }, "Today"),
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "./pict/r.png", onClick: function () { return _this.right(); } })))));
    };
    HeaderTitle.prototype._getDimension = function (item) {
        var isCurrent = this.state.selected === item;
        var className = isCurrent ? "clicked" : "";
        var onClick = isCurrent ? undefined : selected_1["default"].toogle;
        return (react_1["default"].createElement("li", { key: item, className: className, onClick: onClick }, capitalize_1["default"](item)));
    };
    HeaderTitle.prototype._getDateHTMLElement = function () {
        var _a = this.state, date = _a.date, selected = _a.selected;
        var dayElement = selected === selected_1.TYPE.DAY ? react_1["default"].createElement("span", null, date.format("DD")) : null;
        return (react_1["default"].createElement("div", { className: "headerData" },
            dayElement,
            react_1["default"].createElement("span", { className: "headerDateMonth" }, date.format("MMMM")),
            react_1["default"].createElement("span", { className: "headerDateYear" }, date.format("YYYY"))));
    };
    return HeaderTitle;
}(react_1.Component));
exports["default"] = HeaderTitle;
