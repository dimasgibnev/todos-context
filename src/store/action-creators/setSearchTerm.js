import { actions } from '../actions/actions';

export const setSearchTerm = (searchTerm) => {
	return {
		type: actions.SET_SEARCH_TERM,
		payload: searchTerm,
	};
};
