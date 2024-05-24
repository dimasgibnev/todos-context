import { actions } from '../actions/actions';

export const setCreatingTodo = (isCreating) => {
	return {
		type: actions.SET_CREATING_TODO,
		payload: isCreating,
	};
};
