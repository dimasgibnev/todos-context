import { setErrorCreating } from './setErrorCreating';
import { setIsCreating } from './setIsCreating';
import { setRefreshTodos } from './setRefreshTodos';

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
			.then((response) => {
				dispatch(setRefreshTodos());
			})
			.catch((error) => dispatch(setErrorCreating(error)))
			.finally(() => {
				dispatch(setIsCreating(true));
			});
	};
};
