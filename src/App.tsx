import React, { Component } from "react";
import Context, { IState, TYPE } from "./reducer/selected";

import CalendarMonth from "./component/calendarMonth/calendarMonth";
import CalendarDay from "./component/calendarDay/calendarDay";
import CalendarHeader from "./component/calendarHeader/calendarHeader";
import SectionTaskDescription from "./component/sectionTaskDescriptoin/sectionTasktDescription";

import "./index.sass";
import BtnsTaskAdded from './component/btnsTaskAdded/btnTaskAdded';
import Square from "./component/square/square";

export default class App extends Component<{}, IState> {
  public state: IState = Context.getState();
  protected _unsubscribe = () => {};

  componentDidMount(): void {
    this._unsubscribe = Context.subscribe(() => {
      this.setState(Context.getState());
    });
  }

  componentWillUnmount(): void {
    this._unsubscribe();
  }

  render(): JSX.Element {
    const { selected } = this.state;
    return (
      <div>
        <div className={selected === TYPE.DAY ? "dayWidth" : "monthWidth"}>
         <CalendarHeader />
         </div>
        {selected === TYPE.MONTH ? <CalendarMonth /> : <CalendarDay />}
        <SectionTaskDescription />
        <Square />
      </div>
    );
  }
}
