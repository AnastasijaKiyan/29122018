import React, { Component } from "react";
import moment from "moment";
import { IDay } from '../../../../type/IDay';
import SectionTask from './sectionEvent/sectionTask';

interface IProps {
  day: number;
  month?: number;
  year?: number;
}

type State = { selectedId: number };


class CalendarBodySection extends Component <IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = { selectedId: parseInt(moment().format("DD")) };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }

  
  render(): JSX.Element {
    return (
      <div className="calendarBodySection">
              <div className={this.state.selectedId == this.props.day ? "day calendarDayActive" : "day"}
              onClick={e => this.press(this.props.day, e)}>{this.props.day}</div>
              <SectionTask key={this.props.day} day={this.props.day} month={this.props.month} year={this.props.year}/>
      </div>
    );
  }
}

export default CalendarBodySection;
