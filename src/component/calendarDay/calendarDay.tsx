import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import CalendarHeader from "../../component/calendarMonth/calendarHeader/calendarHeader";

import HeaderButtons from "../calendarMonth/calendarHeader/headerButtons/headerButtons";
import HeaderTitles from "../calendarMonth/calendarHeader/headerTitle/headerTitle";
import "../../index.sass";

class CalendarDay extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="calendarDay">
        <div className="calendarHeader">
          <HeaderButtons />
          <HeaderTitles />
        </div>
        <CalendarDayBody />
      </div>
    );
  }
}

export default CalendarDay;
