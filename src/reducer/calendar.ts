import { createStore, Store, Reducer, Action } from "redux";
import moment, { Moment } from "moment";
import { getMonth } from "./../data/storage";

import Context from "./selected";

export interface IState {
	data: Moment[][];
}

enum ACTION {
	SET
}

interface IAction extends Action<ACTION>, IState {}

function reducer(state: IState | undefined, action: IAction): any {
	return { data: getMonth(moment(Context.getState().date).format("MM")) };
}

const store = createStore(reducer) as Store<IState>;

Context.subscribe(
	(): void => {
		store.dispatch({ type: ACTION.SET });
	}
);

export default store;
