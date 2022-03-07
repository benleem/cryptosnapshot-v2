import styles from './coin.module.css';

const Coin = ({ coin }) => {
  return (
    <div className={styles.coin}>
        <p>{coin.name}</p>
    </div>
  )
}

export default Coin