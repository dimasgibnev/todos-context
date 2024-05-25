import { TodoList } from '../../components';
import { actions } from '../actions/actions';

const initialTodoState = {
	todoList: [],
	selectedSort: false,
	searchTerm: '',
	todoText: '',
	editId: null,
};

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case actions.SET_TODO_LIST: {
			return {
				...state,
				todoList: action.payload,
			};
		}
		case actions.SET_SELECTED_SORT: {
			return {
				...state,
				selectedSort: action.payload,
			};
		}
		case actions.SET_SEARCH_TERM: {
			return {
				...state,
				searchTerm: action.payload,
			};
		}
		case actions.SET_TODO_TEXT: {
			return {
				...state,
				todoText: action.payload,
			};
		}
		case actions.SET_EDIT_ID: {
			return {
				...state,
				editId: action.payload,
			};
		}
		case actions.ADD_TODO: {
			return {
				...state,
				TodoList: [...state.todoList, action.payload],
			};
		}
		default: {
			return state;
		}
	}
};
