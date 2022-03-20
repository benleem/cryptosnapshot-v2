import styles from "./header.module.css";

const Header = () => {
	return (
		<div className={styles.homeHeader}>
			<h1>Crypto Snapshot</h1>
			<img src="./img/logo.png" alt="" />
		</div>
	);
};

export default Header;
