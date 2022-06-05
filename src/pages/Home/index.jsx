import './index.scss'
import axios from 'axios'

import { useEffect, useState } from 'react'

import {ReactComponent as PhoneHero} from '../../assets/svgs/phone-hero.svg'
import {ReactComponent as Bitcoin} from '../../assets/svgs/bitcoin.svg'
import chart from '../../assets/pngs/chart.png'
import store from '../../assets/pngs/store.png'
import calendar from '../../assets/pngs/calendar.png'
import checklist from '../../assets/pngs/checklist.png'
import dashboard from '../../assets/images/coinbase-dashboard-image.webp'
import CloudImage from '../../assets/images/cloud.webp'

const Home = () => {

    const [appData, setAppData] = useState({
        loading: false,
        coins: []
    });
    const capitalize = (val) => val && val[0].toUpperCase() + val.slice(1)

    const getData = async () => {
        setAppData({ loading: true, coins: [] })
        // const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?include_platform=true'
        const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        await axios.get(apiUrl)
        .then((res) => {
            setAppData({loading: false , coins: res.data.slice(0, 3)})
            // console.log(appData.coins);
        }).catch(err => {
            setAppData({loading: false, coins: []})
            return err
        })
    }

    useEffect(() => {
        getData();
    },
    // eslint-disable-next-line
    [])
    
    return ( 
        <div>
           <div className="hero">
               <div className="hero-left">
                  <div className="hero-left__heading">
                      <span>
                        <Bitcoin alt="phone" />
                      </span>
                      <p>Jump start your portfolio</p>
                  </div>
                  <h1>Jump start your crypto portfolio</h1>
                  <h5>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h5>
                  <div className="hero-left__form">
                      <form action="">
                        <input type="text" placeholder='Email address' />
                        <button>Get started</button>
                      </form>
                  </div>
               </div>
               <div className="hero-right">
                   <PhoneHero alt="phone" className="hero-right__phone"/>
               </div>
           </div>
           <div className="prices-table">
               <table>
                   <thead>
                        <tr>
                            <th className='table-row-data table-number'>#</th>
                            <th className='table-row-data'>Name</th>
                            <th className='table-row-data'>Price</th>
                            <th className='table-row-data'>Change</th>
                            <th className='table-row-data'>Chart</th>
                            <th className='table-row-data'>Trade</th>
                        </tr>
                   </thead>
                   <tbody>
                       {
                           appData.coins.map(coin => { 
                               return (
                                <tr key={coin.id} className="table-row">
                                    <td className='table-row-data table-number'>
                                       #
                                    </td>
                                    <td className='table-row-data symbol-name'>
                                        <span>
                                            <img className='table-image' src={ coin.image } alt={ coin.symbol } />
                                        </span>
                                        <span>
                                            { capitalize(coin.id) } { coin.symbol.toUpperCase() } 
                                        </span>
                                    </td>
                                    <td className='table-row-data'>{ coin.current_price.toFixed(2) }</td>
                                    <td className='table-row-data'>{ coin.price_change_percentage_24h.toFixed(2) }%</td>
                                    <td className='table-row-data'>{ coin.id}</td>
                                    <td className='table-row-data'>
                                        <button>Buy</button>
                                    </td>
                                </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
           </div>
           <div className="earn-section">
                <div className="earn-section__left">
                    <h4>Earn up to $7 worth of crypto</h4>
                    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <button>Start earning</button>
                </div>
                <div className="earn-section__right">
                    <div className="earn-section__right_container">
                       <p>Ethernity Chain ERN</p>
                       <p>Earn $3 ERN</p>
                    </div>
                </div>
           </div>
           <div className="create-your-profile">
               <h2 className='text-center'>Create your cryptocurrency portfolio today</h2>
               <p className='text-center'>Coinbase has a variety of features that make it the best place to start trading</p>
           </div>
           <div className="portfolio-display">
                <div className="portfolio-display__left">
                    <div className="portfolio-display__left__card">
                        <div className="portfolio-display__left__card__icon">
                           <img src={chart} alt="a bar chart icon" />
                        </div>
                        <div className="portfolio-display__left__card__content">
                            <h6>Manage your portfolio</h6>
                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                        </div>
                    </div>
                    <div className="portfolio-display__left__card">
                        <div className="portfolio-display__left__card__icon">
                           <img src={calendar} alt="a store bag icon" />
                        </div>
                        <div className="portfolio-display__left__card__content">
                            <h6>Recurring buys</h6>
                            <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                        </div>
                    </div>
                    <div className="portfolio-display__left__card">
                        <div className="portfolio-display__left__card__icon">
                           <img src={store} alt="a store bag icon" />
                        </div>
                        <div className="portfolio-display__left__card__content">
                            <h6>Vault protection</h6>
                            <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
                        </div>
                    </div>
                    <div className="portfolio-display__left__card">
                        <div className="portfolio-display__left__card__icon">
                           <img src={checklist} alt="a store bag icon" />
                        </div>
                        <div className="portfolio-display__left__card__content">
                            <h6>Mobile apps</h6>
                            <p>Stay on top of the markets with the Coinbase app for Android or iOS.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-display__right">
                    <img src={dashboard} alt="a coinbase dashboard visual representation" />
                </div>
           </div>
           <div className="statistics">
                <div className='statistics__container'>
                    <div className="statistics_stat">
                        <h5>$309B</h5>
                        <p>Quarterly volume traded</p>
                    </div>
                    <div className="statistics_stat">
                        <h5>100+</h5>
                        <p>Countries supported</p>
                    </div>
                    <div className="statistics_stat">
                        <h5>98M+</h5>
                        <p>Verified users</p>
                    </div>
               </div>
           </div>
           <div className="earn-cloud">
                <div className="earn-cloud__left earn-section__left">
                    <h4>Earn up to $7 worth of crypto</h4>
                    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <button>Start earning</button>
                </div>
                <div className="earn-cloud__right">
                    <img src={CloudImage} alt="expression of the cloud metaverse" />
                </div>
           </div>
        </div>
     );
}
 
export default Home;