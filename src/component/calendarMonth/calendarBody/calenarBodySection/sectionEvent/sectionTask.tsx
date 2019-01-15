import React, { Component, useReducer } from "react";
import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";
import ICompany from "../../../../../type/ICompany";
import calendarDayData from "../../../../../data/calendarDayData";

type Props = {};
type State = {
  selectedId: number;
  isOpened: boolean;
};

class SectionTask extends Component<Props, State> {
  private sections: ICompany[] = calendarDayData;

  constructor(props: Props) {
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
    let isOpened: boolean = this.state.isOpened;
    let cheked: number = this.state.selectedId;
    let maxLength: number = 4;
    return (
      <div className="allSectionTasks">
        {this.sections.map((item: ICompany, index: number) => {
          if (index < maxLength) {
            return (
              <div>
                <div
                  key={item.id}
                  className={item.id==cheked ? "sectionTaskItem pressed" : "sectionTaskItem"}
                  onClick={e => this.press(item.id, e)}
                >
                  {item.name}
                  <SectionTaskDescription key={item.id} id={item.id} name={item.name} author={item.author} textfirst={item.textfirst} 
                textsecond={item.textsecond} dateStart={item.dateStart} dateFinish={item.dateFinish} 
                className={isOpened ? "displayedSectionTaskDescription":"hideSectionTaskDescription" }/>
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
            this.sections.length > maxLength
              ? "hoveredTask"
              : "hoveredTask hide"
          }
        >
          {this.sections.length - maxLength} more...
        </div>
      

      </div>
    );
  }
}

export default SectionTask;
