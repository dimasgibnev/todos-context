import { useDispatch, useSelector } from 'react-redux';
import { MyButton } from '..';
import styles from './InputForm.module.css';
import { requestAddTodo, setTodoText } from '../../store/action-creators';

export const InputForm = ({ handleSubmit, id, label, setIsInputOpen }) => {
	const { todoText } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				requestAddTodo(id, todoText);
				setIsInputOpen(false);
			}}
			className={styles.form}
		>
			<input
				type="text"
				value={todoText}
				onChange={(e) => dispatch(setTodoText(e.target.value))}
			/>
			<MyButton
				onClick={() => {}}
				type={'submit'}
				name={'add-todo'}
				label={label}
			/>
		</form>
	);
};
