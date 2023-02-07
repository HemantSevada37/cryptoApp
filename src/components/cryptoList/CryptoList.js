import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext';
import CryptoItem from '../cryptoItem/CryptoItem'
import "./CryptoList.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CryptoList = () => {
    const { cryptoData, sort, dispatch, favCurr } = useContext(DataContext);

  return (
    <div className='clContainer'>
        {cryptoData && <table className='clWrapper'>
                <thead>
                    <tr className='clHeader'>
                        <th className='rank taCenter'>Rank</th>
                        <th className='name taLeft'>Name</th>

                        <th className='price taRight' 
                            onClick={()=>{dispatch({value: "price", dir: !(sort.dir)})}}
                            >Price {sort.value === "price" && 
                            <span><ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/></span>
                            }
                        </th>

                        <th className='mCap taRight'
                            onClick={()=>{dispatch({value: "marketCap", dir: !(sort.dir)})}}
                            >MarketCap {sort.value === "marketCap" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>

                        <th className='vol taRight'
                            onClick={()=>{dispatch({value: "volume", dir: !(sort.dir)})}}
                            >Volume {sort.value === "volume" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>
                        <th className='supply taRight'
                            onClick={()=>{dispatch({value: "supply", dir: !(sort.dir)})}}
                            >Supply {sort.value === "supply" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>
                        <th className='ch1h taRight'
                            onClick={()=>{dispatch({value: "priceChange1h", dir: !(sort.dir)})}}
                            >Change(1h) {sort.value === "priceChange1h" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>

                        <th className='ch1d taRight'
                            onClick={()=>{dispatch({value: "priceChange1d", dir: !(sort.dir)})}}
                            >Change(1d) {sort.value === "priceChange1d" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>

                        <th className='ch1w taRight'
                        onClick={()=>{dispatch({value: "priceChange1w", dir: !(sort.dir)})}}
                            >Change(1w) {sort.value === "priceChange1w" && 
                            <ArrowDropDownIcon style={{transform: sort.dir ? 'rotate(180deg)' : ""}}/>}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.map((element, i)=>{
                        if(favCurr.includes(element.id))
                            return <CryptoItem key={i} element={element} fav={true}/>
                    })}
                    {cryptoData.map((element, i)=>{
                        if(!favCurr.includes(element.id))
                            return <CryptoItem key={i} element={element} fav={false}/>
                    })}
                </tbody>
            </table>}
    </div>
  )
}

export default CryptoList
