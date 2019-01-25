import React, { Component } from "react";
import ICompany from "../../../../type/ICompany";
import arr from "../../../../data/data.New";

interface IProps {}

class CalendarDayTask extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  myArr: any = arr;

  render() {
    return (
      <div>
        {this.myArr.map((el: any) => {
          return (
            <div className={(el.n)?"calendarDayTask":"calendarDayTask-full"}>{el.name}</div>
          )
        })}
      </div>
    );
  }
}

export default CalendarDayTask;
