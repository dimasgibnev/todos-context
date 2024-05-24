import { actions } from '../actions/actions';

export const setErrorLoading = (error) => {
	return {
		type: actions.ERROR_LOADING_TODO_DATA,
		payload: error,
	};
};
