import Header from '../components/header/Header.js'
import Coins from '../components/coins/Coins.js'

const Home = ({ coins, coinsLoading }) => {
    return (
        <>
            <Header/>
            <Coins coins={coins} coinsLoading={coinsLoading}/>
        </>
    )
}

export default Home