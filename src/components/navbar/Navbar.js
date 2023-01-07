import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/dataContext';
import './Navbar.css';

const Navbar = () => {
    const { currency, setCurrency } = useContext(DataContext);
    const [showCurr, setShowCurr] = useState(false);
  
    const handleClickCurr = (value)=>{
        setShowCurr(false);
        setCurrency(value);
    }
  return (
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
  )
}

export default Navbar
