import React, { Component } from "react";
import Context, { IState } from "./../../reducer/square";

export default class Square extends Component<{}, IState> {
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

  press(id: number, e: React.MouseEvent<HTMLDivElement>): void {
    Context.close();
  }

  render(): JSX.Element | null {
    return (
      <div onClick={Context.close}>
        <div className="squareclass" key="id" />
      </div>
    );
  }
}
