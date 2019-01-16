import React, { Component } from "react";
import Context, { IState, TYPE } from "./reducer/selected";

import CalendarMonth from "./component/calendarMonth/calendarMonth";
import CalendarDay from "./component/calendarDay/calendarDay";
import CalendarHeader from "./component/calendarHeader/calendarHeader";
import "./index.sass";

export default class App extends Component<{}, IState> {
	public state: IState = Context.getState();
	protected _unsubscribe = () => {};

	componentDidMount(): void {
		this._unsubscribe = Context.subscribe(() => {
			this.setState(Context.getState());
		});
	}

	componentWillUnmount(): void {
		this._unsubscribe();
	}

	render(): JSX.Element {
		const { selected } = this.state;
		return (
			<div>
				<CalendarHeader />
				{selected === TYPE.MONTH ? <CalendarMonth /> : <CalendarDay />}
			</div>
		);
	}
}
