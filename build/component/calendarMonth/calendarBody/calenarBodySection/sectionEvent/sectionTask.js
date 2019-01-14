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
        _this.state = { selectedId: 15 };
        return _this;
    }
    SectionTask.prototype.press = function (id, e) {
        this.setState({ selectedId: id });
        console.log(id);
    };
    SectionTask.prototype.render = function () {
        var _this = this;
        var maxLength = 4;
        return (react_1["default"].createElement("div", { className: "allSectionTasks" },
            this.sections.map(function (item, index) {
                if (index < maxLength) {
                    return (react_1["default"].createElement("div", null,
                        react_1["default"].createElement("div", { key: item.id, className: "sectionTaskItem", onClick: function (e) { return _this.press(item.id, e); } }, item.name),
                        react_1["default"].createElement(sectionTasktDescription_1["default"], { companyId: item.id, isVisiable: false })));
                }
                else if (index > maxLength) {
                    return null;
                }
                else {
                }
            }),
            react_1["default"].createElement("div", { className: this.sections.length > maxLength ? "hoveredTask" : "hoveredTask hide" },
                this.sections.length - maxLength,
                " more...")));
    };
    return SectionTask;
}(react_1.Component));
exports["default"] = SectionTask;
