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
// interface IState {
//   isChecked: boolean;
// }
var BtnsQuickCompaign = /** @class */ (function (_super) {
    __extends(BtnsQuickCompaign, _super);
    function BtnsQuickCompaign() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    BtnsQuickCompaign.prototype.press = function (e) {
        this.setState({
            isOpen: true
        });
        console.log(name);
    };
    BtnsQuickCompaign.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        return (react_1["default"].createElement("input", { type: "button", id: "quickCompaign", className: isOpen == true ? "quickCompaignHide" : "quickCompaign", value: "+ Quick compaign", onClick: function (e) { return _this.press(e); } }));
    };
    return BtnsQuickCompaign;
}(react_1.Component));
exports["default"] = BtnsQuickCompaign;
