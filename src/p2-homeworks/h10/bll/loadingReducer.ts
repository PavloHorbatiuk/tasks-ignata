enum ReducerType {
	IS_LOADING = 'isLoading',
}
interface initialStateType {
	isLoading: boolean;
}

const initState: initialStateType = {
	isLoading: false,
};

export const loadingReducer = (
	state: initialStateType = initState,
	action: ActionLoadingType
): initialStateType => {
	// fix any
	switch (action.type) {
		case ReducerType.IS_LOADING: {
			return { ...state, isLoading: action.payload };
		}
		default:
			return state;
	}
};

export const loadingAC = (status: boolean): loadingAcType =>
	({
		type: ReducerType.IS_LOADING,
		payload: status,
	} as const); // fix any

type loadingAcType = { type: ReducerType.IS_LOADING; payload: boolean };
type ActionLoadingType = loadingAcType;
