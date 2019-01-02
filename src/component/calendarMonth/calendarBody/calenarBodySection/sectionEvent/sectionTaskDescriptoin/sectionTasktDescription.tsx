import React, { Component } from "react";

interface IProps {}

class SectionTaskDescription extends Component {
  constructor(props: IProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div className="taskDescription">
        <div className="taskHeader">
          <div className="taskHeaderDiv">
            <div className="taskCompanyName">Coca-Cola</div>
            <div className="taskUserName">User 1</div>
          </div>
          <div className="taskBtn" />
        </div>
        <div className="taskDate">
          <div className="startDate">Nov 28, 2018 12 AM to</div>
          <div className="finsshDate">Nov 30, 2018 12:59 PM</div>
        </div>
        <div className="taskDescrText">SomeText, SomeText</div>
        <div className="taskDescrText">SomeText, SomeText</div>
      </div>
    );
  }
}

export default SectionTaskDescription;
