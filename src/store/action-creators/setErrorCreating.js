import { actions } from '../actions/actions';

export const setErrorCreating = (error) => {
	return {
		type: actions.ERROR_CREATING_TODO,
		payload: error,
	};
};
