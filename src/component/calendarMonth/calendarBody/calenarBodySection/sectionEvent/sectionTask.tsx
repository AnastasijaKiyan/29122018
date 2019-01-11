import React, { Component, useReducer } from "react";
import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";
import ICompany from "../../../../../type/ICompany";
import calendarDayData from "../../../../../data/calendarDayData";

// interface Section {
//   id: number;
//   task: string;
// }
type Props = {};
type State = { selectedId: number };

class SectionTask extends Component<Props, State> {
  // private sections: Section[] = [
  //   { id: 1, task: "Some Text" },
  //   { id: 2, task: "Some Text" },
  //   { id: 3, task: "Some Text" },
  //   { id: 4, task: "Some Text" },
  //   { id: 5, task: "Some Text" },
  //   { id: 6, task: "Some Text" },
  //   { id: 7, task: "Some Text" }
  // ];

  private sections: ICompany[] = calendarDayData;

  constructor(props: Props) {
    super(props);
    this.state = { selectedId: 15 };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }

  render() {
    return (
      <div className="allSectionTasks">
        {this.sections.map((item: ICompany, index: number) => {
          if (index < 4) {
            return (
              <div>
                <div
                  key={item.id}
                  className="sectionTaskItem"
                  onClick={e => this.press(item.id, e)}
                >
                  {item.name}
                </div>
              </div>
            );
          } else if (index > 4) {
            return null;
          } else {
          }
        })}
        <div
          className={
            this.sections.length > 5 ? "hoveredTask" : "hoveredTask hide"
          }
        >
          {this.sections.length - 4} more...
        </div>
      </div>
    );
  }
}

export default SectionTask;
