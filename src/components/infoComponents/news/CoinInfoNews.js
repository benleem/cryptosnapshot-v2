import { useEffect } from "react";

import CoinInfoNewsCard from "./CoinInfoNewsCard";

import styles from "./coin-info-news.module.css";

const CoinInfoNews = ({ coinNewsData }) => {
	useEffect(() => {
		console.log(coinNewsData);
	}, []);

	return (
		<>
			<h1 className={styles.newsHeader}>Latest Crypto News</h1>
			<div className={styles.coinInfoNewsContainer}>
				{coinNewsData?.map((newsData) => (
					<CoinInfoNewsCard key={newsData._id} newsData={newsData} />
				))}
			</div>
		</>
	);
};

export default CoinInfoNews;
