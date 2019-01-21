import React, { Component } from "react";
import HeaderButtons from "./headerButtons/headerButtons";
import HeaderTitles from "./headerTitle/headerTitle";


class CalendarHeader extends Component {
	render() {
		return (
			<div className="calendarHeader">
				<HeaderButtons />
				<HeaderTitles />
			</div>
		);
	}
}

export default CalendarHeader;
