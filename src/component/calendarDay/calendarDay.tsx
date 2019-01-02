import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import CalendarHeader from "../calendarMonth/calendarHeader/calendarHeader";

class CalendarDay extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <CalendarHeader />
        <CalendarDayBody />
      </div>
    );
  }
}

export default CalendarDay;
