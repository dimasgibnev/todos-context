import styles from './MyButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const MyButton = ({ name, label, onClick, id, type }) => {
	const { isCreating, isUpdating, isDeleting } = useSelector((state) => state.status);
	const dispatch = useDispatch();
	return (
		<button
			type={type}
			onClick={() => dispatch(onClick(id))}
			disabled={isCreating || isDeleting || isUpdating}
			className={`${styles.btn} ${styles[name]}`}
		>
			{label}
		</button>
	);
};
