import React, { Component, useReducer } from "react";
import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";
import ICompany from "../../../../../type/ICompany";
import calendarDayData from "../../../../../data/calendarDayData";

interface IProps {
  day: number;
  month?: number;
  year?: number;
}

type IState = {
  selectedId: number;
  isOpened: boolean;
};

class SectionTask extends Component<IProps, IState> {
  private sections: ICompany[] = calendarDayData;

  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedId: 0,
      isOpened: false
    };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({
      selectedId: id,
      isOpened: true
    });
  }

  render() {
    let sectionsFiltered: ICompany[] = this.getFilteredSection();
    let isOpened: boolean = this.state.isOpened;
    let cheked: number = this.state.selectedId;
    let maxLength: number = 4;
    return (
      // <div>
      //   {this.sections.map((item: ICompany, index: number) => {
      //     if (item.dateStart == 1) {

      //     }
        <div className="allSectionTasks">
        {sectionsFiltered.map((item: ICompany, index: number) => {
          if (index < maxLength) {
            return (
              <div>
                <div
                  key={item.id}
                  className={item.id==cheked ? "sectionTaskItem pressed" : "sectionTaskItem"}
                  onClick={e => this.press(item.id, e)}
                >
                  {item.name}
                  {/* <SectionTaskDescription key={item.id} id={item.id} name={item.name} author={item.author} textfirst={item.textfirst} 
                textsecond={item.textsecond} dateStart={item.dateStart} dateFinish={item.dateFinish} 
                className={isOpened ? "displayedSectionTaskDescription":"hideSectionTaskDescription" }/> */}
                </div>
              </div>
            );
          } else if (index > maxLength) {
            return null;
          } else {
          }
          
        })}
        <div
          className={
            sectionsFiltered.length > maxLength
              ? "hoveredTask"
              : "hoveredTask hide"
          }
        >
          {sectionsFiltered.length - maxLength} more...
        </div>
      

      </div>
    );
      //</div>
      
  }

  getFilteredSection(): ICompany[] {
    let result: ICompany[] = [];
    this.sections.forEach(item => {
      let dateStart = new Date(item.dateStart * 1000); // Конвертация из unix_timestamp
      dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate())
      let dateFinish = new Date(item.dateFinish * 1000); // Конвертация из unix_timestamp
      dateFinish = new Date(dateFinish.getFullYear(), dateFinish.getMonth(), dateFinish.getDate());
      dateFinish.setDate(dateFinish.getDate() + 1);
      let dateCurrent = new Date(/*this.props.year*/ 2019, /*this.props.month*/ 0, this.props.day);
      if (dateCurrent >= dateStart && dateCurrent < dateFinish) result.push(item);
    });
    return result;
  }
}

export default SectionTask;
