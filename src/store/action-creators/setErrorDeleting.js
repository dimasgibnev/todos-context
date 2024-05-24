import { actions } from '../actions/actions';

export const setErrorDeleting = (error) => {
	return {
		type: actions.ERROR_DELETING_TODO,
		payload: error,
	};
};
