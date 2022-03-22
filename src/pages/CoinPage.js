import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import CoinInfoHeader from "../components/info/CoinInfoHeader.js";
import CoinInfoGraph from "../components/info/CoinInfoGraph.js";
import InfoLoading from "../components/info/InfoLoading.js";
import InfoError from "../components/info/InfoError.js";

const CoinPage = () => {
	var coinId = useLocation();
	coinId = coinId.pathname.replace("/coin-info/", "");
	const [coinCardData, setCoinCardData] = useState({});
	const [coinGraphData, setCoinGraphData] = useState([]);
	const [coinLoading, setCoinLoading] = useState(false);
	const [coinError, setCoinError] = useState(false);

	const getCoinData = async () => {
		const endpoints = [
			`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`,
			`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`,
		];
		try {
			setCoinLoading(true);
			const data = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
			setCoinCardData(data[0].data);
			setCoinGraphData(data[1].data.prices);
			setCoinLoading(false);
		} catch (err) {
			setCoinLoading(false);
			setCoinError(true);
		}
	};

	useEffect(() => {
		getCoinData();
	}, []);

	const displayCoinInfo = () => {
		if (coinError === true) {
			return <InfoError />;
		}
		return (
			<>
				<CoinInfoHeader coin={coinCardData} />
				<CoinInfoGraph graphData={coinGraphData} />
			</>
		);
	};

	return <>{coinLoading ? <InfoLoading /> : <>{displayCoinInfo()}</>}</>;
};

export default CoinPage;
