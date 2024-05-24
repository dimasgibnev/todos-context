import { actions } from '../actions/actions';

const initialStatusState = {
	isLoading: false,
	isUpdating: false,
	isCreating: false,
	isDeleting: false,
	createInputOpen: false,
	updateInputOpen: false,
};

export const statusReducer = (state = initialStatusState, action) => {
	switch (action.type) {
		case actions.SET_IS_LOADING: {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		case actions.SET_IS_CREATING: {
			return {
				...state,
				isCreating: action.payload,
			};
		}
		case actions.SET_IS_DELETING: {
			return {
				...state,
				isDeleting: action.payload,
			};
		}
		case actions.SET_IS_UPDATING: {
			return {
				...state,
				isUpdating: action.payload,
			};
		}
		case actions.SET_CREATING_TODO: {
			return {
				...state,
				createInputOpen: action.payload,
			};
		}
		case actions.SET_UPDATING_TODO: {
			return {
				...state,
				updateInputOpen: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
