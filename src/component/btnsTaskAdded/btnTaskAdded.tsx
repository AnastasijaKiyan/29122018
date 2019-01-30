import React, { Component } from "react";
import Context, { IState } from "../../reducer/square";

interface Button {
  id: number;
  name: number;
  duration?: number
}

// type State = {
//   selectedId: number;
//   isClicked: boolean;
// };

// export default class BtnsTaskAdded extends Component<{}, State> {
//   constructor(props: any) {
//     super(props);
//     this.state = {isClicked: false, selectedId: 2 };
//   }


//   btnDuration: Button[] = [
//     {id: 1, name: 10, duration: 1},
//     {id: 2, name: 20, duration: 2},
//     {id: 3, name: 30, duration: 3},
//     {id: 4, name: 40, duration: 4},
//     {id: 5, name: 50, duration: 5},
//     {id: 6, name: 60, duration: 6} 
//   ];

//   press(id: number, e: React.MouseEvent<HTMLInputElement>):void {
//     this.setState({isClicked: true, selectedId: id});
//     console.log(id)
    
//   }

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

  private btnDuration: Button[] = [
        {id: 1, name: 10, duration: 1},
        {id: 2, name: 20, duration: 2},
        {id: 3, name: 30, duration: 3},
        {id: 4, name: 40, duration: 4},
        {id: 5, name: 50, duration: 5},
        {id: 6, name: 60, duration: 6} 
      ];

  press(item: any, e: React.MouseEvent<HTMLDivElement>): void {
    //e.stopPropagation();
		Context.open(item);
  }


  render() {
    return (
      <div className="btnsTaskAdded">
        <input type="button" className="quickCompaign" value="+ Quick compaign"/>
        <input type="button" className="btnSave" value="Save"/>
        <div className="btnsDuration">
          {
            this.btnDuration.map((btn: Button) => {
            return(
            <input type="button" key={btn.id} className={this.state.square == true ? "btnDuration disabled" : "btnDuration"} 
            value={btn.name} onClick={ e => this.press(btn.id, e)} />
            )
          })
          }
        </div>
      </div>
    );
  }
}
