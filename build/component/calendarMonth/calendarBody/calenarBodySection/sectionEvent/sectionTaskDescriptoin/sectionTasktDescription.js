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
var SectionTaskDescription = /** @class */ (function (_super) {
    __extends(SectionTaskDescription, _super);
    function SectionTaskDescription(props) {
        return _super.call(this, props) || this;
    }
    SectionTaskDescription.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "taskDescription" },
            react_1["default"].createElement("div", { className: "taskHeader" },
                react_1["default"].createElement("div", { className: "taskHeaderDiv" },
                    react_1["default"].createElement("div", { className: "taskCompanyName" }, this.props.data.name),
                    react_1["default"].createElement("div", { className: "taskUserName" }, this.props.data.author)),
                react_1["default"].createElement("div", { className: "taskBtn" })),
            react_1["default"].createElement("div", { className: "taskDate" },
                react_1["default"].createElement("div", { className: "startDate" },
                    this.props.data.hourStart,
                    " to"),
                react_1["default"].createElement("div", { className: "finsshDate" }, this.props.data.hourFinish)),
            react_1["default"].createElement("div", { className: "taskDescrText" }, this.props.data.textfirst),
            react_1["default"].createElement("div", { className: "taskDescrText" }, this.props.data.textsecond)));
    };
    return SectionTaskDescription;
}(react_1.Component));
exports["default"] = SectionTaskDescription;
