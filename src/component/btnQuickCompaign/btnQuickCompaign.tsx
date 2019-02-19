import React, { Component } from "react";

export interface IButton {
  id: string;
}

interface IState {
  isChecked: boolean;
}

export default class BtnsQuickCompaign extends Component<{}, IState> {
  public state: IState = {
    isChecked: false
  };

  press(e: React.MouseEvent<HTMLInputElement>): void {
    this.setState({
      isChecked: true
    });
    console.log(name);
  }

  render(): JSX.Element | null {
    const { isChecked } = this.state;
    return (
        <input
          type="button"
          id="quickCompaign"
          className= {isChecked == true ? "quickCompaignHide" : "quickCompaign"}
          value="+ Quick compaign"
          onClick={e => this.press(e)}
        />
    );
  }
}
