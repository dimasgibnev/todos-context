import { actions } from "../actions/actions"

export const setUpdatingTodo = (isUpdating) => {
	return {
		type: actions.SET_UPDATING_TODO,
		payload: isUpdating
	}
}