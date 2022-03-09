import { useEffect, useState } from "react";
import axios from "axios";

import CoinHeader from '../components/info/CoinHeader.js'

const CoinPage = ({ coin }) => {
    const [coinData, setCoinData] = useState({});
    const [coinLoading, setCoinLoading] = useState(false);

    const getCoinData = async() => {
        try {
            setCoinLoading(true);
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`);
            setCoinData(res.data);
            setCoinLoading(false);
        } catch (err) {
            console.error(err);
            setCoinLoading(false);
        }
    }

    useEffect(() => {
        getCoinData();
    }, [])

    useEffect(() => {
        console.log(coinData)
    }, [coinData])
    
    return (
        <>
            <CoinHeader coin={coin}/>
        </>
    )
}

export default CoinPage