import { actions } from '../actions/actions';

export const setSelectedSort = (isSelected) => {
	return {
		type: actions.SET_SELECTED_SORT,
		payload: isSelected,
	};
};
