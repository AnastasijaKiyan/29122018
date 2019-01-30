import { createStore, Store, Reducer, Action } from "redux";
import Square from "../component/square/square";

export interface IState {
	square: any | null;
	isOpen: boolean;
}

enum ACTION {
	OPEN,
	CLOSE,
	RESET
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	open: (square: any) => void;
	close(): void;
	reset(): void;
}

const initialState: IState = {
	square: null,
	isOpen: false
};

function reducer(state: IState | undefined = initialState, action: IAction): IState {
	const { type, square } = action;
	switch (type) {
		case ACTION.OPEN:
			return { square, isOpen: true };
		case ACTION.CLOSE:
		case ACTION.RESET:
		default:
			return { ...initialState };
	}
}

const store: IMutation = createStore(reducer);

store.reset = (): void => {
	store.dispatch({ type: ACTION.RESET });
};

store.open = (campaign: any): void => {
	store.dispatch({ type: ACTION.OPEN, campaign });
};

store.close = (): void => {
	store.dispatch({ type: ACTION.CLOSE });
};

export default store;
