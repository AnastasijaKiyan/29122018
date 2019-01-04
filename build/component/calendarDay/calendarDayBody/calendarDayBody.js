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
var CalendarDayBody = /** @class */ (function (_super) {
    __extends(CalendarDayBody, _super);
    function CalendarDayBody(props) {
        var _this = _super.call(this, props) || this;
        _this.hours = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ];
        return _this;
    }
    CalendarDayBody.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "calendarDayBody" },
            react_1["default"].createElement("div", { className: "aside" }),
            react_1["default"].createElement("div", { className: 'body' },
                react_1["default"].createElement("div", { className: "hours" }, this.hours.map(function (e) { return e; })),
                react_1["default"].createElement("div", { className: "tasks" }))));
    };
    return CalendarDayBody;
}(react_1.Component));
exports["default"] = CalendarDayBody;
