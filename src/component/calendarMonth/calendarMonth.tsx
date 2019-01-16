import React, { Component } from "react";
import CalendarBody from "./calendarBody/calendarBody";

export default class CalendarMonth extends Component {
	render() {
		return (
			<div className="calendarMonth">
				<CalendarBody />
			</div>
		);
	}
}
