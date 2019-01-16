import React, { Component } from "react";
import moment, { Moment } from "moment";
import SectionTask from "./sectionEvent/sectionTask";

interface IProps {
	day: Moment;
}

class CalendarBodySection extends Component<IProps, {}> {
	render(): JSX.Element | null {
		return !(this.props.day instanceof moment) ? null : (
			<div className="calendarBodySection">
				<div className={moment().isSame(this.props.day, "day") ? "day calendarDayActive" : "day"}>
					{this.props.day.format("DD")}
				</div>
				<SectionTask key={this.props.day.unix()} day={this.props.day} />
			</div>
		);
	}
}

export default CalendarBodySection;
