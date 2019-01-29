import React, { Component } from "react";


interface Button {
  id: number;
  name: number;
  duration?: number
}

type State = {
  selectedId: number;
  isClicked: boolean;
};

export default class BtnsTaskAdded extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {isClicked: false, selectedId: 2 };
  }

  btnDuration: Button[] = [
    {id: 1, name: 10, duration: 1},
    {id: 2, name: 20, duration: 2},
    {id: 3, name: 30, duration: 3},
    {id: 4, name: 40, duration: 4},
    {id: 5, name: 50, duration: 5},
    {id: 6, name: 60, duration: 6} 
  ];

  press(id: number, e: React.MouseEvent<HTMLInputElement>):void {
    this.setState({isClicked: true, selectedId: id});
    console.log(e)
    
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
            <input type="button" key={btn.id} className={this.state.isClicked == true ? "btnDuration disabled" : "btnDuration"} 
            value={btn.name} 
                         onClick={ e => this.press(btn.id, e)}
            />
            )
          })
          }
        </div>
      </div>
    );
  }
}
