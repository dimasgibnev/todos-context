import { useState } from "react";

export const useRequestUpdateTodo = (setRefreshTodos, todoText) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdateTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoText,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setRefreshTodos((prev) => !prev);
			})
			.catch((error) => console.log('Ошибка', error))
			.finally(() => setIsUpdating(false));
	};

	return { requestUpdateTodo };
};
