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
var calendarBodySection_1 = require("./calenarBodySection/calendarBodySection");
var CalendarBody = /** @class */ (function (_super) {
    __extends(CalendarBody, _super);
    function CalendarBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getWeek = function (week) { return week.map(_this._getSection); };
        _this._getSection = function (day) { return react_1["default"].createElement(calendarBodySection_1["default"], { key: day, day: day }); };
        return _this;
    }
    CalendarBody.prototype.render = function () {
        return react_1["default"].createElement("div", { className: "calendarBody" }, this.props.days.map(this._getWeek));
    };
    return CalendarBody;
}(react_1.Component));
exports["default"] = CalendarBody;
