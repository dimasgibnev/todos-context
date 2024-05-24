import { actions } from '../actions/actions';

export const setIsDeleting = (isDeleting) => {
	return {
		type: actions.SET_IS_DELETING,
		payload: isDeleting,
	};
};
