import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext';
import CryptoItem from '../cryptoItem/CryptoItem'
import "./CryptoList.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CryptoList = () => {
    const { cryptoData, sort, dispatch, favCurr } = useContext(DataContext);
    console.log(cryptoData?.coins);

  return (
    <div className='clContainer'>
        {cryptoData &&
            <table className='clWrapper'>
                <tr className='clHeader'>
                    <th className='rank taCenter'>Rank</th>
                    <th className='name taLeft'>Name</th>

                    <th className='price taRight' 
                        onClick={()=>{dispatch({value: "price"})}}
                        >Price {sort.value === "price" && 
                        <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                    </th>

                    <th className='mCap taRight'
                        onClick={()=>{dispatch({value: "marketCap"})}}
                        >MarketCap {sort.value === "marketCap" && 
                        <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                    </th>

                    <th className='vol taRight'>Volume</th>
                    <th className='supply taRight'>Supply</th>
                    <th className='ch1h taRight'
                        onClick={()=>{dispatch({value: "priceChange1h"})}}
                        >Change(1h) {sort.value === "priceChange1h" && 
                        <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                    </th>

                    <th className='ch1d taRight'
                        onClick={()=>{dispatch({value: "priceChange1d"})}}
                        >Change(1d) {sort.value === "priceChange1d" && 
                        <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                    </th>

                    <th className='ch1w taRight'>Change(1w)</th>
                </tr>
            {cryptoData.map((element, i)=>{
                if(favCurr.includes(element.id))
                    return <CryptoItem key={i} element={element} fav={true}/>
            })}
            {cryptoData.map((element, i)=>{
                if(!favCurr.includes(element.id))
                    return <CryptoItem key={i} element={element} fav={false}/>
            })}
            
            </table>
        }
    </div>
  )
}

export default CryptoList
