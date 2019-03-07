import React, { Component } from "react";
import {IState} from "../../reducer/taskAdd"

export interface IButton {
  id: string;
}

// interface IState {
//   isChecked: boolean;
// }

export default class BtnsQuickCompaign extends Component<{}, IState> {
  public state: IState = {
    isOpen: false
  };

  press(e: React.MouseEvent<HTMLInputElement>): void {
    this.setState({
      isOpen: true
    });
    console.log(name);
  }

  render(): JSX.Element | null {
    const {  isOpen } = this.state;
    return (
        <input
          type="button"
          id="quickCompaign"
          className= { isOpen == true ? "quickCompaignHide" : "quickCompaign"}
          value="+ Quick compaign"
          onClick={e => this.press(e)}
        />
    );
  }
}
