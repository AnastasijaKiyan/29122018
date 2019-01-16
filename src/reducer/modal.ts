import { createStore, Store, Reducer, Action } from "redux";
import ICompany from "../type/ICompany";

export interface IState {
	campaign: ICompany | null;
	isOpen: boolean;
}

enum ACTION {
	OPEN,
	CLOSE,
	RESET
}

interface IAction extends Action<ACTION>, IState {}

interface IMutation extends Store<IState> {
	open: (campaign: ICompany) => void;
	close(): void;
	reset(): void;
}

const initialState: IState = {
	campaign: null,
	isOpen: false
};

function reducer(state: IState | undefined = initialState, action: IAction): IState {
	const { type, campaign } = action;
	switch (type) {
		case ACTION.OPEN:
			return { campaign, isOpen: true };
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

store.open = (campaign: ICompany): void => {
	store.dispatch({ type: ACTION.OPEN, campaign });
};

store.close = (): void => {
	store.dispatch({ type: ACTION.CLOSE });
};

export default store;
