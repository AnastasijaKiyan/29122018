import React, { Component } from "react";
import  ICompany from '../../../../../../type/ICompany';

interface IProps {
  data: ICompany;
}

class SectionTaskDescription extends Component <IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div className="taskDescription">
        <div className="taskHeader">
          <div className="taskHeaderDiv">
            <div className="taskCompanyName">{this.props.data.name}</div>
            <div className="taskUserName">{this.props.data.author}</div>
          </div>
          <div className="taskBtn" />
        </div>
        <div className="taskDate">
          <div className="startDate">{this.props.data.hourStart} to</div>
          <div className="finsshDate">{this.props.data.hourFinish}</div>
        </div>
        <div className="taskDescrText">{this.props.data.textfirst}</div>
        <div className="taskDescrText">{this.props.data.textsecond}</div>
      </div>
    );
  }
}

export default SectionTaskDescription;
