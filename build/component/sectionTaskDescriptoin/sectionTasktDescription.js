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
var modal_1 = require("./../../reducer/modal");
var SectionTaskDescription = /** @class */ (function (_super) {
    __extends(SectionTaskDescription, _super);
    function SectionTaskDescription() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = modal_1["default"].getState();
        _this._unsubscribe = function () { };
        return _this;
    }
    SectionTaskDescription.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = modal_1["default"].subscribe(function () {
            _this.setState(modal_1["default"].getState());
        });
    };
    SectionTaskDescription.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    SectionTaskDescription.prototype.press = function (id, e) {
        modal_1["default"].close();
    };
    SectionTaskDescription.prototype.render = function () {
        if (this.state.campaign == null)
            return null;
        var el = this.state.campaign;
        return (react_1["default"].createElement("div", { onClick: modal_1["default"].close },
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
                react_1["default"].createElement("div", { className: "taskDescrText" }, el.textsecond))));
    };
    return SectionTaskDescription;
}(react_1.Component));
exports["default"] = SectionTaskDescription;
