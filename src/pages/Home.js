import Header from '../components/header/Header.js'
import Coins from '../components/coins/Coins.js'

const Home = ({ coins, coinsLoading, setCoin }) => {
    return (
        <>
            <Header/>
            <Coins coins={coins} coinsLoading={coinsLoading} setCoin={setCoin}/>
        </>
    )
}

export default Home