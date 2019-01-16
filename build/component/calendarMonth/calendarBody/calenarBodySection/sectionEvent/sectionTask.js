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
var sectionTasktDescription_1 = require("./sectionTaskDescriptoin/sectionTasktDescription");
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
        var isOpened = this.state.isOpened;
        var cheked = this.state.selectedId;
        var maxLength = 4;
        return (react_1["default"].createElement("div", null, this.sections.map(function (item, index) {
            if (item.dateStart == ) {
            }
            react_1["default"].createElement("div", { className: "allSectionTasks" },
                _this.sections.map(function (item, index) {
                    if (index < maxLength) {
                        return (react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { key: item.id, className: item.id == cheked ? "sectionTaskItem pressed" : "sectionTaskItem", onClick: function (e) { return _this.press(item.id, e); } },
                                item.name,
                                react_1["default"].createElement(sectionTasktDescription_1["default"], { key: item.id, id: item.id, name: item.name, author: item.author, textfirst: item.textfirst, textsecond: item.textsecond, dateStart: item.dateStart, dateFinish: item.dateFinish, className: isOpened ? "displayedSectionTaskDescription" : "hideSectionTaskDescription" }))));
                    }
                    else if (index > maxLength) {
                        return null;
                    }
                    else {
                    }
                }),
                react_1["default"].createElement("div", { className: _this.sections.length > maxLength
                        ? "hoveredTask"
                        : "hoveredTask hide" },
                    _this.sections.length - maxLength,
                    " more..."));
        })));
    };
    return SectionTask;
}(react_1.Component));
exports["default"] = SectionTask;
