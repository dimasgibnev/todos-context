import { setErrorUpdating } from './setErrorUpdating';
import { setIsUpdating } from './setIsUpdating';

export const requestUpdateTodo = (id, todoText) => {
	return (dispatch) => {
		dispatch(setIsUpdating(true));
		return fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoText,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {})
			.catch((error) => dispatch(setErrorUpdating(error)))
			.finally(() => dispatch(setIsUpdating(false)));
	};
};
