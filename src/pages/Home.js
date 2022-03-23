import { useState } from "react";

import Header from "../components/homeComponents/header/Header.js";
import SearchBar from "../components/homeComponents/search/SearchBar.js";
import Coins from "../components/homeComponents/coins/Coins.js";

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
