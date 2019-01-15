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
var calendarDayData_1 = require("../../../../../../data/calendarDayData");
var SectionTaskDescription = /** @class */ (function (_super) {
    __extends(SectionTaskDescription, _super);
    //private myCompany: ICompany = this.companies.map((el: ICompany, index: number, arr: ICompany[]) => el);
    function SectionTaskDescription(props) {
        var _this = _super.call(this, props) || this;
        _this.companies = calendarDayData_1["default"];
        _this.state = { selectedId: 15 };
        return _this;
    }
    SectionTaskDescription.prototype.press = function (id, e) {
        this.setState({ selectedId: id });
    };
    SectionTaskDescription.prototype.render = function () {
        return (react_1["default"].createElement("div", null, this.companies.map(function (el) {
            react_1["default"].createElement("div", { className: "taskDescription" },
                react_1["default"].createElement("div", { className: "taskHeader" },
                    react_1["default"].createElement("div", { className: "taskHeaderDiv" },
                        react_1["default"].createElement("div", { className: "taskCompanyName" }, el.name),
                        react_1["default"].createElement("div", { className: "taskUserName" }, el.author)),
                    react_1["default"].createElement("div", { className: "taskBtn" })),
                react_1["default"].createElement("div", { className: "taskDate" },
                    react_1["default"].createElement("div", { className: "startDate" },
                        el.dateStart,
                        " to"),
                    react_1["default"].createElement("div", { className: "finsshDate" }, el.dateFinish)),
                react_1["default"].createElement("div", { className: "taskDescrText" }, el.textfirst),
                react_1["default"].createElement("div", { className: "taskDescrText" }, el.textsecond));
        })));
    };
    return SectionTaskDescription;
}(react_1.Component));
exports["default"] = SectionTaskDescription;
