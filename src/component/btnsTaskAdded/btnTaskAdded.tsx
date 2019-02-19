import React, { Component } from "react";
import Context, { IState } from "../../reducer/square";
import BtnsQuickCompaign from '../btnQuickCompaign/btnQuickCompaign';
import BtnsSaveDuration from "../btnsSaveDuration/btnsSaveDuration";


type State = {
 
}

export default class BtnsTaskAdded extends Component<{}, State> {
public state: State = {
    selectedBtn: false,
   }

   press(id: string, e: React.MouseEvent<HTMLInputElement>): void {
        
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
