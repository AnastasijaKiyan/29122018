import React, { Component } from "react";
import moment, { Moment } from "moment";
import SectionTask from "./sectionEvent/sectionTask";

import Context, { IState, TYPE } from "./../../../../reducer/selected";

interface IProps {
	day: Moment;
}

class CalendarBodySection extends Component<IProps, {}> {
	render(): JSX.Element | null {
		return !(this.props.day instanceof moment) ? null : (
			<div className="calendarBodySection" onClick={Context.setDay.bind(null, this.props.day)}>
				<div className={moment().isSame(this.props.day, "day") ? "day calendarDayActive" : "day"}>
					{this.props.day.format("DD")}
				</div>
				<SectionTask key={this.props.day.unix()} day={this.props.day} />
			</div>
		);
	}
}

export default CalendarBodySection;
