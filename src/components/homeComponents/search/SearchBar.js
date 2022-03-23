import styles from "./search-bar.module.css";

const SearchBar = ({ setSearchInput }) => {
	return (
		<div className={styles.searchBar}>
			<img src="./img/search.svg" alt="" />
			<input
				type="text"
				placeholder="Name/symbol"
				onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
			/>
		</div>
	);
};

export default SearchBar;
