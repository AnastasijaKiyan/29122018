import { createStore, Store, Reducer, Action } from "redux";
import Square from "../component/square/square";
import BtnsTaskAdded from '../component/btnsTaskAdded/btnTaskAdded';
import ICompany from "../type/ICompany";


export interface IState {
	square: ICompany | null;
	isOpen: boolean;
}

enum ACTION {
	OPEN,
	CLOSE,
	RESET
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	open: (square: BtnsTaskAdded) => void;
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

store.open = (square: any): void => {
	store.dispatch({ type: ACTION.OPEN, square });
};

store.close = (): void => {
	store.dispatch({ type: ACTION.CLOSE });
};

export default store;
