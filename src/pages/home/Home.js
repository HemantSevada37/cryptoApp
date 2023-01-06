import React, { useContext, useState } from 'react'
import CryptoList from '../../components/cryptoList/CryptoList'
import { DataContext } from '../../context/dataContext';
import './Home.css';

const Home = () => {
  const { limit, setLimit, currency, setCurrency } = useContext(DataContext);
  const [showCurr, setShowCurr] = useState(false);
  
  const handleClickCurr = (value)=>{
    setShowCurr(false);
    setCurrency(value);
  }

  return (
    <div className='indexPage'>
      <div className='banner'>
        <span>Buy, sell, & swap your favorite assets.</span>
      </div>
      <div className='navbar'>
        <div className='nbLeft'>
          <div>Coins</div>
          <div>Exchanges</div>
          <div>Swap</div>
        </div>
        <div className='nbCenter'>
          <div>coinCap</div>
        </div>
        <div className='nbRight'>
          <div className='currData'
            onClick={()=>{setShowCurr(!showCurr)}}>
            <span>{currency}</span>
            {showCurr && 
              <div className='currDataTable'>
                <div onClick={()=>{handleClickCurr("USD")}}>USD</div>
                <div onClick={()=>{handleClickCurr("INR")}}>INR</div>
                <div onClick={()=>{handleClickCurr("EUR")}}>EUR</div>
              </div>}
          </div>
          <div>Eng</div>
          <div>Settings</div>
        </div>
      </div>
      <div className='content'>
        <div className='topContent'>
          <div>
            <span>MARKET CAP</span>
            <span>₹972.32B</span>
          </div>
          <div>
            <span>EXCHANGE VOL</span>
            <span>₹24.82B</span>
          </div>
          <div>
            <span>ASSETS</span>
            <span>73</span>
          </div>
          <div>
            <span>EXCHANGES</span>
            <span>12,761</span>
          </div>
          <div>
            <span>BTC DOM INDEX</span>
            <span>33.3%</span>
          </div>
          <div>
            <span>MARKETCAP</span>
            <span>₹972.32B</span>
          </div>
          <div className='mbView'>Market Snapshot</div>
        </div>
        <CryptoList />
      </div>
      <div className='pagination'>
        <button onClick={()=>{setLimit(limit+10)}}>Show More</button>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Home
