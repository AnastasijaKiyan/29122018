import { createStore, Store, Reducer, Action } from "redux";
import moment, { Moment } from "moment";

export enum TYPE {
	MONTH = "month",
	DAY = "day"
}

export interface IState {
	selected: TYPE;
	date: Moment;
}

enum ACTION {
	RESET,
	SET_MONTH,
	SET_DAY,
	TOOGLE
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	reset(): void;
	toogle(): void;
	setMonth(date: Moment): void;
	setDay(date: Moment): void;
}

const initialState: IState = {
	selected: TYPE.MONTH,
	date: moment()
};

function reducer(state: IState | undefined = initialState, action: IAction): IState {
	const { type, date, selected } = action;
	switch (type) {
		case ACTION.RESET:
		case ACTION.SET_DAY:
		case ACTION.SET_MONTH:
			return { date, selected };
		case ACTION.TOOGLE:
			return { date: state.date, selected: state.selected === TYPE.DAY ? TYPE.MONTH : TYPE.DAY };
		default:
			return state;
	}
}

const store: IMutation = createStore(reducer);

// Mutations
store.reset = (): void => {
	store.dispatch({
		type: ACTION.RESET,
		selected: TYPE.MONTH,
		date: moment()
	});
};

store.setMonth = (date: Moment): void => {
	store.dispatch({
		type: ACTION.SET_MONTH,
		selected: TYPE.MONTH,
		date
	});
};

store.setDay = (date: Moment): void => {
	store.dispatch({
		type: ACTION.SET_DAY,
		selected: TYPE.DAY,
		date
	});
};

store.toogle = (): void => {
	store.dispatch({
		type: ACTION.TOOGLE
	});
};

export default store;
