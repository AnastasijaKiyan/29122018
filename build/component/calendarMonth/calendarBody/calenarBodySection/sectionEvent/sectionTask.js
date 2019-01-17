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
var calendarDayData_1 = require("../../../../../data/calendarDayData");
var moment = require("moment");
var filter_1 = require("lodash/filter");
var modal_1 = require("./../../../../../reducer/modal");
var _MAX_LENGTH = 4;
var SectionTask = /** @class */ (function (_super) {
    __extends(SectionTask, _super);
    function SectionTask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = modal_1["default"].getState();
        _this._unsubscribe = function () { };
        _this.sections = calendarDayData_1["default"];
        return _this;
    }
    SectionTask.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = modal_1["default"].subscribe(function () {
            _this.setState(modal_1["default"].getState());
        });
    };
    SectionTask.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    SectionTask.prototype.press = function (item, e) {
        e.stopPropagation();
        modal_1["default"].open(item);
    };
    SectionTask.prototype.render = function () {
        var _this = this;
        var sectionsFiltered = this.getFilteredSection();
        return (react_1["default"].createElement("div", { className: "allSectionTasks" },
            sectionsFiltered.map(function (item, index) {
                if (index < _MAX_LENGTH) {
                    var cheked = _this.state.campaign ? _this.state.campaign.id === item.id : false;
                    return (react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { key: item.id, className: cheked ? "sectionTaskItem pressed" : "sectionTaskItem", onClick: function (e) { return _this.press(item, e); } }, item.name)));
                }
                else if (index > _MAX_LENGTH)
                    return null;
            }),
            react_1["default"].createElement("div", { className: sectionsFiltered.length > _MAX_LENGTH ? "hoveredTask" : "hoveredTask hide" },
                sectionsFiltered.length - _MAX_LENGTH,
                " more...")));
    };
    SectionTask.prototype.getFilteredSection = function () {
        var current = moment(this.props.day);
        return filter_1["default"](this.sections, function (_a) {
            var dateStart = _a.dateStart, dateFinish = _a.dateFinish;
            return current.diff(moment.unix(dateStart), "day") >= 0 && current.diff(moment.unix(dateFinish), "hour") <= 0;
        });
    };
    return SectionTask;
}(react_1.Component));
exports["default"] = SectionTask;
