"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var redux_1 = require("redux");
var ACTION;
(function (ACTION) {
    ACTION[ACTION["OPEN"] = 0] = "OPEN";
    ACTION[ACTION["CLOSE"] = 1] = "CLOSE";
    ACTION[ACTION["RESET"] = 2] = "RESET";
})(ACTION || (ACTION = {}));
var initialState = {
    square: null,
    isOpen: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, square = action.square;
    switch (type) {
        case ACTION.OPEN:
            return { square: square, isOpen: true };
        case ACTION.CLOSE:
        case ACTION.RESET:
        default:
            return __assign({}, initialState);
    }
}
var store = redux_1.createStore(reducer);
store.reset = function () {
    store.dispatch({ type: ACTION.RESET });
};
store.open = function (campaign) {
    store.dispatch({ type: ACTION.OPEN, campaign: campaign });
};
store.close = function () {
    store.dispatch({ type: ACTION.CLOSE });
};
exports["default"] = store;
