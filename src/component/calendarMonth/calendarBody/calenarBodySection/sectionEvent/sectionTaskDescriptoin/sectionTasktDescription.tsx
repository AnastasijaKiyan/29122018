import React, { Component } from "react";
import  ICompany from '../../../../../../type/ICompany';
import calendarDayData from '../../../../../../data/calendarDayData'

interface IProps {
  companyId: number;
  isVisiable: boolean
}

class SectionTaskDescription extends Component <IProps> {
  constructor(props: IProps) {
    super(props);
  }

  getCompanyById(companyId: number): ICompany | undefined {
    return  calendarDayData.find(item => item.id == companyId);
  }

  render(): JSX.Element | null  {
    if (this.props.companyId == 0) return null;
    let company: ICompany | undefined = this.getCompanyById(this.props.companyId);
    if (!company) return null;
    return (
      <div className={"taskDescription " + (this.props.isVisiable ? "displayed" : "hide")}>
        <div className="taskHeader">
          <div className="taskHeaderDiv">
            <div className="taskCompanyName">{company.name}</div>
            <div className="taskUserName">{company.author}</div>
          </div>
          <div className="taskBtn" />
        </div>
        <div className="taskDate">
          <div className="startDate">{company.hourStart} to</div>
          <div className="finsshDate">{company.hourFinish}</div>
        </div>
        <div className="taskDescrText">{company.textfirst}</div>
        <div className="taskDescrText">{company.textsecond}</div>
      </div>
    );
  }
}

export default SectionTaskDescription;
