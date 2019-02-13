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

  press(id: string, e: React.MouseEvent<HTMLInputElement>): void {
    e.stopPropagation();
    this.setState({
      isChecked: true
    });
    console.log(id);
  }

  render(): JSX.Element | null {
    return (
        <input
          type="button"
          id="quickCompaign"
          className="quickCompaign"
          value="+ Quick compaign"
        />
    );
  }
}
