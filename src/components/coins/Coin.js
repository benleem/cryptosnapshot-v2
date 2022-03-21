import { Link } from "react-router-dom";

import styles from "./coin.module.css";

const Coin = ({ coin }) => {
	return (
		<div className={styles.coin}>
			<div className={styles.coinLabel}>
				<img className={styles.coinImg} src={coin.image} alt="coin" />
				<Link className={styles.coinName} to={`coin-info/${coin.id}`}>
					{coin.name}
				</Link>
				<p className={styles.coinSymbol}>{coin.symbol}</p>
			</div>
			<div className={styles.coinStats}>
				<p className={styles.coinPrice}>${coin.current_price}</p>
				<p
					className={
						coin.price_change_percentage_24h_in_currency > 0 ? styles.textGreen : styles.textRed
					}
				>
					{Math.round(coin.price_change_percentage_24h_in_currency * 100) / 100}
				</p>
				<p
					className={
						coin.price_change_percentage_7d_in_currency > 0 ? styles.textGreen : styles.textRed
					}
				>
					{Math.round(coin.price_change_percentage_7d_in_currency * 100) / 100}
				</p>
				<p className={styles.coinVolume}>${coin.total_volume.toLocaleString("en-US")}</p>
				<p className={styles.coinCap}>${coin.market_cap.toLocaleString("en-US")}</p>
			</div>
		</div>
	);
};

export default Coin;
