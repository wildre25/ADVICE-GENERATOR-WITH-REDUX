import styles from "./spinner.module.css";

const Spinner = () => {
	return (
		<div className="spinner-container">
			<div className={ styles.loader }></div>
		</div>
	)
}

export default Spinner;
