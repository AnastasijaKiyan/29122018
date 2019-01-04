import React, {Component} from 'react';

class CalendarDayTimer extends Component {
  constructor(props: any){
    super(props);
  }

  times: string[] = [
    '00:00:40', '00:00:50', '00:01:00', '00:01:10', '00:01:20', '00:01:30','00:01:40','00:01:50', '00:02:00', 
    '00:02:10', '00:02:20', '00:02:30', '00:02:40', '00:02:50', '00:03:00'
  ]
  render(){
    return(
      <div className="aside">
      <div className="asideHour">hour</div>
      <div className="asideAllday">allday</div>
      {this.times.map(e => {
              return <div className="asideTimeItem">{e}</div>;
            })}
      </div>
    );
  }
}

 export default CalendarDayTimer;
