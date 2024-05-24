import { actions } from "../actions/actions";

export const setTodoList = (todoData) => {
	return {
		type: actions.SET_TODO_LIST,
		payload: todoData,
	};
};
