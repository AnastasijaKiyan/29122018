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
var sectionTask_1 = require("./sectionEvent/sectionTask");
var selected_1 = require("./../../../../reducer/selected");
var CalendarBodySection = /** @class */ (function (_super) {
    __extends(CalendarBodySection, _super);
    function CalendarBodySection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarBodySection.prototype.render = function () {
        return !(this.props.day instanceof moment_1["default"]) ? null : (react_1["default"].createElement("div", { className: "calendarBodySection", onClick: selected_1["default"].setDay.bind(null, this.props.day) },
            react_1["default"].createElement("div", { className: moment_1["default"]().isSame(this.props.day, "day") ? "day calendarDayActive" : "day" }, this.props.day.format("DD")),
            react_1["default"].createElement(sectionTask_1["default"], { key: this.props.day.unix(), day: this.props.day })));
    };
    return CalendarBodySection;
}(react_1.Component));
exports["default"] = CalendarBodySection;
