import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import CoinPage from "../pages/CoinPage";

const App = () => {
    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState({})
    const [coinsLoading, setCoinsLoading] = useState(false);

    const loadCoins = async () => {
        try {
            setCoinsLoading(true);
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h%2C7d`);
            setCoins(res.data);
            setCoinsLoading(false);
        } catch (err) {
            console.error(err);
            setCoinsLoading(false);
        }
    };

    useEffect(() => {
        loadCoins();
    }, [])
    
    return (
        <Routes>
            <Route path="/" element={<Home coins={coins} coinsLoading={coinsLoading} setCoin={setCoin}/>} />
            <Route path="coin-info/:id" element={<CoinPage coin={coin}/>} />
        </Routes>
    )
}

export default App;