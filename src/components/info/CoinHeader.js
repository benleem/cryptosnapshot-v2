import { useEffect } from "react";

import styles from "./coin-header.module.css";

const CoinHeader = ({ coin }) => {
	useEffect(() => {
		console.log(coin);
	}, []);

	return (
		<div className={styles.coinHeader}>
			<p>Rank #{coin.market_cap_rank}</p>
			<div className={styles.coinTitleContainer}>
				<img className={styles.coinImg} src={coin.image?.small} alt="coin" />
				<h2>
					{coin?.id} ({coin?.symbol})
				</h2>
			</div>
			<div className={styles.priceContainer}>
				<p className={styles.currentPrice}>${coin.market_data?.current_price.usd}</p>
				<p className={coin.market_data?.price_change_percentage_24h_in_currency.usd > 0 ? styles.textGreen : styles.textRed}>
					{Math.round(coin.market_data?.price_change_percentage_24h_in_currency.usd * 100) / 100}
				</p>
			</div>
			<div className={styles.infoContainer}>
				<p>Trading Volume: ${coin.market_data?.total_volume.usd.toLocaleString("en-US")}</p>
				<p>Market Cap: ${coin.market_data?.market_cap.usd.toLocaleString("en-US")}</p>
			</div>
		</div>
	);
};

export default CoinHeader;
