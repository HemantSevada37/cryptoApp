import React from 'react'
import './TopContent.css';

const TopContent = () => {
  return (
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
  )
}

export default TopContent
