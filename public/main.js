"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var Reducer = _interopRequireWildcard(require("./reducer/reducer"));

var _calendarMonth = _interopRequireDefault(require("./component/calendarMonth/calendarMonth"));

var _calendarDay = _interopRequireDefault(require("./component/calendarDay/calendarDay"));

require("./index.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", Reducer.store.getState());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unsubscribe", function () {});

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = Reducer.store.subscribe(function () {
        _this2.setState(Reducer.store.getState());
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_calendarMonth.default, null), _react.default.createElement("br", null), _react.default.createElement(_calendarDay.default, null));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _calendarDayBody = _interopRequireDefault(require("../calendarDay/calendarDayBody/calendarDayBody"));

var _calendarDayData = _interopRequireDefault(require("../../data/calendarDayData"));

require("../../index.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarDay =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarDay, _Component);

  function CalendarDay(props) {
    _classCallCheck(this, CalendarDay);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarDay).call(this, props));
  }

  _createClass(CalendarDay, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarDay"
      }, _react.default.createElement(_calendarDayBody.default, {
        data: _calendarDayData.default
      }));
    }
  }]);

  return CalendarDay;
}(_react.Component);

var _default = CalendarDay;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _calendarDayTask = _interopRequireDefault(require("./calendarDayTask/calendarDayTask"));

var _calendarDayTimer = _interopRequireDefault(require("./calendarDayTimer/calendarDayTimer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarDayBody =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarDayBody, _Component);

  function CalendarDayBody(props) {
    var _this;

    _classCallCheck(this, CalendarDayBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarDayBody).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hours", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    _this.validator(props.data);

    _this.state = {
      taskSelectedId: 2
    };
    return _this;
  }

  _createClass(CalendarDayBody, [{
    key: "validator",
    value: function validator(data) {
      data.forEach(function (item) {
        if (item.dateStart > item.dateFinish) throw Error("Property 'hourStart' can't be more than property 'hourFinish'.");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarDayBody"
      }, _react.default.createElement(_calendarDayTimer.default, null), _react.default.createElement("div", {
        className: "body"
      }, _react.default.createElement("div", {
        className: "hours"
      }, this.hours.map(function (e) {
        return _react.default.createElement("div", {
          className: "hour"
        }, e);
      })), _react.default.createElement("div", {
        className: "body-empty"
      }), _react.default.createElement("div", {
        className: "calendarDayTasks"
      }, this.props.data.map(function (el) {
        return _react.default.createElement(_calendarDayTask.default, {
          key: el.id,
          data: el
        });
      }))));
    }
  }]);

  return CalendarDayBody;
}(_react.Component);

var _default = CalendarDayBody;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarDayTask =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarDayTask, _Component);

  function CalendarDayTask(props) {
    _classCallCheck(this, CalendarDayTask);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarDayTask).call(this, props));
  }

  _createClass(CalendarDayTask, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarDayTask-full"
      }, _react.default.createElement("div", null, this.props.data.name), _react.default.createElement("div", null, this.props.data.author));
    }
  }]);

  return CalendarDayTask;
}(_react.Component);

