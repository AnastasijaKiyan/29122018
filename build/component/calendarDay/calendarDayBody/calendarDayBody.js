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
var calendarDayTask_1 = require("./calendarDayTask/calendarDayTask");
var calendarDayTimer_1 = require("./calendarDayTimer/calendarDayTimer");
var CalendarDayBody = /** @class */ (function (_super) {
    __extends(CalendarDayBody, _super);
    function CalendarDayBody(props) {
        var _this = _super.call(this, props) || this;
        _this.hours = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
        ];
        _this.validator(props.data);
        _this.state = { taskSelectedId: 2 };
        return _this;
    }
    CalendarDayBody.prototype.validator = function (data) {
        data.forEach(function (item) {
            if (item.tenSecond < 1)
                throw Error("Property 'tenSecond' can't be less than 1.");
            if (item.tenSecond > 18)
                throw Error("Property 'tenSecond' can't be more than 18.");
            if (item.hourStart < 1)
                throw Error("Property 'hourStart' can't be less than 1.");
            if (item.hourStart > 24)
                throw Error("Property 'hourStart' can't be more than 24.");
            if (item.hourFinish < 1)
                throw Error("Property 'hourFinish' can't be less than 1.");
            if (item.hourFinish > 24)
                throw Error("Property 'hourFinish' can't be more than 24.");
            if (item.hourStart > item.hourFinish)
                throw Error("Property 'hourStart' can't be more than property 'hourFinish'.");
        });
    };
    CalendarDayBody.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "calendarDayBody" },
            react_1["default"].createElement(calendarDayTimer_1["default"], null),
            react_1["default"].createElement("div", { className: "body" },
                react_1["default"].createElement("div", { className: "hours" }, this.hours.map(function (e) {
                    return react_1["default"].createElement("div", { className: "hour" }, e);
                })),
                react_1["default"].createElement("div", { className: "body-empty" }),
                react_1["default"].createElement("div", { className: 'calendarDayTasks' }, this.props.data.map(function (el) {
                    return react_1["default"].createElement(calendarDayTask_1["default"], { key: el.id, data: el });
                })))));
    };
    return CalendarDayBody;
}(react_1.Component));
exports["default"] = CalendarDayBody;
