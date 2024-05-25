import { fetchTodoData } from './fetchTodoData';
import { setErrorDeleting } from './setErrorDeleting';
import { setIsDeleting } from './setIsDeleting';

export const requestDeleteTodo = (id) => {
	return (dispatch) => {
		setIsDeleting(true);
		return fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				dispatch(fetchTodoData());
			})
			.catch((error) => dispatch(setErrorDeleting(error)))
			.finally(() => setIsDeleting(false));
	};
};