var _default = CalendarDayTask;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarDayTimer =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarDayTimer, _Component);

  function CalendarDayTimer(props) {
    var _this;

    _classCallCheck(this, CalendarDayTimer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarDayTimer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "times", ['00:00:00', '00:00:10', '00:00:20', '00:00:30', '00:00:40', '00:00:50', '00:01:00', '00:01:10', '00:01:20', '00:01:30', '00:01:40', '00:01:50', '00:02:00', '00:02:10', '00:02:20', '00:02:30', '00:02:40', '00:02:50', '00:03:00', '00:03:20', '00:03:30', '00:03:20', '00:03:30', '00:03:30', '00:03:40', '00:03:50', '00:04:00', '00:04:10', '00:04:20', '00:04:30', '00:04:40', '00:04:50', '00:05:00', '00:05:10', '00:05:20', '00:05:30', '00:05:40', '00:05:50', '00:06:00', '00:06:10', '00:06:20', '00:06:30', '00:06:40', '00:06:50', '00:07:00', '00:07:10', '00:07:20', '00:07:30', '00:07:40', '00:07:50', '00:08:00', '00:08:10', '00:08:20', '00:08:30', '00:08:40', '00:08:50', '00:09:00', '00:09:10', '00:09:20', '00:09:30', '00:09:40', '00:09:50', '00:10:00', '00:10:10', '00:10:20', '00:10:30', '00:10:40', '00:10:50', '00:11:00', '00:11:10', '00:11:20', '00:11:30', '00:11:40', '00:11:50', '00:12:00', '00:12:10', '00:12:20', '00:12:30', '00:12:40', '00:12:50', '00:13:00', '00:13:10', '00:13:20', '00:13:30', '00:13:40', '00:13:50', '00:14:00', '00:14:10', '00:14:20', '00:14:30', '00:14:40', '00:14:50', '00:15:00', '00:15:10', '00:15:20', '00:15:30', '00:15:40', '00:15:50', '00:16:00', '00:16:10', '00:16:20', '00:16:30', '00:16:40', '00:16:50', '00:17:00', '00:17:10', '00:17:20', '00:17:30', '00:17:40', '00:17:50', '00:18:00', '00:18:10', '00:18:20', '00:18:30', '00:18:40', '00:18:50', '00:19:00', '00:19:10', '00:19:20', '00:19:30', '00:19:40', '00:19:50', '00:20:00', '00:20:10', '00:20:20', '00:20:30', '00:20:40', '00:20:50', '00:21:00', '00:21:10', '00:21:20', '00:21:30', '00:21:40', '00:21:50', '00:22:00', '00:22:10', '00:22:20', '00:22:30', '00:22:40', '00:22:50', '00:23:00', '00:23:10', '00:23:20', '00:23:30', '00:23:40', '00:23:50', '00:24:00', '00:24:10', '00:24:20', '00:24:30', '00:24:40', '00:24:50', '00:25:00', '00:25:10', '00:25:20', '00:25:30', '00:25:40', '00:25:50', '00:26:00', '00:26:10', '00:26:20', '00:26:30', '00:26:40', '00:26:50', '00:27:00', '00:27:10', '00:27:20', '00:27:30', '00:27:40', '00:27:50', '00:28:00', '00:28:10', '00:28:20', '00:28:30', '00:28:40', '00:28:50', '00:29:00', '00:29:10', '00:29:20', '00:29:30', '00:29:40', '00:29:50', '00:30:00', '00:30:10', '00:30:20', '00:30:30', '00:30:40', '00:30:50', '00:31:00', '00:31:10', '00:31:20', '00:31:30', '00:31:40', '00:31:50', '00:32:00', '00:32:10', '00:32:20', '00:32:30', '00:32:40', '00:32:50', '00:33:00', '00:33:10', '00:33:20', '00:33:30', '00:33:40', '00:33:50', '00:34:00', '00:34:10', '00:34:20', '00:34:30', '00:34:40', '00:34:50', '00:35:00', '00:35:10', '00:35:20', '00:35:30', '00:35:40', '00:35:50', '00:36:00', '00:36:10', '00:36:20', '00:36:30', '00:36:40', '00:36:50', '00:37:00', '00:37:10', '00:37:20', '00:37:30', '00:37:40', '00:37:50', '00:38:00', '00:38:10', '00:38:20', '00:38:30', '00:38:40', '00:38:50', '00:39:00', '00:39:10', '00:39:20', '00:39:30', '00:39:40', '00:39:50', '00:40:00', '00:40:10', '00:40:20', '00:40:30', '00:40:40', '00:40:50', '00:41:00', '00:41:10', '00:41:20', '00:41:30', '00:41:40', '00:41:50', '00:42:00', '00:42:10', '00:42:20', '00:42:30', '00:42:40', '00:42:50', '00:43:00', '00:43:10', '00:43:20', '00:43:30', '00:43:40', '00:43:50', '00:44:00', '00:44:10', '00:44:20', '00:44:30', '00:44:40', '00:44:50', '00:45:00', '00:45:10', '00:45:20', '00:45:30', '00:45:40', '00:45:50', '00:46:00', '00:46:10', '00:46:20', '00:46:30', '00:46:40', '00:46:50', '00:47:00', '00:47:10', '00:47:20', '00:47:30', '00:47:40', '00:47:50', '00:48:00', '00:48:10', '00:48:20', '00:48:30', '00:48:40', '00:48:50', '00:49:00', '00:49:10', '00:49:20', '00:49:30', '00:49:40', '00:49:50', '00:50:00', '00:50:10', '00:50:20', '00:50:30', '00:50:40', '00:50:50', '00:51:00', '00:51:10', '00:51:20', '00:51:30', '00:51:40', '00:51:50', '00:52:00', '00:52:10', '00:52:20', '00:52:30', '00:52:40', '00:52:50', '00:53:00', '00:53:10', '00:53:20', '00:53:30', '00:53:40', '00:53:50', '00:54:00', '00:54:10', '00:54:20', '00:54:30', '00:54:40', '00:54:50', '00:55:00', '00:55:10', '00:55:20', '00:55:30', '00:55:40', '00:55:50', '00:56:00', '00:56:10', '00:56:20', '00:56:30', '00:56:40', '00:56:50', '00:57:00', '00:57:10', '00:57:20', '00:57:30', '00:57:40', '00:57:50', '00:58:00', '00:58:10', '00:58:20', '00:58:30', '00:58:40', '00:58:50', '00:59:00', '00:59:10', '00:59:20', '00:59:30', '00:59:40', '00:59:50', '01:00:00']);

    return _this;
  }

  _createClass(CalendarDayTimer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "aside"
      }, _react.default.createElement("div", {
        className: "asideHour"
      }, "hour"), _react.default.createElement("div", {
        className: "asideAllday"
      }, "allday"), this.times.map(function (e) {
        return _react.default.createElement("div", {
          className: "asideTimeItem"
        }, e);
      }));
    }
  }]);

  return CalendarDayTimer;
}(_react.Component);

