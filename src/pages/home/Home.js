import React, { useContext, useState } from 'react'
import CryptoList from '../../components/cryptoList/CryptoList'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import TopContent from '../../components/topContent/TopContent';
import { DataContext } from '../../context/dataContext';
import './Home.css';

const Home = () => {
  const { limit, setLimit, cryptoData } = useContext(DataContext);

  return (
    <div className='indexPage'>
      <div className='banner'>
        <span>Buy, sell, & swap your favorite assets.</span>
      </div>
      <Navbar />
      <div className='content'>
        <TopContent />
        <CryptoList />
      </div>
      <div className='pagination'>
        {cryptoData && <button onClick={()=>{setLimit(limit+10)}}>Show More</button>}
      </div>
      <Footer />
    </div>
  )
}

export default Home
