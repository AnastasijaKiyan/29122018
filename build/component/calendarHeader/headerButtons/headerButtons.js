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
var btnTaskAdded_1 = require("../../btnsTaskAdded/btnTaskAdded");
var selected_1 = require("../../../reducer/selected");
//type State = { buttonSelectedId: number};
var HeaderButtons = /** @class */ (function (_super) {
    __extends(HeaderButtons, _super);
    function HeaderButtons(props) {
        var _this = _super.call(this, props) || this;
        _this.state = selected_1["default"].getState();
        _this.buttons = [];
        _this._unsubscribe = function () { };
        //this.state = {buttonSelectedId: 2};
        _this.buttons.push({ id: 1, name: "Properties" }, { id: 2, name: "Calendar" }, { id: 3, name: "Logs" });
        return _this;
    }
    HeaderButtons.prototype.componentDidMount = function () {
        var _this = this;
        this._unsubscribe = selected_1["default"].subscribe(function () {
            _this.setState(selected_1["default"].getState());
        });
    };
    HeaderButtons.prototype.componentWillUnmount = function () {
        this._unsubscribe();
    };
    HeaderButtons.prototype.press = function (id, e) {
        // this.setState({buttonSelectedId: id});
    };
    HeaderButtons.prototype.render = function () {
        var _this = this;
        var selected = this.state.selected;
        return (react_1["default"].createElement("div", { className: "headerButtons" },
            this.buttons.map(function (item) { return react_1["default"].createElement("input", { key: item.id, 
                // className={this.state.buttonSelectedId == item.id ? "clicked" : ""} 
                className: "input", type: "button", name: String(item.id), value: item.name, onClick: function (e) { return _this.press(item.id, e); } }); }),
            selected === selected_1.TYPE.MONTH ? "" : react_1["default"].createElement(btnTaskAdded_1["default"], { key: "id" })));
    };
    return HeaderButtons;
}(react_1.Component));
exports["default"] = HeaderButtons;
