import { useState, useEffect } from "react";
import axios from "axios";

import Coins from "./coins/Coins"

const App = () => {
    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState({})
    const [coinsLoading, setCoinsLoading] = useState(false)

    const loadCoins = async () => {
        try {
            setCoinsLoading(true);
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h%2C7d`);
            setCoins(res.data);
            setCoinsLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadCoins();
    }, [])
    
    useEffect(() => {
        console.log(coins)
    }, [coins])
    
    return (
        <div className="App">
            <Coins coins={coins} 
            coinsLoading={coinsLoading}
            />
        </div>
    )
}

export default App