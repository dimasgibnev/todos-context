import styles from './MyButton.module.css';

export const MyButton = ({ name, label, onClick, id, type }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${styles.btn} ${styles[name]}`}
		>
			{label}
		</button>
	);
};
