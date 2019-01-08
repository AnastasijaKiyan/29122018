import React, { Component } from "react";
import CalendarDayTask from './calendarDayTask/calendarDayTask';
import CalendarDayTimer from './calendarDayTimer/calendarDayTimer';
import { ITask } from './calendarDayTask/calendarDayTask';



class CalendarDayBody extends Component {
  constructor(props: any) {
    super(props);
    this.state = { taskSelectedId: 2 };
  }
  hours: number[] = [
    1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  ];
  tasks: ITask[] = [
  {id:1, hour:'00:00 AM', taskType:'Adver 1'},
  {id:2, hour:'01:00 AM', taskType:'Adver 2'},
  {id:3, hour:'01:00 AM', taskType:'Adver 2'},
  {id:4, hour:'01:00 AM', taskType:'Adver 2'},
  {id:5, hour:'01:00 AM', taskType:'Adver 2'},
  {id:6, hour:'01:00 AM', taskType:'Adver 2'},
  {id:7, hour:'01:00 AM', taskType:'Adver 2'},
  {id:8, hour:'01:00 AM', taskType:'Adver 2'},
  {id:9, hour:'01:00 AM', taskType:'Adver 2'},
  {id:10, hour:'01:00 AM', taskType:'Adver 2'},
  {id:11, hour:'01:00 AM', taskType:'Adver 2'},
  {id:12, hour:'01:00 AM', taskType:'Adver 2'},
  {id:13, hour:'01:00 AM', taskType:'Adver 2'},
  {id:14, hour:'01:00 AM', taskType:'Adver 2'},
  {id:15, hour:'01:00 AM', taskType:'Adver 2'},
  {id:16, hour:'01:00 AM', taskType:'Adver 2'},
  {id:17, hour:'01:00 AM', taskType:'Adver 2'},
  {id:18, hour:'01:00 AM', taskType:'Adver 2'},
  {id:19, hour:'01:00 AM', taskType:'Adver 2'},
  {id:20, hour:'01:00 AM', taskType:'Adver 2'},
  {id:21, hour:'01:00 AM', taskType:'Adver 2'},
  {id:22, hour:'01:00 AM', taskType:'Adver 2'},
  {id:23, hour:'01:00 AM', taskType:'Adver 2'},
  {id:24, hour:'01:00 AM', taskType:'Adver 2'},
];


  render() {
    return (
      <div className="calendarDayBody">
        <CalendarDayTimer/>
        <div className="body">
          <div className="hours">
            {this.hours.map(e => {
              return <div className="hour">{e}</div>;
            })}
          </div>
          <div className="body-empty"></div>
          <div className='calendarDayTasks'>
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
