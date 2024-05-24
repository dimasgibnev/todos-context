import { actions } from '../actions/actions';

export const setIsCreatingTodo = (isCreating) => {
	return {
		type: actions.SET_CREATING_TODO,
		payload: isCreating,
	};
};
