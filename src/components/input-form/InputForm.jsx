import { useDispatch, useSelector } from 'react-redux';
import { MyButton } from '..';
import styles from './InputForm.module.css';
import { setTodoText } from '../../store/action-creators/setTodoText';

export const InputForm = ({ handleSubmit, id, label, setIsInputOpen }) => {
	const { todoText } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(id);
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
