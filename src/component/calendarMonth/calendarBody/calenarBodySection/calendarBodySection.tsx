import React, { Component } from "react";
import { IDay } from '../../../../type/IDay';
import SectionTask from './sectionEvent/sectionTask';

interface IProps {
  day: IDay;
  month?: number;
  year?: number;
}

type State = { selectedId: number };


class CalendarBodySection extends Component <IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = { selectedId: 18 };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
    console.log('222');
  }

  
  render(): JSX.Element {
    return (
      <div className="calendarBodySection">
              <div className={this.state.selectedId == this.props.day.id ? "day calendarDayActive" : "day"}
              onClick={e => this.press(this.props.day.id, e)}>{this.props.day.day}</div>
              <SectionTask />
      </div>
    );
  }
}

export default CalendarBodySection;
