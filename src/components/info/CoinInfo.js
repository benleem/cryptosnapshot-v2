import styles from "./coin-info.module.css";

const CoinInfo = ({ coin }) => {
	return (
		<div className={styles.coinInfo}>
			<p>{coin.description?.en}</p>
		</div>
	);
};

export default CoinInfo;
