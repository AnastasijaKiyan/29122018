import React, { Component } from 'react';
import { IDayCompany } from '../../../../type/IDayCompany';

interface IProps {
  data: IDayCompany
}

class CalendarDayTask extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className="calendarDayTask-full">
        <div>{this.props.data.name}</div>
        <div>{this.props.data.author}</div>
      </div>
    );
  }
}


export default CalendarDayTask;