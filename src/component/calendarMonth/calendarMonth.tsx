import React, { Component } from "react";
import CalendarBody from "./calendarBody/calendarBody";
import HeaderWeekDays from "../headerWeekDays/headerWeekDays";

export default class CalendarMonth extends Component {
	render() {
		return (
			<div>
				<HeaderWeekDays/>
			<div className="calendarMonth">
				<CalendarBody />
			</div>
			</div>
			
		);
	}
}
