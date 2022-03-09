import Coin from "./Coin";

import styles from './coins.module.css';

const Coins = ({ coins, coinsLoading, setCoin }) => {
    if(coinsLoading === true){
        return(
            <h2 className={styles.coinsLoading}>Loading...</h2>
        )
    }
    else{
        return (
            <div className={styles.coinsContainer}>
                {coins.map(coin => <Coin key={coin.id} coin={coin} setCoin={setCoin}/>)}
            </div>
        )
    }
}

export default Coins