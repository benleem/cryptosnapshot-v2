import { useEffect } from "react";

import CoinHeader from '../components/info/CoinHeader.js'

const CoinPage = ({ coin }) => {
    useEffect(() => {
        console.log(coin)
    }, [])

    return (
        <>
            <CoinHeader coin={coin}/>
        </>
    )
}

export default CoinPage