import { Link } from 'react-router-dom';

import styles from './coin.module.css';

const Coin = ({ coin }) => {
    return (
        <div className={styles.coin}>
            <img src={coin.image} alt="coin"/>
            <Link className={styles.coinName} to={`coin-info/${coin.id}`}>
                {coin.name}
            </Link>
            <p className={styles.upperCase}>{coin.symbol}</p>
            <p>${coin.current_price}</p>
            <p className={coin.price_change_percentage_24h_in_currency > 0? styles.textGreen : styles.textRed}>
                {Math.round(coin.price_change_percentage_24h_in_currency * 100) / 100}
            </p>
            <p className={coin.price_change_percentage_7d_in_currency > 0? styles.textGreen : styles.textRed}>
                {Math.round(coin.price_change_percentage_7d_in_currency * 100) / 100}
            </p>
            <p>${coin.total_volume.toLocaleString("en-US")}</p>
            <p>${coin.market_cap.toLocaleString("en-US")}</p>
        </div>
    )
}

export default Coin