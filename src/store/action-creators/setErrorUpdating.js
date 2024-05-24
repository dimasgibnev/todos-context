import { actions } from '../actions/actions';

export const setErrorUpdating = (error) => {
	return {
		type: actions.ERROR_UPDATING_TODO,
		payload: error,
	};
};
