import { useContext } from 'react';
import styles from './MyButton.module.css';
import { AppContext } from '../../context';

export const MyButton = ({ name, label, onClick, id, type }) => {
	const { isCreating, isUpdating, isDeleting } = useContext(AppContext);

	return (
		<button
			type={type}
			onClick={() => onClick(id)}
			disabled={isCreating || isDeleting || isUpdating}
			className={`${styles.btn} ${styles[name]}`}
		>
			{label}
		</button>
	);
};
