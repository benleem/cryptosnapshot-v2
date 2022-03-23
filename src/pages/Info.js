import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import CoinInfoHeader from "../components/infoComponents/header/CoinInfoHeader.js";
import CoinInfoGraph from "../components/infoComponents/graph/CoinInfoGraph.js";
import CoinInfoNews from "../components/infoComponents/news/CoinInfoNews.js";
import InfoLoading from "../components/infoComponents/dataState/InfoLoading.js";
import InfoError from "../components/infoComponents/dataState/InfoError.js";

const CoinPage = ({ coins }) => {
	var coinId = useLocation();
	coinId = coinId.pathname.replace("/coin-info/", "");

	const [coinCardData, setCoinCardData] = useState({});
	const [coinGraphData, setCoinGraphData] = useState([]);
	const [coinNewsData, setCoinNewsData] = useState();
	const [graphRange, setGraphRange] = useState("1");
	const [coinLoading, setCoinLoading] = useState(false);
	const [coinError, setCoinError] = useState(false);

	const getCoinData = async () => {
		const endpoints = [
			{
				method: "GET",
				url: `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`,
			},
			{
				method: "GET",
				url: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${graphRange}`,
			},
			{
				method: "GET",
				url: "https://free-news.p.rapidapi.com/v1/search",
				params: { q: "crypto", lang: "en", page: "1", page_size: "9" },
				headers: {
					"X-RapidAPI-Host": "free-news.p.rapidapi.com",
					"X-RapidAPI-Key": "e0512b8d2amshe716fecaf241f0bp1e8cfajsnd69321534dab",
				},
			},
		];

		try {
			setCoinLoading(true);
			const data = await axios.all(endpoints.map((endpoint) => axios.request(endpoint)));
			setCoinCardData(data[0].data);
			setCoinGraphData(data[1].data.prices);
			setCoinNewsData(data[2].data.articles);
			setCoinLoading(false);
		} catch (err) {
			setCoinLoading(false);
			setCoinError(true);
		}
	};

	useEffect(() => {
		getCoinData();
	}, [graphRange]);

	const displayCoinInfo = () => {
		if (coinError === true) {
			return <InfoError />;
		}
		return (
			<>
				<CoinInfoHeader coin={coinCardData} />
				<CoinInfoGraph
					graphData={coinGraphData}
					graphRange={graphRange}
					setGraphRange={setGraphRange}
				/>
				<CoinInfoNews coinNewsData={coinNewsData} />
			</>
		);
	};

	return <>{coinLoading ? <InfoLoading /> : <>{displayCoinInfo()}</>}</>;
};

export default CoinPage;