var _default = CalendarDayTimer;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _sectionTask = _interopRequireDefault(require("./sectionEvent/sectionTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarBodySection =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarBodySection, _Component);

  function CalendarBodySection(props) {
    var _this;

    _classCallCheck(this, CalendarBodySection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarBodySection).call(this, props));
    _this.state = {
      selectedId: parseInt((0, _moment.default)().format("DD"))
    };
    return _this;
  } // press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
  //   this.setState({ selectedId: id });
  // }


  _createClass(CalendarBodySection, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarBodySection"
      }, _react.default.createElement("div", {
        className: this.state.selectedId == this.props.day ? "day calendarDayActive" : "day" //onClick={e => this.press(this.props.day, e)}

      }, this.props.day), _react.default.createElement(_sectionTask.default, {
        key: this.props.day,
        day: this.props.day,
        month: this.props.month,
        year: this.props.year
      }));
    }
  }]);

  return CalendarBodySection;
}(_react.Component);

var _default = CalendarBodySection;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _sectionTasktDescription = _interopRequireDefault(require("./sectionTaskDescriptoin/sectionTasktDescription"));

var _calendarDayData = _interopRequireDefault(require("../../../../../data/calendarDayData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SectionTask =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionTask, _Component);

  function SectionTask(props) {
    var _this;

    _classCallCheck(this, SectionTask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionTask).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sections", _calendarDayData.default);

    _this.state = {
      selectedId: 0,
      isOpened: false
    };
    return _this;
  }

  _createClass(SectionTask, [{
    key: "press",
    value: function press(id, e) {
      this.setState({
        selectedId: id,
        isOpened: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sectionsFiltered = this.getFilteredSection();
      var isOpened = this.state.isOpened;
      var cheked = this.state.selectedId;
      var maxLength = 4;
      return _react.default.createElement("div", {
        className: "allSectionTasks"
      }, sectionsFiltered.map(function (item, index) {
        if (index < maxLength) {
          return _react.default.createElement("div", null, _react.default.createElement("div", {
            key: item.id,
            className: item.id == cheked ? "sectionTaskItem pressed" : "sectionTaskItem",
            onClick: function onClick(e) {
              return _this2.press(item.id, e);
            }
          }, item.name, _react.default.createElement(_sectionTasktDescription.default, {
            key: item.id,
            id: item.id,
            name: item.name,
            author: item.author,
            textfirst: item.textfirst,
            textsecond: item.textsecond,
            dateStart: item.dateStart,
            dateFinish: item.dateFinish,
            className: isOpened ? "displayedSectionTaskDescription" : "hideSectionTaskDescription"
          })));
        } else if (index > maxLength) {
          return null;
        } else {}
      }), _react.default.createElement("div", {
        className: sectionsFiltered.length > maxLength ? "hoveredTask" : "hoveredTask hide"
      }, sectionsFiltered.length - maxLength, " more...")); //</div>
    }
  }, {
    key: "getFilteredSection",
    value: function getFilteredSection() {
      var _this3 = this;

      var result = [];
      this.sections.forEach(function (item) {
        var dateStart = new Date(item.dateStart * 1000); // Конвертация из unix_timestamp

        dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
        var dateFinish = new Date(item.dateFinish * 1000); // Конвертация из unix_timestamp

        dateFinish = new Date(dateFinish.getFullYear(), dateFinish.getMonth(), dateFinish.getDate());
        dateFinish.setDate(dateFinish.getDate() + 1);
        var dateCurrent = new Date(
        /*this.props.year*/
        2019,
        /*this.props.month*/
        0, _this3.props.day);
        if (dateCurrent >= dateStart && dateCurrent < dateFinish) result.push(item);
      });
      return result;
    }
  }]);

  return SectionTask;
}(_react.Component);

var _default = SectionTask;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

;

var SectionTaskDescription =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionTaskDescription, _Component);

  function SectionTaskDescription(props) {
    var _this;

    _classCallCheck(this, SectionTaskDescription);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionTaskDescription).call(this, props));
    _this.state = {
      selectedId: 15
    };
    return _this;
  }

  _createClass(SectionTaskDescription, [{
    key: "press",
    value: function press(id, e) {
      this.setState({
        selectedId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var el = this.props;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "taskDescription"
      }, _react.default.createElement("div", {
        className: "taskHeader"
      }, _react.default.createElement("div", {
        className: "taskHeaderDiv"
      }, _react.default.createElement("div", {
        className: "taskCompanyName"
      }, el.name), _react.default.createElement("div", {
        className: "taskUserName"
      }, el.author)), _react.default.createElement("div", {
        className: "taskBtn"
      })), _react.default.createElement("div", {
        className: "taskDate"
      }, _react.default.createElement("div", {
        className: "startDate"
      }, el.dateStart, " to"), _react.default.createElement("div", {
        className: "finsshDate"
      }, el.dateFinish)), _react.default.createElement("div", {
        className: "taskDescrText"
      }, el.textfirst), _react.default.createElement("div", {
        className: "taskDescrText"
      }, el.textsecond)));
    }
  }]);

  return SectionTaskDescription;
}(_react.Component);

