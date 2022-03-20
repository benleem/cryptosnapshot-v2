import { useState, useEffect } from "react";

import Header from "../components/header/Header.js";
import SearchBar from "../components/search/SearchBar.js";
import Coins from "../components/coins/Coins.js";

const Home = ({ coins, coinsLoading }) => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<>
			<Header />
			<SearchBar setSearchInput={setSearchInput} />
			<Coins coinsLoading={coinsLoading} coins={coins} searchInput={searchInput} />
		</>
	);
};

export default Home;
