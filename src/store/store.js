import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { statusReducer, todoReducer, errorReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	status: statusReducer,
	todo: todoReducer,
	error: errorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
