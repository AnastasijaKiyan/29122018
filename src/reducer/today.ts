import { createStore, Store, Reducer, Action } from "redux";
import moment, { Moment } from "moment";

interface IState {
	day: Moment;
}

enum ACTION {
	SET
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	set: (day: Moment) => void;
	reset(): void;
}

const initialState: IState = {
	day: moment()
};

function reducer(state: IState | undefined = initialState, action: IAction): IState {
	const { type, day } = action;
	return type === ACTION.SET ? { day } : state;
}

const store: IMutation = createStore(reducer);

store.set = (day: Moment): void => {
	store.dispatch({ type: ACTION.SET, day });
};

export default store;
