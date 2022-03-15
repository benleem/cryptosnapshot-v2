import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import CoinHeader from '../components/info/CoinHeader.js';
import CoinInfo from "../components/info/CoinInfo.js";

const CoinPage = () => {
    var coinId = useLocation();
    coinId = coinId.pathname.replace('/coin-info/', '');
    const [coinData, setCoinData] = useState({});
    const [coinLoading, setCoinLoading] = useState(false);
    const [coinError, setCoinError] = useState(false)

    const getCoinData = async() => {
        try {
            setCoinLoading(true);
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`);
            setCoinData(res.data);
            setCoinLoading(false);
        } catch (err) {
            console.error(err);
            setCoinLoading(false);
            setCoinError(true);
        }
    }

    useEffect(() => {
        getCoinData();
    }, [])

    if (coinError === true) {
        return(
            <p style={{color: 'white'}}>This coin doesnt exist</p>
        )
    }
    
    return (
        <>
            {coinLoading
                ? <p style={{color: 'white'}}>Coin data loading...</p> 
                : <>
                    <CoinHeader coin={coinData}/>
                </>
            }
        </>
    )
}

export default CoinPage;