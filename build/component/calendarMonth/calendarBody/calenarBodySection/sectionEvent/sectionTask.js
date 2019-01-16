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
var SectionTask = /** @class */ (function (_super) {
    __extends(SectionTask, _super);
    function SectionTask(props) {
        var _this = _super.call(this, props) || this;
        _this.sections = calendarDayData_1["default"];
        _this.state = {
            selectedId: 0,
            isOpened: false
        };
        return _this;
    }
    SectionTask.prototype.press = function (id, e) {
        this.setState({
            selectedId: id,
            isOpened: true
        });
    };
    SectionTask.prototype.render = function () {
        var _this = this;
        var sectionsFiltered = this.getFilteredSection();
        var isOpened = this.state.isOpened;
        var cheked = this.state.selectedId;
        var maxLength = 4;
        return (
        // <div>
        //   {this.sections.map((item: ICompany, index: number) => {
        //     if (item.dateStart == 1) {
        //     }
        react_1["default"].createElement("div", { className: "allSectionTasks" },
            sectionsFiltered.map(function (item, index) {
                if (index < maxLength) {
                    return (react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { key: item.id, className: item.id == cheked ? "sectionTaskItem pressed" : "sectionTaskItem", onClick: function (e) { return _this.press(item.id, e); } }, item.name)));
                }
                else if (index > maxLength) {
                    return null;
                }
                else {
                }
            }),
            react_1["default"].createElement("div", { className: sectionsFiltered.length > maxLength
                    ? "hoveredTask"
                    : "hoveredTask hide" },
                sectionsFiltered.length - maxLength,
                " more...")));
        //</div>
    };
    SectionTask.prototype.getFilteredSection = function () {
        var _this = this;
        var result = [];
        this.sections.forEach(function (item) {
            var dateStart = new Date(item.dateStart * 1000); // Конвертация из unix_timestamp
            dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
            var dateFinish = new Date(item.dateFinish * 1000); // Конвертация из unix_timestamp
            dateFinish = new Date(dateFinish.getFullYear(), dateFinish.getMonth(), dateFinish.getDate());
            dateFinish.setDate(dateFinish.getDate() + 1);
            var dateCurrent = new Date(/*this.props.year*/ 2019, /*this.props.month*/ 0, _this.props.day);
            if (dateCurrent >= dateStart && dateCurrent < dateFinish)
                result.push(item);
        });
        return result;
    };
    return SectionTask;
}(react_1.Component));
exports["default"] = SectionTask;
