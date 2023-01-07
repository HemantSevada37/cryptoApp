import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/dataContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { ThemeContext } from '../../context/themeContext';
import './Navbar.css';



const Navbar = () => {
    const { currency, setCurrency } = useContext(DataContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
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
            <div className='currDataIcon'>
              <span>{currency}</span><ArrowDropDownIcon/>
            </div>
            {showCurr && 
              <div className='currDataTable'>
                <div onClick={()=>{handleClickCurr("USD")}}>USD</div>
                <div onClick={()=>{handleClickCurr("INR")}}>INR</div>
                <div onClick={()=>{handleClickCurr("EUR")}}>EUR</div>
              </div>}
          </div>
          <div>Eng</div>
          <div className='nbTheme' onClick={()=>{setDarkMode(!darkMode)}}>
            <span>{darkMode ? <WbSunnyOutlinedIcon style={{fontSize:"16px"}}/> 
                    : <DarkModeOutlinedIcon style={{fontSize:"16px"}}/>}</span>
            <span>Theme</span>
          </div>
        </div>
      </div>
  )
}

export default Navbar
