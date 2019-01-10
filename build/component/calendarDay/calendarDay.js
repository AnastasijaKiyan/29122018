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
var calendarDayBody_1 = require("../calendarDay/calendarDayBody/calendarDayBody");
var headerButtons_1 = require("../calendarMonth/calendarHeader/headerButtons/headerButtons");
var headerTitle_1 = require("../calendarMonth/calendarHeader/headerTitle/headerTitle");
require("../../index.sass");
var CalendarDay = /** @class */ (function (_super) {
    __extends(CalendarDay, _super);
    function CalendarDay(props) {
        return _super.call(this, props) || this;
    }
    CalendarDay.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "calendarDay" },
            react_1["default"].createElement("div", { className: "calendarHeader" },
                react_1["default"].createElement(headerButtons_1["default"], null),
                react_1["default"].createElement(headerTitle_1["default"], null)),
            react_1["default"].createElement(calendarDayBody_1["default"], null)));
    };
    return CalendarDay;
}(react_1.Component));
exports["default"] = CalendarDay;
