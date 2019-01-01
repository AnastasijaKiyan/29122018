import React, { Component } from "react";
// import SectionTaskDescription from "./sectionTaskDescriptoin/sectionTasktDescription";

interface IProps {
  id: number;
  task: string;
}

class SectionTask extends Component {
  private tasts: IProps[] = [];

  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        {/* <div className="allSectionTasks">
          <div className="sectionTask">Some text</div>
          <div className="sectionTask">Some text</div>
          <div className="sectionTask">Some text</div>
          <div className="sectionTask">Some text</div>
          <div className="sectionTask">Some text</div>
        </div>
        <div className="hoveredTask">2 more...</div> */}
        {/* <SectionTaskDescription /> */}
      </div>
    );
  }
}

export default SectionTask;
