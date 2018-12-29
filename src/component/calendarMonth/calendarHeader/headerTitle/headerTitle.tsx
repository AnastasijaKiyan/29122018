import React, { Component } from "react";
import { ICondition } from "../../../../type/ICondition";

interface TypeDate {
  id: number;
  name: string;
}

type Props = {};
type State = { typeDateSelectedId: number };

class HeaderTitle extends Component<Props, State> {
  private typeDate: TypeDate[] = [];

  constructor(props: any) {
    super(props);

    this.state = { typeDateSelectedId: 3 };
    this.typeDate.push(
      { id: 1, name: "Day" },
      { id: 2, name: "Week" },
      { id: 3, name: "Month" }
    );
  }

  press(id: number): void {
    this.setState({ typeDateSelectedId: id });
  }

  render() {
    return (
      <div className="headerTitle">
        <div className="headerData">
          <div className="headerDataMonth">October</div>
          <div className="headerDataYear">2018</div>
        </div>
        <ul className="headerTypeData">
        { 
          this.typeDate.map((item: TypeDate) => <li key={item.id} className={this.state.typeDateSelectedId == item.id ? "clicked" : ""}
          id={String(item.id)} onClick={e => this.press(item.id)}>{item.name} </li>)
        }
        </ul>
        <div className="headerToggleData">
          <img src="../../../../style/pict/r.png" />
          <span>Today</span>
          <img src="../../../../style/pict/r.png" />
        </div>
      </div>
    );
  }
}

export default HeaderTitle;
