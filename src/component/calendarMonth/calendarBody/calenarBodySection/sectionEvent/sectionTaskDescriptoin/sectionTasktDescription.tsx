import React, { Component } from "react";
import  ICompany from '../../../../../../type/ICompany';
import calendarDayData from '../../../../../../data/calendarDayData';

type Props = {};
type State = { selectedId: number };

class SectionTaskDescription extends Component <Props, State> {
  private companies: ICompany[] = calendarDayData;
  
  
   constructor(props: Props) {
    super(props);
    this.state = { selectedId: 15 };
  }
 press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }
  
  render(): JSX.Element {
    console.log(this.companies);
    return (
      <div className="taskDescription">
        <div className="taskHeader">
          <div className="taskHeaderDiv">
            <div className="taskCompanyName">{'this.myCompany.name'}</div>
            <div className="taskUserName">{'this.myCompany.author'}</div>
          </div>
          <div className="taskBtn" />
        </div>
        <div className="taskDate">
          <div className="startDate">{'this.myCompany.dateStart'} to</div>
          <div className="finsshDate">{'this.myCompany.dateFinish'}</div>
        </div>
        <div className="taskDescrText">{'this.myCompany.textfirst'}</div>
        <div className="taskDescrText">{'this.myCompany.textsecond'}</div>
      </div>
    );
  }


}

export default SectionTaskDescription;
