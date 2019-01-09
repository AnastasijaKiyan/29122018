import React, { Component } from "react";
import { IState } from "./type/IState";
import * as Reducer from "./reducer/reducer";

import CalendarMonth from "./component/calendarMonth/calendarMonth";
import CalendarDay from "./component/calendarDay/calendarDay";
import "./index.sass";

export default class App extends Component<{}, IState> {
  state: IState = Reducer.store.getState();
  unsubscribe = () => {};

  componentDidMount(): void {
    this.unsubscribe = Reducer.store.subscribe(() => {
      this.setState(Reducer.store.getState());
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  render(): JSX.Element {
    return (
      <div>
        <CalendarMonth />
        <br/>
        <CalendarDay/>
      </div>
    );
  }
}
