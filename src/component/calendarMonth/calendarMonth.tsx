import React, { Component } from 'react';
import CalendarBody from './calendarBody/calendarBody';
import CalendarHeader from './calendarHeader/calendarHeader';
import { month } from "./../../data/storage";

class CalendarMonth extends Component {
  render() {
    let d: number[][] = month(11) as number[][];
    return (
      <div className="calendarMonth">
        <CalendarHeader/>
        <CalendarBody days={d} />
      </div>
    );
  }
}

export default CalendarMonth;