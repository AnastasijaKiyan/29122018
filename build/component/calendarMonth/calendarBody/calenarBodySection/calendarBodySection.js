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
var sectionTask_1 = require("./sectionEvent/sectionTask");
var CalendarBodySection = /** @class */ (function (_super) {
    __extends(CalendarBodySection, _super);
    function CalendarBodySection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectedId: 18 };
        return _this;
    }
    CalendarBodySection.prototype.press = function (id, e) {
        this.setState({ selectedId: id });
        console.log('222');
    };
    CalendarBodySection.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "calendarBodySection" },
            react_1["default"].createElement("div", { className: this.state.selectedId == this.props.day.id ? "day calendarDayActive" : "day", onClick: function (e) { return _this.press(_this.props.day.id, e); } }, this.props.day.day),
            react_1["default"].createElement(sectionTask_1["default"], null)));
    };
    return CalendarBodySection;
}(react_1.Component));
exports["default"] = CalendarBodySection;
