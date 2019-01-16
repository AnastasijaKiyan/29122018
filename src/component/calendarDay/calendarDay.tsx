import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import calendarDayData from '../../data/calendarDayData';


class CalendarDay extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="calendarDay">
        <CalendarDayBody data={calendarDayData}/>
      </div>
    );
  }
}

export default CalendarDay;
