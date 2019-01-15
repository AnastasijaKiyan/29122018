import React, { Component } from "react";
import Moment from 'moment';

const _DIMENSION = ["Day", "Month"];

type Props = {};
type State = {
	typeDateSelectedIndex: number,
	date: Date
};

class HeaderTitle extends Component<Props, State> {
	public state = {
		typeDateSelectedIndex: 1,
		date: new Date()
	};

	press(id: number): void {
		this.setState({ typeDateSelectedIndex: id });
	}

	left(): void {
		let date = this.state.date;
		switch (this.state.typeDateSelectedIndex) {
			case 0: // Day
				date.setDate(date.getDate() - 1);
				this.setState({ date: date });
				break;
			case 1: // Month
				date.setMonth(date.getMonth() - 1);
				this.setState({ date: date });
				break;
			default:
				return;
		}
	}

	right(): void {
		let date = this.state.date;
		switch (this.state.typeDateSelectedIndex) {
			case 0: // Day
				date.setDate(date.getDate() + 1);
				this.setState({ date: date });
				break;
			case 1: // Month
				date.setMonth(date.getMonth() + 1);
				this.setState({ date: date });
				break;
			default:
				return;
		}
	}

	today(): void {
		let date = new Date();
		this.setState({ date: date });
	}

	render() {
		return (
			<div className="headerTitle">
				{this._getDateHTMLElement()}
				<ul className="headerTypeData">{_DIMENSION.map(this._getDimension.bind(this))}</ul>
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

	_getDimension(item: string, index: number): JSX.Element {
		const isCurrent = this.state.typeDateSelectedIndex === index;
		const className = isCurrent ? "clicked" : "";
		const onClick = isCurrent ? undefined : this.press.bind(this, index);
		return (
			<li key={item} className={className} onClick={onClick}>
				{item}
			</li>
		);
	}

	_getDateHTMLElement(): JSX.Element {
		const date = this.state.date;
		const currentDateIndex = this.state.typeDateSelectedIndex;
		const dayElement = currentDateIndex == 0 ? <span>{date.getDate()}</span> : null;
		return (
			<div className="headerData">
				{dayElement}
				<span className="headerDateMonth">{Moment(date).format("MMMM")}</span>
				<span className="headerDateYear">{date.getFullYear()}</span>
			</div>
		);

	}
}

export default HeaderTitle;
