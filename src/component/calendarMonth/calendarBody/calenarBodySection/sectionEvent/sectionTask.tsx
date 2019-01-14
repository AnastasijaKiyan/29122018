import React, { Component, useReducer } from "react";
import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";
import ICompany from "../../../../../type/ICompany";
import calendarDayData from "../../../../../data/calendarDayData";

type Props = {};
type State = { selectedId: number };

class SectionTask extends Component<Props, State> {


  private sections: ICompany[] = calendarDayData;

  constructor(props: Props) {
    super(props);
    this.state = { selectedId: 15 };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }

  render() {
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
                  className="sectionTaskItem"
                  onClick={e => this.press(item.id, e)}
                >
                  {item.name}
                
                  <SectionTaskDescription/>
              
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
            this.sections.length > maxLength ? "hoveredTask" : "hoveredTask hide"
          }
        >
          {this.sections.length - maxLength} more...
        </div>
      </div>
    );
  }
}

export default SectionTask;
