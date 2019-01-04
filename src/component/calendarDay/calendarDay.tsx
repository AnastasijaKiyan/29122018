import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import CalendarHeader from "../../component/calendarMonth/calendarHeader/calendarHeader";

class CalendarDay extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='calendarDay'>
        {/* <CalendarHeader /> */}
        <CalendarDayBody />
      </div>
    );
  }
}

export default CalendarDay;
