import React, { Component } from "react";
import BtnsTaskAdded from '../../btnsTaskAdded/btnTaskAdded';
import Context, { IState, TYPE } from "../../../reducer/selected";


interface Button {
  id: number;
  name: string
}

type Props = { };
//type State = { buttonSelectedId: number};


class HeaderButtons extends Component <Props, IState> {

  public state = Context.getState();
  private buttons: Button[] = [];

  protected _unsubscribe = () => {};

  componentDidMount(): void {
    this._unsubscribe = Context.subscribe(() => {
      this.setState(Context.getState());
      
    });
  }

  componentWillUnmount(): void {
    this._unsubscribe();
  }

  constructor(props: Props) {
    super(props);
    //this.state = {buttonSelectedId: 2};
  this.buttons.push({ id: 1, name: "Properties" }, { id: 2, name: "Calendar" }, { id: 3, name: "Logs"});
  }

  press(id: number, e: React.MouseEvent<HTMLInputElement>):void {
    // this.setState({buttonSelectedId: id});
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="headerButtons">
      {
        this.buttons.map((item: Button) => <input key={item.id} 
        // className={this.state.buttonSelectedId == item.id ? "clicked" : ""} 
        className="input"
         type="button" name={String(item.id)} value={item.name} onClick={e => this.press(item.id, e)}/>)
      }
      {selected === TYPE.MONTH ? "" : <BtnsTaskAdded key="id"/>}
      
      </div>
    );
  }
}

export default HeaderButtons;
