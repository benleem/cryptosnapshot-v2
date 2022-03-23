import { Link } from "react-router-dom";
import styles from "./info-error.module.css";

const InfoError = () => {
	return (
		<div className={styles.infoError}>
			<p>
				Something went wrong, please try again or return to the <Link to={"/"}>Home</Link> page
			</p>
		</div>
	);
};

export default InfoError;