var _default = SectionTaskDescription;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _calendarBodySection = _interopRequireDefault(require("./calenarBodySection/calendarBodySection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarBody =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarBody, _Component);

  function CalendarBody() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getWeek", function (week) {
      return week.map(_this._getSection);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getSection", function (day) {
      return _react.default.createElement(_calendarBodySection.default, {
        key: day,
        day: day
      });
    });

    return _this;
  }

  _createClass(CalendarBody, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarBody"
      }, this.props.days.map(this._getWeek));
    }
  }]);

  return CalendarBody;
}(_react.Component);

var _default = CalendarBody;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _headerButtons = _interopRequireDefault(require("./headerButtons/headerButtons"));

var _headerTitle = _interopRequireDefault(require("./headerTitle/headerTitle"));

var _headerWeekDays = _interopRequireDefault(require("./headerWeekDays/headerWeekDays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarHeader, _Component);

  function CalendarHeader(props) {
    _classCallCheck(this, CalendarHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarHeader).call(this, props));
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "calendarHeader"
      }, _react.default.createElement(_headerButtons.default, null), _react.default.createElement(_headerTitle.default, null), _react.default.createElement(_headerWeekDays.default, null));
    }
  }]);

  return CalendarHeader;
}(_react.Component);

var _default = CalendarHeader;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderButtons =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderButtons, _Component);

  function HeaderButtons(props) {
    var _this;

    _classCallCheck(this, HeaderButtons);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderButtons).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buttons", []);

    _this.state = {
      buttonSelectedId: 2
    };

    _this.buttons.push({
      id: 1,
      name: "Properties"
    }, {
      id: 2,
      name: "Calendar"
    }, {
      id: 3,
      name: "Logs"
    });

    return _this;
  }

  _createClass(HeaderButtons, [{
    key: "press",
    value: function press(id, e) {
      this.setState({
        buttonSelectedId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "headerButtons"
      }, this.buttons.map(function (item) {
        return _react.default.createElement("input", {
          key: item.id,
          className: _this2.state.buttonSelectedId == item.id ? "clicked" : "",
          type: "button",
          name: String(item.id),
          value: item.name,
          onClick: function onClick(e) {
            return _this2.press(item.id, e);
          }
        });
      }));
    }
  }]);

  return HeaderButtons;
}(_react.Component);

var _default = HeaderButtons;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _DIMENSION = ["Day", "Month"];

var HeaderTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderTitle, _Component);

  function HeaderTitle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      typeDateSelectedIndex: 1,
      date: new Date()
    });

    return _this;
  }

  _createClass(HeaderTitle, [{
    key: "press",
    value: function press(id) {
      this.setState({
        typeDateSelectedIndex: id
      });
    }
  }, {
    key: "left",
    value: function left() {
      var date = this.state.date;

      switch (this.state.typeDateSelectedIndex) {
        case 0:
          // Day
          date.setDate(date.getDate() - 1);
          this.setState({
            date: date
          });
          break;

        case 1:
          // Month
          date.setMonth(date.getMonth() - 1);
          this.setState({
            date: date
          });
          break;

        default:
          return;
      }
    }
  }, {
    key: "right",
    value: function right() {
      var date = this.state.date;

      switch (this.state.typeDateSelectedIndex) {
        case 0:
          // Day
          date.setDate(date.getDate() + 1);
          this.setState({
            date: date
          });
          break;

        case 1:
          // Month
          date.setMonth(date.getMonth() + 1);
          this.setState({
            date: date
          });
          break;

        default:
          return;
      }
    }
  }, {
    key: "today",
    value: function today() {
      var date = new Date();
      this.setState({
        date: date
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "headerTitle"
      }, this._getDateHTMLElement(), _react.default.createElement("ul", {
        className: "headerTypeData"
      }, _DIMENSION.map(this._getDimension.bind(this))), _react.default.createElement("div", {
        className: "headerToggleData"
      }, _react.default.createElement("span", null, _react.default.createElement("img", {
        src: "./pict/l.png",
        onClick: function onClick() {
          return _this2.left();
        }
      })), _react.default.createElement("span", {
        onClick: function onClick() {
          return _this2.today();
        }
      }, "Today"), _react.default.createElement("span", null, _react.default.createElement("img", {
        src: "./pict/r.png",
        onClick: function onClick() {
          return _this2.right();
        }
      }))));
    }
  }, {
    key: "_getDimension",
    value: function _getDimension(item, index) {
      var isCurrent = this.state.typeDateSelectedIndex === index;
      var className = isCurrent ? "clicked" : "";
      var onClick = isCurrent ? undefined : this.press.bind(this, index);
      return _react.default.createElement("li", {
        key: item,
        className: className,
        onClick: onClick
      }, item);
    }
  }, {
    key: "_getDateHTMLElement",
    value: function _getDateHTMLElement() {
      var date = this.state.date;
      var currentDateIndex = this.state.typeDateSelectedIndex;
      var dayElement = currentDateIndex == 0 ? _react.default.createElement("span", null, date.getDate()) : null;
      return _react.default.createElement("div", {
        className: "headerData"
      }, dayElement, _react.default.createElement("span", {
        className: "headerDateMonth"
      }, (0, _moment.default)(date).format("MMMM")), _react.default.createElement("span", {
        className: "headerDateYear"
      }, date.getFullYear()));
    }
  }]);

  return HeaderTitle;
}(_react.Component);

var _default = HeaderTitle;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HeaderWeekDays =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderWeekDays, _Component);

  function HeaderWeekDays() {
    _classCallCheck(this, HeaderWeekDays);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderWeekDays).apply(this, arguments));
  }

  _createClass(HeaderWeekDays, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", {
        className: "headerWeekDays"
      }, _react.default.createElement("li", null, "Sun"), _react.default.createElement("li", null, "Mon"), _react.default.createElement("li", null, "Tue"), _react.default.createElement("li", null, "Wen"), _react.default.createElement("li", null, "Thu"), _react.default.createElement("li", null, "Fri"), _react.default.createElement("li", null, "Sat"));
    }
  }]);

  return HeaderWeekDays;
}(_react.Component);

exports.default = HeaderWeekDays;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _calendarBody = _interopRequireDefault(require("./calendarBody/calendarBody"));

var _calendarHeader = _interopRequireDefault(require("./calendarHeader/calendarHeader"));

var _storage = require("./../../data/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarMonth =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarMonth, _Component);

  function CalendarMonth() {
    _classCallCheck(this, CalendarMonth);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonth).apply(this, arguments));
  }

  _createClass(CalendarMonth, [{
    key: "render",
    value: function render() {
      var d = (0, _storage.month)(6);
      return _react.default.createElement("div", {
        className: "calendarMonth"
      }, _react.default.createElement(_calendarHeader.default, null), _react.default.createElement(_calendarBody.default, {
        days: d
      }));
    }
  }]);

  return CalendarMonth;
}(_react.Component);

