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
var selected_1 = require("./reducer/selected");
var calendarMonth_1 = require("./component/calendarMonth/calendarMonth");
var calendarDay_1 = require("./component/calendarDay/calendarDay");
var calendarHeader_1 = require("./component/calendarHeader/calendarHeader");
var sectionTasktDescription_1 = require("./component/sectionTaskDescriptoin/sectionTasktDescription");
require("./index.sass");
var square_1 = require("./component/square/square");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = selected_1["default"].getState();
        _this._unsubscribe = function () { };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = selected_1["default"].subscribe(function () {
            _this.setState(selected_1["default"].getState());
        });
    };
    App.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    App.prototype.render = function () {
        var selected = this.state.selected;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: selected === selected_1.TYPE.DAY ? "dayWidth" : "monthWidth" },
                react_1["default"].createElement(calendarHeader_1["default"], null)),
            selected === selected_1.TYPE.MONTH ? react_1["default"].createElement(calendarMonth_1["default"], null) : react_1["default"].createElement(calendarDay_1["default"], null),
            react_1["default"].createElement(sectionTasktDescription_1["default"], null),
            react_1["default"].createElement(square_1["default"], null)));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
