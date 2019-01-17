"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var moment_1 = require("moment");
var storage_1 = require("./../data/storage");
var selected_1 = require("./selected");
var ACTION;
(function (ACTION) {
    ACTION[ACTION["SET"] = 0] = "SET";
})(ACTION || (ACTION = {}));
function reducer(state, action) {
    return { data: storage_1.getMonth(moment_1["default"](selected_1["default"].getState().date).format("MM")) };
}
var store = redux_1.createStore(reducer);
selected_1["default"].subscribe(function () {
    store.dispatch({ type: ACTION.SET });
});
exports["default"] = store;
