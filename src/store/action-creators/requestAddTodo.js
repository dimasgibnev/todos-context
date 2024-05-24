import { setErrorCreating } from './setErrorCreating';
import { setIsCreating } from './setIsCreating';

export const requestAddTodo = (todoText) => {
	return (dispatch) => {
		dispatch(setIsCreating(true));
		return fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoText,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {})
			.catch((error) => dispatch(setErrorCreating(error)))
			.finally(() => {
				dispatch(setIsCreating(true));
			});
	};
};
