import styles from './TodoItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoList } from '../../store/action-creators/setTodoList';

export const TodoItem = ({ id, index, completed, title }) => {
	const dispatch = useDispatch();
	const { todoList } = useSelector((state) => state.todo);

	const handleCheck = (id) => {
		const updatedList = todoList.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		dispatch(setTodoList(updatedList));
	};

	return (
		<div className={styles.todo}>
			<div className={styles['todo__content']}>
				<span>{index + 1}.</span>
				<strong className={completed ? styles['todo__completed'] : ''}>
					{title}
				</strong>
				<input
					className={styles.checkbox}
					type="checkbox"
					name="completed"
					checked={completed}
					id={id}
					onChange={() => handleCheck(id)}
				/>
			</div>
		</div>
	);
};
