import { MyButton, TodoItem } from '..';
import styles from './TodoList.module.css';
import { InputForm } from '../input-form/InputForm';
import { useState } from 'react';

export const TodoList = ({
	todoList,
	setTodoText,
	todoText,
	requestUpdateTodo,
	requestDeleteTodo,
}) => {
	const [isInputOpen, setIsInputOpen] = useState(false);
	const [editId, setEditId] = useState(null);
	const onEditTodoTitle = (id) => {
		const [editingTodo] = todoList.filter((todo) => id === todo.id);
		setTodoText(editingTodo.title);
	};

	const handleUpdate = (id) => {
		setEditId(id);
		return requestUpdateTodo(id);
	};

	const openEditForm = (id) => {
		setEditId(id);
		onEditTodoTitle(id);
		setIsInputOpen(true);
	};

	return (
		<div>
			{isInputOpen && (
				<InputForm
					setIsInputOpen={setIsInputOpen}
					label={'Изменить'}
					setTodoText={setTodoText}
					handleSubmit={() => handleUpdate(editId)}
					todoText={todoText}
				/>
			)}
			{todoList.map(({ id, title, completed }, index) => (
				<div className={styles['todo-container']} key={id}>
					<TodoItem id={id} title={title} completed={completed} index={index} />
					<MyButton
						id={id}
						onClick={requestDeleteTodo}
						name={'delete-btn'}
						label={'Удалить'}
					/>
					<MyButton
						id={id}
						onClick={() => {
							openEditForm(id);
						}}
						name={'update-btn'}
						label={'Изменить'}
					/>
				</div>
			))}
		</div>
	);
};
