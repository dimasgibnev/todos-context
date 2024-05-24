import { actions } from '../actions/actions';

export const setIsUpdating = (isUpdating) => {
	return {
		type: actions.SET_IS_UPDATING,
		payload: isUpdating,
	};
};
