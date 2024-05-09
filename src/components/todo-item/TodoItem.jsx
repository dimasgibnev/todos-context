import { useContext } from 'react';
import styles from './TodoItem.module.css';
import { AppContext } from '../../context';

export const TodoItem = ({ id, index, completed, title}) => {
	const { handleCheck } = useContext(AppContext);
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
