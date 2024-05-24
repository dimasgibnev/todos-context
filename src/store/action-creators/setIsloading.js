import { actions } from "../actions/actions";

export const setIsLoading = (isLoading) => {
	return {
		type: actions.SET_IS_LOADING,
		payload: isLoading,
	};
};
