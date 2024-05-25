import {actions} from '../actions/actions'

export const addTodo = (todo) => {
	return {
		type: actions.ADD_TODO,
		payload: todo
	}
}