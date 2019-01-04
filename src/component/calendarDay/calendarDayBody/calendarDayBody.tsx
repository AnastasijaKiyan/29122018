import React, { Component } from "react";
import CalendarDayTask from './calendarDayTask/calendarDayTask';
import { ITask } from './calendarDayTask/calendarDayTask';


class CalendarDayBody extends Component {
  constructor(props: any) {
    super(props);
    this.state = { taskSelectedId: 2 };
  }
  hours: number[] = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];
  tasks: ITask[] = [
  {id:1, hour:'00:00 AM', taskType:'Adver 1'},
  {id:2, hour:'01:00 AM', taskType:'Adver 2'},
];


  render() {
    return (
      <div className="calendarDayBody">
        <div className="aside" />
        <div className="body">
          <div className="hours">
            {this.hours.map(e => {
              return <div className="hour">{e}</div>;
            })}
          </div>
          <div>
            {this.tasks.map(el => {
              return <CalendarDayTask key={el.id} id={el.id} hour={el.hour} taskType={el.taskType}/>
            }
            )}
            </div>
        </div>
      </div>
    );
  }
}

export default CalendarDayBody;
