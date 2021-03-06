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
var data_New_1 = require("../../../../data/data.New");
var CalendarDayTask = /** @class */ (function (_super) {
    __extends(CalendarDayTask, _super);
    function CalendarDayTask(props) {
        var _this = _super.call(this, props) || this;
        _this.myArr = data_New_1["default"];
        return _this;
    }
    CalendarDayTask.prototype.render = function () {
        return (react_1["default"].createElement("div", null, this.myArr.map(function (el) {
            return (react_1["default"].createElement("div", { className: (el.n) ? "calendarDayTask" : "calendarDayTask-full" }, el.name));
        })));
    };
    return CalendarDayTask;
}(react_1.Component));
exports["default"] = CalendarDayTask;
