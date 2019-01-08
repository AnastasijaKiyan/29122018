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
            1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
        ];
        _this.tasks = [
            { id: 1, hour: '00:00 AM', taskType: 'Adver 1' },
            { id: 2, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 3, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 4, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 5, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 6, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 7, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 8, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 9, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 10, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 11, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 12, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 13, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 14, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 15, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 16, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 17, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 18, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 19, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 20, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 21, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 22, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 23, hour: '01:00 AM', taskType: 'Adver 2' },
            { id: 24, hour: '01:00 AM', taskType: 'Adver 2' },
        ];
        _this.state = { taskSelectedId: 2 };
        return _this;
    }
    CalendarDayBody.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "calendarDayBody" },
            react_1["default"].createElement(calendarDayTimer_1["default"], null),
            react_1["default"].createElement("div", { className: "body" },
                react_1["default"].createElement("div", { className: "hours" }, this.hours.map(function (e) {
                    return react_1["default"].createElement("div", { className: "hour" }, e);
                })),
                react_1["default"].createElement("div", { className: "body-empty" }),
                react_1["default"].createElement("div", { className: 'calendarTasks' }, this.tasks.map(function (el) {
                    return react_1["default"].createElement(calendarDayTask_1["default"], { key: el.id, id: el.id, hour: el.hour, taskType: el.taskType });
                })))));
    };
    return CalendarDayBody;
}(react_1.Component));
exports["default"] = CalendarDayBody;
