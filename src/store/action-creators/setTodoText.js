import { actions } from '../actions/actions';

export const setTodoText = (todoText) => {
	return {
		type: actions.SET_TODO_TEXT,
		payload: todoText,
	};
};
