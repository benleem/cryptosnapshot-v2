import styles from "./coin-info-news-card.module.css";

const CoinInfoNewsCard = ({ newsData }) => {
	return (
		<div className={styles.coinInfoNewsCard}>
			<div className={styles.imgContainer}>
				<img src={newsData?.media} alt="" />
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.topHalf}>
					<p className={styles.topic}>{newsData?.topic}</p>
					<a className={styles.link} href={newsData?.link}>
						{newsData?.title}
					</a>
					<p className={styles.summary}>{newsData?.summary}</p>
				</div>
				<div className={styles.bottomHalf}>
					<p className={styles.publisher}>{newsData?.clean_url}</p>
					<p className={styles.publisherDate}>{newsData?.published_date}</p>
				</div>
			</div>
		</div>
	);
};

export default CoinInfoNewsCard;
