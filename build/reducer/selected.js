"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var moment_1 = require("moment");
var TYPE;
(function (TYPE) {
    TYPE["MONTH"] = "month";
    TYPE["DAY"] = "day";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var ACTION;
(function (ACTION) {
    ACTION[ACTION["RESET"] = 0] = "RESET";
    ACTION[ACTION["SET_MONTH"] = 1] = "SET_MONTH";
    ACTION[ACTION["SET_DAY"] = 2] = "SET_DAY";
    ACTION[ACTION["TOOGLE"] = 3] = "TOOGLE";
})(ACTION || (ACTION = {}));
var initialState = {
    selected: TYPE.MONTH,
    date: moment_1["default"]()
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, date = action.date, selected = action.selected;
    switch (type) {
        case ACTION.RESET:
        case ACTION.SET_DAY:
        case ACTION.SET_MONTH:
            return { date: date, selected: selected };
        case ACTION.TOOGLE:
            return { date: state.date, selected: state.selected === TYPE.DAY ? TYPE.MONTH : TYPE.DAY };
        default:
            return state;
    }
}
var store = redux_1.createStore(reducer);
// Mutations
store.reset = function () {
    store.dispatch({
        type: ACTION.RESET,
        selected: TYPE.MONTH,
        date: moment_1["default"]()
    });
};
store.setMonth = function (date) {
    store.dispatch({
        type: ACTION.SET_MONTH,
        selected: TYPE.MONTH,
        date: date
    });
};
store.setDay = function (date) {
    store.dispatch({
        type: ACTION.SET_DAY,
        selected: TYPE.DAY,
        date: date
    });
};
store.toogle = function () {
    store.dispatch({
        type: ACTION.TOOGLE
    });
};
exports["default"] = store;
