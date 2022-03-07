import Coin from "./Coin";

import styles from './coins.module.css';

const Coins = ({ coins, coinsLoading }) => {
    if(coinsLoading === true){
        return(
            <p className={styles.coinsLoading}>Coins Loading</p>
        )
    }
    else{
        return (
            <div className={styles.coinsContainer}>
                {coins.map(coin => <Coin key={coin.id} coin={coin}/>)}
            </div>
        )
    }
}

export default Coins