import { useState } from 'react';
import styles from './App.module.css';
import { Loader, TodoList, InputForm, MyButton } from './components';
import {
	useRequestAddTodo,
	useRequestGetTodoList,
	useRequestDeleteTodo,
	useRequestUpdateTodo,
} from './hooks';
import { AppContext } from './context';

export const App = () => {
	const [selectedSort, setSelectedSort] = useState(false);
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [todoText, setTodoText] = useState('');
	const [isCreatingInputOpen, setIsCreatingInputOpen] = useState(false);

	const { isCreating, requestAddTodo } = useRequestAddTodo(todoText, setRefreshTodos);
	const { todoList, isLoading, handleCheck } = useRequestGetTodoList(refreshTodos);
	const { requestDeleteTodo, isDeleting } = useRequestDeleteTodo(setRefreshTodos);
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(
		setRefreshTodos,
		todoText,
	);

	const sortTodos = () => {
		setSelectedSort(!selectedSort);
	};

	const handleSearch = ({ target }) => {
		if (target.value) {
			setSearchTerm(target.value.toLowerCase());
		} else {
			setSearchTerm(target.value);
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
		setIsCreatingInputOpen(true);
		setTodoText('');
	};

	return (
		<AppContext.Provider value={{ handleCheck, isCreating, isUpdating, isDeleting }}>
			<div className={styles.App}>
				{isCreatingInputOpen && (
					<InputForm
						setIsInputOpen={setIsCreatingInputOpen}
						label={'Создать'}
						setTodoText={setTodoText}
						todoText={todoText}
						handleSubmit={requestAddTodo}
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
						<TodoList
							todoList={sortedTodos}
							setTodoText={setTodoText}
							todoText={todoText}
							requestUpdateTodo={requestUpdateTodo}
							requestDeleteTodo={requestDeleteTodo}
						/>
					</>
				)}
			</div>
		</AppContext.Provider>
	);
};
