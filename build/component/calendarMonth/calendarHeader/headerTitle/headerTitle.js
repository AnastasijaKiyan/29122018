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
var HeaderTitle = /** @class */ (function (_super) {
    __extends(HeaderTitle, _super);
    function HeaderTitle(props) {
        var _this = _super.call(this, props) || this;
        _this.typeDate = [];
        _this.state = { typeDateSelectedId: 3 };
        _this.typeDate.push({ id: 1, name: "Day" }, { id: 2, name: "Week" }, { id: 3, name: "Month" });
        return _this;
    }
    HeaderTitle.prototype.press = function (id) {
        this.setState({ typeDateSelectedId: id });
    };
    HeaderTitle.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "headerTitle" },
            react_1["default"].createElement("div", { className: "headerData" },
                react_1["default"].createElement("div", { className: "headerDataMonth" }, "October"),
                react_1["default"].createElement("div", { className: "headerDataYear" }, "2018")),
            react_1["default"].createElement("ul", { className: "headerTypeData" }, this.typeDate.map(function (item) { return react_1["default"].createElement("li", { key: item.id, className: _this.state.typeDateSelectedId == item.id ? "clicked" : "", id: String(item.id), onClick: function (e) { return _this.press(item.id); } },
                item.name,
                " "); })),
            react_1["default"].createElement("div", { className: "headerToggleData" },
                react_1["default"].createElement("img", { src: "../../../../style/pict/l.png" }),
                react_1["default"].createElement("span", null, "Today"),
                react_1["default"].createElement("img", { src: "../../../../style/pict/r.png" }))));
    };
    return HeaderTitle;
}(react_1.Component));
exports["default"] = HeaderTitle;