var _default = CalendarMonth;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var calendarDayData = [{
  id: 1,
  dateStart: 1546300800,
  // 01-01-2019
  dateFinish: 1548115200,
  // 22-01-2019
  name: "Coca-Cola",
  author: "BatMan",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 2,
  dateStart: 1547078400,
  // 10-01-2019
  dateFinish: 1547294400,
  // 12-01-2019
  name: "Pepsi",
  author: "BatMan",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 3,
  dateStart: 1548028800,
  // 21-01-2019
  dateFinish: 1548072000,
  // 21-01-2019
  name: "7up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 4,
  dateStart: 1548079200,
  dateFinish: 1548079800,
  name: "8up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 5,
  dateStart: 1548075600,
  dateFinish: 1548077400,
  name: "9up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 6,
  dateStart: 1548108000,
  dateFinish: 1548111600,
  name: "10up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 7,
  dateStart: 1548090000,
  dateFinish: 1548090060,
  name: "10up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 8,
  dateStart: 1548064980,
  dateFinish: 1548065040,
  name: "10up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 9,
  dateStart: 1548100800,
  dateFinish: 1548100820,
  name: "10up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}];
var _default = calendarDayData;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var dataDay = [{
  "id": 0,
  "day": 1
}, {
  "id": 1,
  "day": 1
}, {
  "id": 2,
  "day": 1
}, {
  "id": 3,
  "day": 1
}, {
  "id": 4,
  "day": 1
}, {
  "id": 5,
  "day": 1
}, {
  "id": 6,
  "day": 1
}, {
  "id": 7,
  "day": 1
}, {
  "id": 8,
  "day": 1
}, {
  "id": 9,
  "day": 1
}, {
  "id": 10,
  "day": 1
}, {
  "id": 11,
  "day": 1
}, {
  "id": 12,
  "day": 1
}, {
  "id": 13,
  "day": 1
}, {
  "id": 14,
  "day": 1
}, {
  "id": 15,
  "day": 1
}, {
  "id": 16,
  "day": 1
}, {
  "id": 17,
  "day": 1
}, {
  "id": 18,
  "day": 1
}, {
  "id": 19,
  "day": 1
}, {
  "id": 20,
  "day": 1
}, {
  "id": 21,
  "day": 1
}, {
  "id": 22,
  "day": 1
}, {
  "id": 23,
  "day": 1
}, {
  "id": 24,
  "day": 1
}, {
  "id": 25,
  "day": 1
}, {
  "id": 26,
  "day": 1
}, {
  "id": 27,
  "day": 1
}, {
  "id": 28,
  "day": 1
}, {
  "id": 29,
  "day": 1
}, {
  "id": 30,
  "day": 1
}, {
  "id": 31,
  "day": 1
}, {
  "id": 32,
  "day": 1
}, {
  "id": 33,
  "day": 1
}, {
  "id": 34,
  "day": 1
}, {
  "id": 35,
  "day": 1
}, {
  "id": 36,
  "day": 1
}, {
  "id": 37,
  "day": 1
}, {
  "id": 38,
  "day": 1
}, {
  "id": 39,
  "day": 1
}, {
  "id": 40,
  "day": 1
}, {
  "id": 41,
  "day": 1
}];
var _default = dataDay;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timers = [{
  id: 1,
  hour: '00:00 AM',
  taskType: 'Adver 2'
}, {
  id: 2,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 3,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 4,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 5,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 6,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 7,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 8,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 9,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 10,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 11,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 12,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 13,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 14,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 15,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 16,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 17,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 18,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 19,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 20,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 21,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 22,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 23,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}, {
  id: 24,
  hour: '01:00 AM',
  taskType: 'Adver 2'
}];
var _default = timers;
exports.default = _default;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _moment = _interopRequireDefault(require("moment"));

var _IExternal = require("./type/IExternal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateStart = _moment.default.unix(_IExternal._campaign.periodStart);

var dateEnd = _moment.default.unix(_IExternal._campaign.periodEnd);

console.log(dateStart.diff(dateEnd, "hours"));
console.log((0, _moment.default)().format("DD"));

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById("root"));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var result = {};
  return result;
};

var store = (0, _redux.createStore)(reducer);
exports.store = store;
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
