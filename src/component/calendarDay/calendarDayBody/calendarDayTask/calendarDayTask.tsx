import React, { Component } from 'react';

export interface ITask{
id: number,
hour: string,
taskType: string
}

class CalendarDayTask extends Component <ITask> {
constructor(props: ITask){
super(props)
}
render(){
  return(
    <div className="calendarDayTask-empty">
      <div>{this.props.hour}</div>
      <div>{this.props.taskType}</div>
    </div>
  );
}
}


export default CalendarDayTask;