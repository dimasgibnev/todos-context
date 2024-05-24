import { actions } from './actions/actions';

const initialStatusState = {
	isLoading: false,
};

export const statusReducer = (state = initialStatusState, action) => {
	switch (action.type) {
		case actions.SET_IS_LOADING: {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

const initialTodoState = {
	todoList: [],
	selectedSort: false,
	searchTerm: '',
	todoText: '',
	isCreatingTodo: false

};

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case actions.SET_TODO_LIST: {
			return {
				...state,
				todoList: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
