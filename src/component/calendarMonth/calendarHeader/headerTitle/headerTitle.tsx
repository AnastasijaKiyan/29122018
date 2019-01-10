import React, { Component } from "react";

const _DIMENSION = ["Day", "Week", "Month"];

type Props = {};
type State = { typeDateSelectedId: number };

class HeaderTitle extends Component<Props, State> {
	public state = { typeDateSelectedId: 2 };

	press(id: number): void {
		this.setState({ typeDateSelectedId: id });
	}

	left(): void {
		console.log("left");
	}

	right(): void {
		console.log("right");
	}

	render() {
		return (
			<div className="headerTitle">
				<div className="headerData">
					<div className="headerDataMonth">October</div>
					<div className="headerDataYear">2018</div>
				</div>
				<ul className="headerTypeData">{_DIMENSION.map(this._getDimension.bind(this))}</ul>
				<div className="headerToggleData">
					<span>
						<img src="./pict/l.png" onClick={() => this.left()} />
					</span>
					<span>Today</span>
					<span>
						<img src="./pict/r.png" onClick={() => this.right()} />
					</span>
				</div>
			</div>
		);
	}

	_getDimension(item: string, index: number): JSX.Element {
		const isCurrent = this.state.typeDateSelectedId === index;
		const className = isCurrent ? "clicked" : "";
		const onClick = isCurrent ? undefined : this.press.bind(this, index);
		return (
			<li key={item} className={className} onClick={onClick}>
				{item}
			</li>
		);
	}
}

export default HeaderTitle;
