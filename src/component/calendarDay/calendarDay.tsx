import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import CalendarHeader from "../../component/calendarMonth/calendarHeader/calendarHeader";
import calendarDayData from '../../data/calendarDayData';

import HeaderButtons from "../calendarMonth/calendarHeader/headerButtons/headerButtons";
import HeaderTitles from "../calendarMonth/calendarHeader/headerTitle/headerTitle";
import "../../index.sass";
import ICompany from "../../type/ICompany";

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
