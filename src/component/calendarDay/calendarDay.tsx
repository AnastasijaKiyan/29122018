import React, { Component } from "react";
import CalendarDayBody from "../calendarDay/calendarDayBody/calendarDayBody";
import CalendarHeader from "../../component/calendarMonth/calendarHeader/calendarHeader";

import HeaderButtons from "../calendarMonth/calendarHeader/headerButtons/headerButtons";
import HeaderTitles from "../calendarMonth/calendarHeader/headerTitle/headerTitle";
import "../../index.sass";
import { IDayCompany } from "../../type/IDayCompany";

class CalendarDay extends Component {
  constructor(props: any) {
    super(props);
  }

  calendarDayData: IDayCompany[] = [
    {
      id: 1,
      tenSecond: 1,
      hourStart: 1,
      hourFinish: 1,
      name: "Coca-Cola",
      author: "BatMan"
    },
    {
      id: 2,
      tenSecond: 1,
      hourStart: 2,
      hourFinish: 24,
      name: "Pepsi",
      author: "BatMan"
    },
    {
      id: 3,
      tenSecond: 5,
      hourStart: 3,
      hourFinish: 11,
      name: "7up",
      author: "PacMan"
    }
  ]

  render() {
    return (
      <div className="calendarDay">
        <div className="calendarHeader">
          <HeaderButtons />
          <HeaderTitles />
        </div>
        <CalendarDayBody data={this.calendarDayData}/>
      </div>
    );
  }
}

export default CalendarDay;
