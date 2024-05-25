import { MyButton, TodoItem } from '..';
import styles from './TodoList.module.css';
import { InputForm } from '../input-form/InputForm';
import {
	requestDeleteTodo,
	requestUpdateTodo,
	setUpdatingTodo,
	setTodoText,
	setEditId,
} from '../../store/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const TodoList = () => {
	const { todoList, todoText, editId } = useSelector(
		(state) => state.todo,
	);
	const dispatch = useDispatch();
	const [isUpdating, setIsUpdating] = useState(false);

	const onEditTodoTitle = (id) => {
		const [editingTodo] = todoList.filter((todo) => id === todo.id);
		dispatch(setTodoText(editingTodo.title));
	};

	const handleUpdate = (id) => {
		dispatch(setEditId(id));
		return dispatch(requestUpdateTodo(id, todoText));
	};

	const openUpdateForm = (id) => {
		setIsUpdating(true)
		dispatch(setEditId(id));
		onEditTodoTitle(id);
	};

	return (
		<div>
			{isUpdating && (
				<InputForm
					setIsInputOpen={setIsUpdating}
					label={'Изменить'}
					handleSubmit={() => handleUpdate(editId)}
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
							openUpdateForm(id);
						}}
						name={'update-btn'}
						label={'Изменить'}
					/>
				</div>
			))}
		</div>
	);
};
