import { createStore, Store, Reducer, Action } from "redux";
import ICompany from "../type/ICompany";

export interface IState {
	isOpen: boolean;
}

enum ACTION {
	OPEN,
	CLOSE,
	RESET
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	open(): void;
	close(): void;
	reset(): void;
}

const initialState: IState = {
	isOpen: false
};

function reducer(state: IState | undefined = initialState, action: IAction): IState {
	const { type } = action;
	switch (type) {
		case ACTION.OPEN:
			return { isOpen: true };
		case ACTION.CLOSE:
		case ACTION.RESET:
		default:
			return { ...initialState };
	}
}

const store: IMutation = createStore(reducer);

// store.reset = (): void => {
// 	store.dispatch({ type: ACTION.RESET });
// };

// store.open = (): void => {
// 	store.dispatch({ type: ACTION.OPEN });
// };

// store.close = (): void => {
// 	store.dispatch({ type: ACTION.CLOSE });
// };

export default store;
