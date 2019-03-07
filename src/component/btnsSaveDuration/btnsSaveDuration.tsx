import React, { Component } from "react";
import Context, { IState } from "../../reducer/taskAdd";
import BtnsQuickCompaign from '../btnQuickCompaign/btnQuickCompaign';

export interface ButtonDuration {
  id: number;
  name: number;
  duration: number
}

interface IProps {
}

export default class BtnsSaveDuration extends Component<IProps, IState> {
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

  private btnDuration: ButtonDuration[] = [
        {id: 1, name: 10, duration: 1},
        {id: 2, name: 20, duration: 2},
        {id: 3, name: 30, duration: 3},
        {id: 4, name: 40, duration: 4},
        {id: 5, name: 50, duration: 5},
        {id: 6, name: 60, duration: 6} 
      ];

  press(item: ButtonDuration, e: React.MouseEvent<HTMLDivElement>): void {
    e.stopPropagation();
  }


  render() {
    return (
      
      <div className="btnsSaveDurationHide">
        <div className="btnsDuration">
          {
            this.btnDuration.map((item: ButtonDuration) => {
            return(
            <input type="button" key={item.id} className="btnDuration"
            value={item.name} onClick={ e => this.press(item, e)} />
            )
          })
          }
        </div>
        <input type="button" className="btnSave" value="Save"/>
      </div>
    );
  }
}
