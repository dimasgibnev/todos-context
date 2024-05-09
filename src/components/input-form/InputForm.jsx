import { MyButton } from '..';
import styles from './InputForm.module.css';


export const InputForm = ({ handleSubmit, todoText, setTodoText, id, label, setIsInputOpen }) => {

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
				onChange={(e) => setTodoText(e.target.value)}
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
