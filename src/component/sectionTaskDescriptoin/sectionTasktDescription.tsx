import React, { Component } from "react";
import Context, { IState } from "./../../reducer/modal";
import moment, { Moment } from "moment";

class SectionTaskDescription extends Component<{}, IState> {
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

	press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
		Context.close();
	}


	render(): JSX.Element | null {
		if (this.state.campaign == null) return null;
		const el = this.state.campaign;
		return (
			<div onClick={Context.close}>
				<div className="taskDescription">
					<div className="taskHeader">
						<div className="taskHeaderDiv">
							<div className="taskCompanyName">{el.name}</div>
							<div className="taskUserName">{el.author}</div>
						</div>
						<div className="taskBtn"/>
					</div>
					<div className="taskDate">
						<div className="startDate">{moment.unix(el.dateStart).format("LLL")} to</div>
						<div className="finsshDate">{moment.unix(el.dateFinish).format("LLL")}</div>
					</div>
					<div className="taskDescrText">{el.textfirst}</div>
					<div className="taskDescrText">{el.textsecond}</div>
				</div>
			</div>
		);
	}
}

export default SectionTaskDescription;
