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
var SectionTask = /** @class */ (function (_super) {
    __extends(SectionTask, _super);
    function SectionTask(props) {
        var _this = _super.call(this, props) || this;
        _this.tasks = [{ id: 1, task: 'Some Text' }];
        return _this;
    }
    SectionTask.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: 'sectionTask' },
            react_1["default"].createElement(sectionTasktDescription_1["default"], null),
            react_1["default"].createElement("div", { className: "allSectionTasks" },
                react_1["default"].createElement("div", { className: "sectionTaskItem" }, "Some text"),
                react_1["default"].createElement("div", { className: "sectionTaskItem" }, "Some text"),
                react_1["default"].createElement("div", { className: "sectionTaskItem" }, "Some text"),
                react_1["default"].createElement("div", { className: "sectionTaskItem" }, "Some text"),
                react_1["default"].createElement("div", { className: "sectionTaskItem" }, "Some text")),
            react_1["default"].createElement("div", { className: "hoveredTask" }, "2 more...")));
    };
    return SectionTask;
}(react_1.Component));
exports["default"] = SectionTask;
