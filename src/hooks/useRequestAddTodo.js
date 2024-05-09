import { useState } from 'react';

export const useRequestAddTodo = (todoText, setRefreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddTodo = () => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
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
			.finally(() => {
				setIsCreating(false)
			});
	};

	return { isCreating, requestAddTodo };
};
