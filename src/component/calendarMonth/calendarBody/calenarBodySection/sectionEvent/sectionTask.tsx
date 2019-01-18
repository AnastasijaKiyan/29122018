import React, { Component, useReducer } from "react";
import { Moment } from "moment";
import ICompany from "../../../../../type/ICompany";
import calendarDayData from "../../../../../data/calendarDayData";
import moment = require("moment");
import filter from "lodash/filter";
import Context, { IState } from "./../../../../../reducer/modal";

interface IProps {
  day: Moment;
}

const _MAX_LENGTH: number = 4;

class SectionTask extends Component<IProps, {}> {
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

  private sections: ICompany[] = calendarDayData;

  press(item: ICompany, e: React.MouseEvent<HTMLDivElement>): void {
    e.stopPropagation();
		Context.open(item);
  }

  render() {
    let sectionsFiltered: ICompany[] = this.getFilteredSection();
    return (
      <div className="allSectionTasks">
        {sectionsFiltered.map((item: ICompany, index: number) => {
          if (index < _MAX_LENGTH) {
            let cheked: boolean = this.state.campaign
              ? this.state.campaign.id === item.id
              : false;
            return (
              <div>
                <div
                  key={item.id}
                  className={
                    cheked ? "sectionTaskItem pressed" : "sectionTaskItem"
                  }
                  onClick={e => this.press(item, e)}
                >
                  {item.name}
                </div>
              </div>
            );
          } else if (index > _MAX_LENGTH) return null;
        })}
        <div
          className={
            sectionsFiltered.length > _MAX_LENGTH
              ? "hoveredTask"
              : "hoveredTask hide"
          }
        >
          {sectionsFiltered.length - _MAX_LENGTH} more...
        </div>
      </div>
    );
  }

  getFilteredSection(): ICompany[] {
    const current = moment(this.props.day);
    return filter(
      this.sections,
      ({ dateStart, dateFinish }: ICompany) =>
        current.diff(moment.unix(dateStart), "day") >= 0 &&
        current.diff(moment.unix(dateFinish), "hour") <= 0
    );
  }
}

export default SectionTask;
