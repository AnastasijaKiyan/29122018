import React, { Component } from "react";
import { IDay } from "../../../type/IDay";
import CalendarBodySection from "./calenarBodySection/calendarBodySection";
import dataDay from "../../../data/dataday";
import { element } from "prop-types";

interface IProps {
  days: IDay[];
}

class CalendarBody extends React.Component<IProps> {
  constructor(props: IProps) {
    /*
    if (props.days.length != 42) {
      throw Error("Array's lenght must be only 42");
    } */
    super(props);
  }

  render() {
    return (
      <div className="calendarBody">
      {
        this.props.days.map((day): JSX.Element => {
          return (
              <CalendarBodySection key={day.id} day={day} />
          )
        })
      }
    </div>
    );
  }
}

export default CalendarBody;
