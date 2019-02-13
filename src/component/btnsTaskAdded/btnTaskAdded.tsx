import React, { Component } from "react";
import Context, { IState } from "../../reducer/square";
import BtnsQuickCompaign from '../btnQuickCompaign/btnQuickCompaign';
import BtnsSaveDuration from "../btnsSaveDuration/btnsSaveDuration";


interface IProps {
}

export default class BtnsTaskAdded extends Component<IProps, {}> {
  public state: IState = Context.getState();

  protected _unsubscribe = () => {};

  public componentDidMount(): void {
    this._unsubscribe = Context.subscribe(
      (): void => {
        this.setState(Context.getState());
      }
    );
  }

  public componentWillUnmount(): void {
    this._unsubscribe();
  }

  render() {
    return (
      <div className="btnsTaskAdded">
        <BtnsQuickCompaign/>
        <BtnsSaveDuration/>
      </div>
    );
  }
}
