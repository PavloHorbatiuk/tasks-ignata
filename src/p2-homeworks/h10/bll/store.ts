import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { loadingReducer } from './loadingReducer';

const reducers = combineReducers({
	loading: loadingReducer,
});

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
// @ts-ignore
window.store = store; // for dev
