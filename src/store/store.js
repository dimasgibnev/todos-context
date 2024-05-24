import { createStore, applyMiddleware, combineReducers } from 'redux';
import { statusReducer, todoReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({ status: statusReducer, todo: todoReducer });

export const store = createStore(reducer, applyMiddleware(thunk));
