import styles from './MyButton.module.css';
import { useSelector } from 'react-redux';

export const MyButton = ({ name, label, onClick, id, type }) => {
	const { isCreating, isUpdating, isDeleting } = useSelector(state => state.status);

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
