import { actions } from "../actions/actions";

const initialErrorsState = {};

export const errorReducer = (state = initialErrorsState, action) => {
	switch (action.type) {
		case actions.ERROR_CREATING_TODO: {
			return {
				...state,
				ERROR_CREATING: action.payload,
			};
		}
		case actions.ERROR_DELETING_TODO: {
			return {
				...state,
				ERROR_DELETING: action.payload,
			};
		}
		case actions.ERROR_LOADING_TODO_DATA: {
			return {
				...state,
				ERROR_LOADING: action.payload,
			};
		}
		case actions.ERROR_UPDATING_TODO: {
			return {
				...state,
				ERROR_UPDATING: action.payload,
			};
		}

		default:
			return state;
	}
};
