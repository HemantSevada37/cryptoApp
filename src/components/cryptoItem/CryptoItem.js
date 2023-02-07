import React, { useContext } from 'react'
import "./CryptoItem.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { DataContext } from '../../context/dataContext';

const CryptoItem = ({element, fav}) => {
    const { favCurr, setFavCurr, currency } = useContext(DataContext);

    const {id, icon, name, symbol, rank, price, marketCap, volume, 
        totalSupply:supply, priceChange1h: pc1h, priceChange1d: pc1d,
         priceChange1w: pc1w} = element;

    const handleLargeValue = (value)=>{
        let symbol = "₹";
        if(currency === "INR"){
            symbol = "₹";
        }else if(currency === "USD"){
            symbol = "$";
        }else if(currency === "EUR"){
            symbol = "€";
        }
        // console.log(value, id, name);

        if(value === null) return `${symbol}00.0`;

        if(value > 1000000000){
            value = value/1000000000;
            let arr = value.toString().split(".");
            if(arr[0].length > 3){
                arr[0] = arr[0].slice(0, -3) + "," + arr[0].slice(-3, arr[0].length);
            }
            if(arr[1]) arr[1] = arr[1].slice(0, 2);
            else arr[1] = "00";
            return `${symbol}${arr[0]}.${arr[1]}b`
        }else if(value > 1000000){
            value = value/1000000;
            let arr = value.toString().split(".");
            if(arr[0].length > 3){
                arr[0] = arr[0].slice(0, -3) + "," + arr[0].slice(-3, arr[0].length);
            }
            if(arr[1]) arr[1] = arr[1].slice(0, 2);
            else arr[1] = "00";
            return `${symbol}${arr[0]}.${arr[1]}m`
        }else{
            let arr = value.toString().split(".");
            if(arr[0].length > 3){
                arr[0] = arr[0].slice(0, -3) + "," + arr[0].slice(-3, arr[0].length);
            }
            if(arr[1]) arr[1] = arr[1].slice(0, 2);
            else arr[1] = "00";
            return `${symbol}${arr[0]}.${arr[1]}`
        }
    }

    const addFav = ()=>{
        if(favCurr.length < 3){
            let tempList = [...favCurr, id]
            setFavCurr(tempList);
            localStorage.setItem("cryptoFavList", JSON.stringify(tempList));
        }
    }
    const removeFav = ()=>{
        let tempList = favCurr.filter((ele)=>ele!==id);
        setFavCurr(tempList);
        localStorage.setItem("cryptoFavList", JSON.stringify(tempList));
    }

  return (
    <tr className='ciContainer'>
            <td className='rank taCenter'>{rank}</td>
            <td className='name taLeft'>
                <div className='nameLeft'>
                    <img src={icon} />
                </div>
                <div className='nameRight'>
                    <span className='nameUp'>{name}</span>
                    <span className='nameDown'>{symbol}</span>
                    <span className={fav ? "nameFav" : "nameFav notFavItem"}>
                        {fav ? <FavoriteOutlinedIcon onClick={()=>{removeFav()}}/>
                            : <FavoriteBorderOutlinedIcon onClick={()=>{addFav()}}/>}
                    </span>
                </div>
            </td>
            <td className='price taRight'>{handleLargeValue(price)}</td>
            <td className='mCap taRight'>{handleLargeValue(marketCap)}</td>
            <td className='vol taRight'>{handleLargeValue(volume)}</td>
            <td className='supply taRight'>{handleLargeValue(supply)}</td>
            <td className='ch1h taRight' style={{color: pc1h>=0 ? "#00ED64" : "red"}}>{pc1h}%</td>
            <td className='ch1d taRight' style={{color: pc1d>=0 ? "#00ED64" : "red"}}>{pc1d}%</td>
            <td className='ch1w taRight' style={{color: pc1w>=0 ? "#00ED64" : "red"}}>{pc1w}%</td>
    </tr>
  )
}

export default CryptoItem
