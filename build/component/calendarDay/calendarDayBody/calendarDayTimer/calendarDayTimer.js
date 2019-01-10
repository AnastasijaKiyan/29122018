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
var CalendarDayTimer = /** @class */ (function (_super) {
    __extends(CalendarDayTimer, _super);
    function CalendarDayTimer(props) {
        var _this = _super.call(this, props) || this;
        _this.times = [
            '00:00:00', '00:00:10', '00:00:20', '00:00:30', '00:00:40', '00:00:50', '00:01:00', '00:01:10', '00:01:20', '00:01:30', '00:01:40', '00:01:50', '00:02:00',
            '00:02:10', '00:02:20', '00:02:30', '00:02:40', '00:02:50', '00:03:00'
        ];
        return _this;
    }
    CalendarDayTimer.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "aside" },
            react_1["default"].createElement("div", { className: "asideHour" }, "hour"),
            react_1["default"].createElement("div", { className: "asideAllday" }, "allday"),
            this.times.map(function (e) {
                return react_1["default"].createElement("div", { className: "asideTimeItem" }, e);
            })));
    };
    return CalendarDayTimer;
}(react_1.Component));
exports["default"] = CalendarDayTimer;
