import React, { Component } from "react";
import moment from "moment";
import capitalize from "lodash/capitalize";
import Context, { IState, TYPE } from "./../../../reducer/selected";

class HeaderTitle extends Component<{}, IState> {
	public state: IState = Context.getState();

	protected _unsubscribe = () => {};

	public componentDidMount(): void {
		this._unsubscribe = Context.subscribe(
			(): void => {
				this.setState(Context.getState());
			}
		);
	}

	public componentWillUnmount(): void {
		this._unsubscribe();
	}

	left(): void {
		const { date, selected } = this.state;

		if (this.state.selected === TYPE.MONTH) Context.setMonth(moment(date).subtract(1, selected));
		else Context.setDay(moment(date).subtract(1, selected));
	}

	right(): void {
		const { date, selected } = this.state;

		if (this.state.selected === TYPE.MONTH) Context.setMonth(moment(date).add(1, selected));
		else Context.setDay(moment(date).add(1, selected));
	}

	today(): void {
		if (this.state.selected === TYPE.MONTH) Context.setMonth(moment());
		else Context.setDay(moment());
	}

	render() {
		return (
			<div className="headerTitle">
				{this._getDateHTMLElement()}
				<ul className="headerTypeData">
					{this._getDimension(TYPE.DAY)}
					{this._getDimension(TYPE.MONTH)}
				</ul>
				<div className="headerToggleData">
					<span>
						<img src="./pict/l.png" onClick={() => this.left()} />
					</span>
					<span onClick={() => this.today()}>Today</span>
					<span>
						<img src="./pict/r.png" onClick={() => this.right()} />
					</span>
				</div>
			</div>
		);
	}

	_getDimension(item: string): JSX.Element {
		const isCurrent = this.state.selected === item;
		const className = isCurrent ? "clicked" : "";
		const onClick = isCurrent ? undefined : Context.toogle;
		return (
			<li key={item} className={className} onClick={onClick}>
				{capitalize(item)}
			</li>
		);
	}

	_getDateHTMLElement(): JSX.Element {
		const { date, selected } = this.state;
		const dayElement = selected === TYPE.DAY ? <span>{date.format("DD")}</span> : null;
		return (
			<div className="headerData">
				{dayElement}
				<span className="headerDateMonth">{date.format("MMMM")}</span>
				<span className="headerDateYear">{date.format("YYYY")}</span>
			</div>
		);
	}
}

export default HeaderTitle;
