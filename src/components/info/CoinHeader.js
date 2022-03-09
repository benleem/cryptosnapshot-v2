import styles from './coin-header.module.css';

const CoinHeader = ({ coin }) => {
    return (
        <div className={styles.coinHeader}>
            <p>{coin}</p>
        </div>
    )
}

export default CoinHeader