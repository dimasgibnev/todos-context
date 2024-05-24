import { actions } from '../actions/actions';

export const setIsCreating = (isCreating) => {
	return {
		type: actions.SET_IS_CREATING,
		payload: isCreating,
	};
};
