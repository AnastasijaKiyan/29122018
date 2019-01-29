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
var calendarDayTask_1 = require("./calendarDayTask/calendarDayTask");
var CalendarDayBody = /** @class */ (function (_super) {
    __extends(CalendarDayBody, _super);
    function CalendarDayBody(props) {
        var _this = _super.call(this, props) || this;
        _this.hours = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ];
        _this.times = [
            "00:00:00",
            "00:00:10",
            "00:00:20",
            "00:00:30",
            "00:00:40",
            "00:00:50",
            "00:01:00",
            "00:01:10",
            "00:01:20",
            "00:01:30",
            "00:01:40",
            "00:01:50",
            "00:02:00",
            "00:02:10",
            "00:02:20",
            "00:02:30",
            "00:02:40",
            "00:02:50",
            "00:03:00",
            "00:03:20",
            "00:03:30",
            "00:03:20",
            "00:03:30",
            "00:03:30",
            "00:03:40",
            "00:03:50",
            "00:04:00",
            "00:04:10",
            "00:04:20",
            "00:04:30",
            "00:04:40",
            "00:04:50",
            "00:05:00",
            "00:05:10",
            "00:05:20",
            "00:05:30",
            "00:05:40",
            "00:05:50",
            "00:06:00",
            "00:06:10",
            "00:06:20",
            "00:06:30",
            "00:06:40",
            "00:06:50",
            "00:07:00",
            "00:07:10",
            "00:07:20",
            "00:07:30",
            "00:07:40",
            "00:07:50",
            "00:08:00",
            "00:08:10",
            "00:08:20",
            "00:08:30",
            "00:08:40",
            "00:08:50",
            "00:09:00",
            "00:09:10",
            "00:09:20",
            "00:09:30",
            "00:09:40",
            "00:09:50",
            "00:10:00",
            "00:10:10",
            "00:10:20",
            "00:10:30",
            "00:10:40",
            "00:10:50",
            "00:11:00",
            "00:11:10",
            "00:11:20",
            "00:11:30",
            "00:11:40",
            "00:11:50",
            "00:12:00",
            "00:12:10",
            "00:12:20",
            "00:12:30",
            "00:12:40",
            "00:12:50",
            "00:13:00",
            "00:13:10",
            "00:13:20",
            "00:13:30",
            "00:13:40",
            "00:13:50",
            "00:14:00",
            "00:14:10",
            "00:14:20",
            "00:14:30",
            "00:14:40",
            "00:14:50",
            "00:15:00",
            "00:15:10",
            "00:15:20",
            "00:15:30",
            "00:15:40",
            "00:15:50",
            "00:16:00",
            "00:16:10",
            "00:16:20",
            "00:16:30",
            "00:16:40",
            "00:16:50",
            "00:17:00",
            "00:17:10",
            "00:17:20",
            "00:17:30",
            "00:17:40",
            "00:17:50",
            "00:18:00",
            "00:18:10",
            "00:18:20",
            "00:18:30",
            "00:18:40",
            "00:18:50",
            "00:19:00",
            "00:19:10",
            "00:19:20",
            "00:19:30",
            "00:19:40",
            "00:19:50",
            "00:20:00",
            "00:20:10",
            "00:20:20",
            "00:20:30",
            "00:20:40",
            "00:20:50",
            "00:21:00",
            "00:21:10",
            "00:21:20",
            "00:21:30",
            "00:21:40",
            "00:21:50",
            "00:22:00",
            "00:22:10",
            "00:22:20",
            "00:22:30",
            "00:22:40",
            "00:22:50",
            "00:23:00",
            "00:23:10",
            "00:23:20",
            "00:23:30",
            "00:23:40",
            "00:23:50",
            "00:24:00",
            "00:24:10",
            "00:24:20",
            "00:24:30",
            "00:24:40",
            "00:24:50",
            "00:25:00",
            "00:25:10",
            "00:25:20",
            "00:25:30",
            "00:25:40",
            "00:25:50",
            "00:26:00",
            "00:26:10",
            "00:26:20",
            "00:26:30",
            "00:26:40",
            "00:26:50",
            "00:27:00",
            "00:27:10",
            "00:27:20",
            "00:27:30",
            "00:27:40",
            "00:27:50",
            "00:28:00",
            "00:28:10",
            "00:28:20",
            "00:28:30",
            "00:28:40",
            "00:28:50",
            "00:29:00",
            "00:29:10",
            "00:29:20",
            "00:29:30",
            "00:29:40",
            "00:29:50",
            "00:30:00",
            "00:30:10",
            "00:30:20",
            "00:30:30",
            "00:30:40",
            "00:30:50",
            "00:31:00",
            "00:31:10",
            "00:31:20",
            "00:31:30",
            "00:31:40",
            "00:31:50",
            "00:32:00",
            "00:32:10",
            "00:32:20",
            "00:32:30",
            "00:32:40",
            "00:32:50",
            "00:33:00",
            "00:33:10",
            "00:33:20",
            "00:33:30",
            "00:33:40",
            "00:33:50",
            "00:34:00",
            "00:34:10",
            "00:34:20",
            "00:34:30",
            "00:34:40",
            "00:34:50",
            "00:35:00",
            "00:35:10",
            "00:35:20",
            "00:35:30",
            "00:35:40",
            "00:35:50",
            "00:36:00",
            "00:36:10",
            "00:36:20",
            "00:36:30",
            "00:36:40",
            "00:36:50",
            "00:37:00",
            "00:37:10",
            "00:37:20",
            "00:37:30",
            "00:37:40",
            "00:37:50",
            "00:38:00",
            "00:38:10",
            "00:38:20",
            "00:38:30",
            "00:38:40",
            "00:38:50",
            "00:39:00",
            "00:39:10",
            "00:39:20",
            "00:39:30",
            "00:39:40",
            "00:39:50",
            "00:40:00",
            "00:40:10",
            "00:40:20",
            "00:40:30",
            "00:40:40",
            "00:40:50",
            "00:41:00",
            "00:41:10",
            "00:41:20",
            "00:41:30",
            "00:41:40",
            "00:41:50",
            "00:42:00",
            "00:42:10",
            "00:42:20",
            "00:42:30",
            "00:42:40",
            "00:42:50",
            "00:43:00",
            "00:43:10",
            "00:43:20",
            "00:43:30",
            "00:43:40",
            "00:43:50",
            "00:44:00",
            "00:44:10",
            "00:44:20",
            "00:44:30",
            "00:44:40",
            "00:44:50",
            "00:45:00",
            "00:45:10",
            "00:45:20",
            "00:45:30",
            "00:45:40",
            "00:45:50",
            "00:46:00",
            "00:46:10",
            "00:46:20",
            "00:46:30",
            "00:46:40",
            "00:46:50",
            "00:47:00",
            "00:47:10",
            "00:47:20",
            "00:47:30",
            "00:47:40",
            "00:47:50",
            "00:48:00",
            "00:48:10",
            "00:48:20",
            "00:48:30",
            "00:48:40",
            "00:48:50",
            "00:49:00",
            "00:49:10",
            "00:49:20",
            "00:49:30",
            "00:49:40",
            "00:49:50",
            "00:50:00",
            "00:50:10",
            "00:50:20",
            "00:50:30",
            "00:50:40",
            "00:50:50",
            "00:51:00",
            "00:51:10",
            "00:51:20",
            "00:51:30",
            "00:51:40",
            "00:51:50",
            "00:52:00",
            "00:52:10",
            "00:52:20",
            "00:52:30",
            "00:52:40",
            "00:52:50",
            "00:53:00",
            "00:53:10",
            "00:53:20",
            "00:53:30",
            "00:53:40",
            "00:53:50",
            "00:54:00",
            "00:54:10",
            "00:54:20",
            "00:54:30",
            "00:54:40",
            "00:54:50",
            "00:55:00",
            "00:55:10",
            "00:55:20",
            "00:55:30",
            "00:55:40",
            "00:55:50",
            "00:56:00",
            "00:56:10",
            "00:56:20",
            "00:56:30",
            "00:56:40",
            "00:56:50",
            "00:57:00",
            "00:57:10",
            "00:57:20",
            "00:57:30",
            "00:57:40",
            "00:57:50",
            "00:58:00",
            "00:58:10",
            "00:58:20",
            "00:58:30",
            "00:58:40",
            "00:58:50",
            "00:59:00",
            "00:59:10",
            "00:59:20",
            "00:59:30",
            "00:59:40",
            "00:59:50",
            "01:00:00"
        ];
        _this.validator(props.data);
        _this.state = { taskSelectedId: 2 };
        return _this;
    }
    CalendarDayBody.prototype.validator = function (data) {
        data.forEach(function (item) {
            if (item.dateStart > item.dateFinish)
                throw Error("Property 'hourStart' can't be more than property 'hourFinish'.");
        });
    };
    CalendarDayBody.prototype.render = function () {
        var timeNow = new Date();
        var minNow = timeNow.getMinutes();
        var secNow = timeNow.getSeconds();
        return (react_1["default"].createElement("div", { className: "calendarDayBody" },
            react_1["default"].createElement("div", { className: "notScroll" },
                react_1["default"].createElement("div", { className: "hourSection" },
                    react_1["default"].createElement("div", { className: "asideHour" }, "hour"),
                    react_1["default"].createElement("div", { className: "hours" }, this.hours.map(function (e) {
                        return react_1["default"].createElement("div", { className: "hour" }, e);
                    }))),
                react_1["default"].createElement("div", { className: "emptySection" },
                    react_1["default"].createElement("div", { className: "asideAllday" }, "allday"),
                    react_1["default"].createElement("div", { className: "body-empty" }, this.hours.map(function (e) {
                        return react_1["default"].createElement("div", { className: "body-empty-item" });
                    })))),
            react_1["default"].createElement("div", { className: "scroll" },
                react_1["default"].createElement("div", { className: "scrollSection" },
                    react_1["default"].createElement("div", { className: "duration" }, this.times.map(function (e, i) {
                        if (i == minNow * 6 + Math.floor(secNow / 10) + 1) {
                            return react_1["default"].createElement("div", { id: "anchor", className: "asideTimeItem red" }, e);
                        }
                        else {
                            return react_1["default"].createElement("div", { className: "asideTimeItem" }, e);
                        }
                    })),
                    react_1["default"].createElement("div", { className: "calendarDayTasks" },
                        react_1["default"].createElement("div", { className: "calendarDayEmpty" }, this.hours.map(function (e) {
                            return react_1["default"].createElement("div", { className: "calendarDayEmptyItem" });
                        })),
                        react_1["default"].createElement("div", { className: "allDayTasks" }, this.hours.map(function (el) {
                            return react_1["default"].createElement(calendarDayTask_1["default"], null);
                        })))))));
    };
    CalendarDayBody.prototype.componentDidUpdate = function () {
        var element = document.getElementById("anchor");
        if (element == null)
            return;
        var jump = element.getBoundingClientRect().top;
        document.body.scrollTop += jump;
        document.documentElement.scrollTop += jump;
    };
    return CalendarDayBody;
}(react_1.Component));
exports["default"] = CalendarDayBody;
