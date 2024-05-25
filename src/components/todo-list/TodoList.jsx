import { MyButton, TodoItem } from '..';
import styles from './TodoList.module.css';
import { InputForm } from '../input-form/InputForm';
import {
	requestDeleteTodo,
	requestUpdateTodo,
	setTodoText,
	setEditId,
} from '../../store/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const TodoList = ({ todoList }) => {
	const { todoText, editId } = useSelector((state) => state.todo);
	const dispatch = useDispatch();
	const [isUpdating, setIsUpdating] = useState(false);

	const onEditTodoTitle = (id) => {
		const [editingTodo] = todoList.filter((todo) => id === todo.id);
		dispatch(setTodoText(editingTodo.title));
	};

	const openUpdateForm = (id) => {
		setIsUpdating(true);
		dispatch(setEditId(id));
		onEditTodoTitle(id);
	};

	return (
		<div>
			{isUpdating && (
				<InputForm
					setIsInputOpen={setIsUpdating}
					label={'Изменить'}
					request={requestUpdateTodo}
				/>
			)}
			{todoList.map(({ id, title, completed }, index) => (
				<div className={styles['todo-container']} key={id}>
					<TodoItem id={id} title={title} completed={completed} index={index} />
					<MyButton
						id={id}
						onClick={() => {
							dispatch(requestDeleteTodo(id))
						}}
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
