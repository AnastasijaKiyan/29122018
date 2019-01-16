import React, { Component } from "react";
import CalendarDayTask from './calendarDayTask/calendarDayTask';
import CalendarDayTimer from './calendarDayTimer/calendarDayTimer';
import ICompany from '../../../type/ICompany'

interface IProps {
  data: ICompany[]
}

class CalendarDayBody extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.validator(props.data);
    this.state = { taskSelectedId: 2 };
  }

  validator(data: ICompany[]): void {
    data.forEach(item => {
      if (item.dateStart > item.dateFinish)
        throw Error("Property 'hourStart' can't be more than property 'hourFinish'.");
    });
  }

  hours: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];


  render() {
    return (
      <div className="calendarDayBody">
        <CalendarDayTimer />
        <div className="body">
          <div className="hours">
            {
              this.hours.map(e => {
                return <div className="hour">{e}</div>;
              })
            }
          </div>
          <div className="body-empty"></div>
          <div className='calendarDayTasks'>
            {
              this.props.data.map(el => {
                return <CalendarDayTask key={el.id} data={el} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarDayBody;
