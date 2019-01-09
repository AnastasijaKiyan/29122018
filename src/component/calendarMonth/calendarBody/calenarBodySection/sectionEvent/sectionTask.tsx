import React, { Component, useReducer } from "react";
import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";

interface Section {
  id: number;
  task: string;
}
type Props = {};
type State = { selectedId: number };

class SectionTask extends Component<Props, State> {
  private section: Section[] = [
    { id: 1, task: "Some Text" },
    { id: 2, task: "Some Text" },
    { id: 3, task: "Some Text" },
    { id: 4, task: "Some Text" },
    { id: 5, task: "Some Text" }
  ];

  constructor(props: Props) {
    super(props);
    this.state = { selectedId: 15 };
  }

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ selectedId: id });
  }

  render() {
    return (
      <div className="sectionTask">
        <SectionTaskDescription />
        <div className="allSectionTasks">
          {
            this.section.map((item: Section)=>
            <div key={item.id} className="sectionTaskItem" onClick={e => this.press(item.id, e)}>Some Text</div>
            )}

        <div className="hoveredTask">2 more...</div>
      </div>
      </div>
    );
  }
}

export default SectionTask;
