import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Loader, TodoList, InputForm, MyButton } from './components';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTodoData,
	requestAddTodo,
	setSelectedSort,
	setSearchTerm,
	setTodoText,
} from './store/action-creators';

export const App = () => {
	const { todoList, selectedSort, searchTerm } = useSelector((state) => state.todo);
	const { isLoading } = useSelector((state) => state.status);
	const dispatch = useDispatch();
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		dispatch(fetchTodoData());
	}, []);

	const sortTodos = () => {
		dispatch(setSelectedSort(!selectedSort));
	};

	const handleSearch = ({ target }) => {
		if (target.value) {
			dispatch(setSearchTerm(target.value.toLowerCase()));
		} else {
			dispatch(setSearchTerm(target.value));
		}
	};

	const filteredTodos = todoList.filter((todo) => {
		if (todo.title) {
			return todo.title.toLowerCase().includes(searchTerm);
		}
	});

	const getSortedTodos = () => {
		if (selectedSort) {
			return [...todoList].sort((a, b) => a['title'].localeCompare(b['title']));
		} else if (searchTerm) {
			return filteredTodos;
		}
		return todoList;
	};

	const sortedTodos = getSortedTodos();

	const createTodo = () => {
		setIsCreating(true);
		dispatch(setTodoText(''));
	};

	return (
		<div className={styles.App}>
			{isCreating && (
				<InputForm
					label={'Создать'}
					request={requestAddTodo}
					setIsInputOpen={setIsCreating}
				/>
			)}
			{isLoading ? (
				<Loader />
			) : (
				<>
					<MyButton
						name={'todo-add-btn'}
						label={'Добавить задачу'}
						onClick={createTodo}
					/>

					<MyButton
						onClick={sortTodos}
						name={'todo-sort-btn'}
						label={selectedSort ? 'По созданию' : 'По алфавиту'}
					/>

					<input
						placeholder="Поиск..."
						className={styles.input}
						type="text"
						value={searchTerm}
						onChange={handleSearch}
					/>
					<TodoList todoList={sortedTodos} />
				</>
			)}
		</div>
	);
};
