import React, { Component } from "react";
import { Moment } from "moment";
import CalendarBodySection from "./calenarBodySection/calendarBodySection";
import Calendar, { IState } from "./../../../reducer/calendar";

class CalendarBody extends Component<{}, IState> {
	public state: IState = Calendar.getState();

	protected _unsubscribe = () => {};

	public componentDidMount(): void {
		this._unsubscribe = Calendar.subscribe(
			(): void => {
				this.setState(Calendar.getState());
			}
		);
	}

	public componentWillUnmount(): void {
		this._unsubscribe();
	}

	render() {
		const { data } = this.state;
		return <div className="calendarBody">{data.map(this._getWeek)}</div>;
	}

	_getWeek = (week: Moment[]): JSX.Element[] => week.map(this._getSection);
	_getSection = (day: Moment, i: number): JSX.Element => <CalendarBodySection key={i} day={day} />;
}

export default CalendarBody;
