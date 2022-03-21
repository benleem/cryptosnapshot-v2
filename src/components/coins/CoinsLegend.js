import { Link } from "react-router-dom";

import styles from "./coin.module.css";

const CoinsLegend = () => {
	return (
		<div className={styles.coin}>
			<div className={styles.coinLabel}>
				<img className={styles.coinImg} src="./img/logo.png" alt="coin" />
				<Link className={styles.coinName} to={`/`}>
					Example
				</Link>
				<p className={styles.coinSymbol}>EX</p>
			</div>
			<div className={styles.coinStats}>
				<p className={styles.coinPrice}>Price</p>
				<p className={styles.textRed}>%24h</p>
				<p className={styles.textGreen}>%7d</p>
				<p className={styles.coinVolume}>Volume</p>
				<p className={styles.coinCap}>Market Cap</p>
			</div>
		</div>
	);
};

export default CoinsLegend;
