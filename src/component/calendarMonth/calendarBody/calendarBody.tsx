import React, { Component } from "react";
import CalendarBodySection from "./calenarBodySection/calendarBodySection";
import calendarDayData from '../../../data/calendarDayData';

interface IProps {
	days: number[][];
}

class CalendarBody extends Component<IProps> {
	render() {
		return <div className="calendarBody">{this.props.days.map(this._getWeek)}</div>;
	}

	_getWeek = (week: number[]): JSX.Element[] => week.map(this._getSection);
	_getSection = (day: number): JSX.Element => <CalendarBodySection key={day} day={day} />;
}

export default CalendarBody;
