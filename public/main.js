"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var Reducer = _interopRequireWildcard(require("./reducer/reducer"));

var _calendarMonth = _interopRequireDefault(require("./component/calendarMonth/calendarMonth"));

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
      return _react.default.createElement("div", null, _react.default.createElement(_calendarMonth.default, null), _react.default.createElement("br", null));
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
        // if (item.tenSecond < 1)
        //   throw Error("Property 'tenSecond' can't be less than 1.");
        // if (item.tenSecond > 18)
        //   throw Error("Property 'tenSecond' can't be more than 18.");
        if (item.dateStart < 1) throw Error("Property 'hourStart' can't be less than 1.");
        if (item.dateStart > 24) throw Error("Property 'hourStart' can't be more than 24.");
        if (item.dateFinish < 1) throw Error("Property 'hourFinish' can't be less than 1.");
        if (item.dateFinish > 24) throw Error("Property 'hourFinish' can't be more than 24.");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "times", ['00:00:00', '00:00:10', '00:00:20', '00:00:30', '00:00:40', '00:00:50', '00:01:00', '00:01:10', '00:01:20', '00:01:30', '00:01:40', '00:01:50', '00:02:00', '00:02:10', '00:02:20', '00:02:30', '00:02:40', '00:02:50', '00:03:00']);

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
  }

  _createClass(CalendarBodySection, [{
    key: "press",
    value: function press(id, e) {
      this.setState({
        selectedId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "calendarBodySection"
      }, _react.default.createElement("div", {
        className: this.state.selectedId == this.props.day ? "day calendarDayActive" : "day",
        onClick: function onClick(e) {
          return _this2.press(_this2.props.day, e);
        }
      }, this.props.day), _react.default.createElement(_sectionTask.default, null));
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
      selectedId: 15,
      isOpened: false
    };
    return _this;
  }

  _createClass(SectionTask, [{
    key: "press",
    value: function press(id, e) {
      this.setState({
        selectedId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cheked = this.state.selectedId;
      var maxLength = 4;
      return _react.default.createElement("div", {
        className: "allSectionTasks"
      }, this.sections.map(function (item, index) {
        if (index < maxLength) {
          return _react.default.createElement("div", null, _react.default.createElement("div", {
            key: item.id,
            className: "sectionTaskItem",
            onClick: function onClick(e) {
              return _this2.press(item.id, e);
            }
          }, item.name));
        } else if (index > maxLength) {
          return null;
        } else {}
      }), _react.default.createElement("div", {
        className: this.sections.length > maxLength ? "hoveredTask" : "hoveredTask hide"
      }, this.sections.length - maxLength, " more..."));
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

var _calendarDayData = _interopRequireDefault(require("../../../../../../data/calendarDayData"));

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

var SectionTaskDescription =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionTaskDescription, _Component);

  //private myCompany: ICompany = this.companies.map((el: ICompany, index: number, arr: ICompany[]) => el);
  function SectionTaskDescription(props) {
    var _this;

    _classCallCheck(this, SectionTaskDescription);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionTaskDescription).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "companies", _calendarDayData.default);

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
      return _react.default.createElement("div", null, this.companies.map(function (el) {
        _react.default.createElement("div", {
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
        }, el.textsecond));
      }));
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
  dateStart: 1546948800,
  dateFinish: 1547078399,
  name: "Coca-Cola",
  author: "BatMan",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 2,
  dateStart: 1547078400,
  dateFinish: 1547294400,
  name: "Pepsi",
  author: "BatMan",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 3,
  dateStart: 1548028800,
  dateFinish: 1548072000,
  name: "7up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 4,
  dateStart: 1548079200,
  dateFinish: 1548079800,
  name: "7up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 5,
  dateStart: 1548075600,
  dateFinish: 1548077400,
  name: "7up",
  author: "PacBack",
  textfirst: "Some Text Some Text",
  textsecond: "Some Text Some Text"
}, {
  id: 6,
  dateStart: 1548108000,
  dateFinish: 1548111600,
  name: "7up",
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
