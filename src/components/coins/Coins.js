import { useEffect } from "react";

import Coin from "./Coin";

import styles from "./coins.module.css";

const Coins = ({ coinsLoading, coins, searchInput }) => {
	const mapCoins = () => {
		const filteredCoins = coins.filter((coin) => {
			return (
				coin.id.toLowerCase().includes(searchInput) ||
				coin.name.toLowerCase().includes(searchInput) ||
				coin.symbol.toLowerCase().includes(searchInput)
			);
		});
		if (filteredCoins.length === 0) {
			return <h2 className={styles.filterError}>We dont have this coin on record</h2>;
		}
		return filteredCoins.map((coin) => <Coin key={coin.id} coin={coin} />);
	};

	return (
		<>
			{coinsLoading ? (
				<h2 className={styles.coinsLoading}>Loading...</h2>
			) : (
				<div className={styles.coinsContainer}>{mapCoins()}</div>
			)}
		</>
	);
};

export default Coins;
