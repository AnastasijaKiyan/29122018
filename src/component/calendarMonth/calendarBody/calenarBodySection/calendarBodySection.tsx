import React, { Component } from "react";
import { IDay } from '../../../../type/IDay';
import SectionTask from './sectionEvent/sectionTask';

interface IProps {
  day: IDay;
}


class CalendarBodySection extends Component <IProps> {
  constructor(props: IProps) {
    super(props);
  }

  
  render(): JSX.Element {
    return (
      <div className="calendarBodySection">
              <div className='calendarDay'>{this.props.day.day}</div>
              <SectionTask />
      </div>
    );
  }
}

export default CalendarBodySection;
