import { useDispatch, useSelector } from 'react-redux';
import { MyButton } from '..';
import styles from './InputForm.module.css';
import { setTodoText } from '../../store/action-creators';

export const InputForm = ({ request, label, setIsInputOpen }) => {
	const { todoText, editId } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	const addTodo = async () => {
		await dispatch(request(editId, todoText));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
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
				onClick={addTodo}
				type={'submit'}
				name={'add-todo'}
				label={label}
			/>
		</form>
	);
};
