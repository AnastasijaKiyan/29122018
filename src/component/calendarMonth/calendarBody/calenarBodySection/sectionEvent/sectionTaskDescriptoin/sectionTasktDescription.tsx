import React, { Component, Props } from "react";
import ICompany from "../../../../../../type/ICompany";
import calendarDayData from "../../../../../../data/calendarDayData";

interface IProps extends ICompany, Props<number> {
  className: string;
};
type State = { selectedId: number };

class SectionTaskDescription extends Component<IProps, State> {

  constructor(props: IProps) {
    super(props);
    this.state = { selectedId: 15 };
  }
  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }

  render(): JSX.Element {
    const el = this.props;
    return (
      <div>
          <div className="taskDescription">
            <div className="taskHeader">
              <div className="taskHeaderDiv">
                <div className="taskCompanyName">{el.name}</div>
                <div className="taskUserName">{el.author}</div>
              </div>
              <div className="taskBtn" />
            </div>
            <div className="taskDate">
              <div className="startDate">{el.dateStart} to</div>
              <div className="finsshDate">{el.dateFinish}</div>
            </div>
            <div className="taskDescrText">{el.textfirst}</div>
            <div className="taskDescrText">{el.textsecond}</div>
          </div>
      </div>
    );
  }
}

export default SectionTaskDescription;
