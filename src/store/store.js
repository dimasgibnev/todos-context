import { createStore, applyMiddleware, combineReducers } from 'redux';
import { statusReducer, todoReducer, errorReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	status: statusReducer,
	todo: todoReducer,
	error: errorReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
