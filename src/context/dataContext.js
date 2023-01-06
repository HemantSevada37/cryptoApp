import { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();


export const DataContextProvider =({children})=>{
    const [cryptoData, setCryptoData] = useState();
    const [limit, setLimit] = useState(10);
    const [currency, setCurrency] = useState("INR");
    const [favCurr, setFavCurr] = useState(JSON.parse(localStorage.getItem("cryptoFavList")) || []);
    // console.log(favCurr);

    const sortFun = (value, dir)=>{
      if(dir){
        const sortedData = [...cryptoData].sort((a, b) => {
          // console.log(a[value]);
          return a[value] < b[value] ? 1 : -1;
        });
        setCryptoData(sortedData);
    
      }else{
        const sortedData = [...cryptoData].sort((a, b) => {
          // console.log(a[value]);
          return a[value] > b[value] ? 1 : -1;
        });
        setCryptoData(sortedData);
      }
    }

    const reducer = (state, action) =>{     
      let tempDir;
      if(state.value === action.value){
        tempDir = !state.dir;
      }else{
        tempDir = true;
      }
      switch(action.value){       
          case "price":    
              sortFun("price", tempDir);     
              return {value: action.value, dir: tempDir};       
          case "marketCap":         
              sortFun("marketCap", tempDir);     
              return {value: action.value, dir: tempDir};         
          case "priceChange1h":         
              sortFun("priceChange1h", tempDir);     
              return {value: action.value, dir: tempDir};  
          case "priceChange1d":         
              sortFun("priceChange1d", tempDir);     
              return {value: action.value, dir: tempDir};       
          default:         
              return state;  
          } 
      } 

      const [sort, dispatch]= useReducer(reducer, {value: "", dir: ""} );



    useEffect(()=>{
        let url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=${currency}`;
        fetch(url).then(r=>r.json())
            .then(res=>{
                console.log("res is ", res.coins)
                setCryptoData(res?.coins);
            });

    },[limit, currency])


    return <DataContext.Provider value={{cryptoData, limit, setLimit, 
              sort, dispatch, favCurr, setFavCurr, currency, setCurrency}}>
          {children}
    </DataContext.Provider>
}




const tempObj = {
  "coins": [
    {
      "id": "bitcoin",
      "icon": "https://static.coinstats.app/coins/1650455588819.png",
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": 1,
      "price": 1388114.0931419872,
      "priceBtc": 1,
      "volume": 1124363888663.569,
      "marketCap": 26726471126537.19,
      "availableSupply": 19253800,
      "totalSupply": 21000000,
      "priceChange1h": -0.03,
      "priceChange1d": -0.17,
      "priceChange1w": 1.62,
      "websiteUrl": "http://www.bitcoin.org",
      "twitterUrl": "https://twitter.com/bitcoin",
      "exp": [
        "https://blockchair.com/bitcoin/",
        "https://btc.com/",
        "https://btc.tokenview.io/"
      ]
    },
    {
      "id": "ethereum",
      "icon": "https://static.coinstats.app/coins/1650455629727.png",
      "name": "Ethereum",
      "symbol": "ETH",
      "rank": 2,
      "price": 103209.9553625235,
      "priceBtc": 0.07435591956078633,
      "volume": 872889514590.346,
      "marketCap": 12439365314103.098,
      "availableSupply": 120524858.967432,
      "totalSupply": 120524858.967432,
      "priceChange1h": 0.07,
      "priceChange1d": -0.13,
      "priceChange1w": 4.64,
      "websiteUrl": "https://www.ethereum.org/",
      "twitterUrl": "https://twitter.com/ethereum",
      "contractAddress": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      "decimals": 18,
      "exp": [
        "https://etherscan.io/",
        "https://ethplorer.io/",
        "https://blockchair.com/ethereum",
        "https://eth.tokenview.io/"
      ]
    },
    {
      "id": "tether",
      "icon": "https://static.coinstats.app/coins/1650455771843.png",
      "name": "Tether",
      "symbol": "USDT",
      "rank": 3,
      "price": 83.10353291332288,
      "priceBtc": 0.00005987057727925279,
      "volume": 2618817029089.006,
      "marketCap": 5507478086018.337,
      "availableSupply": 66272490385.7294,
      "totalSupply": 66272490385.7294,
      "priceChange1h": 0.05,
      "priceChange1d": 0.08,
      "priceChange1w": 0.7,
      "websiteUrl": "https://tether.to/",
      "twitterUrl": "https://twitter.com/Tether_to",
      "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "decimals": 18,
      "exp": [
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://snowtrace.io/token/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
        "https://optimistic.etherscan.io/token/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
        "https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        "https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955",
        "https://evmexplorer.velas.com/token/0xb44a9b6905af7c801311e8f4e76932ee959c663c",
        "https://cronos-explorer.crypto.org/token/0x66e428c3f67a68878562e79a0234c1f83c208770",
        "https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token",
        "https://blockchair.com/ethereum/erc-20/token/0xdac17f958d2ee523a2206206994597c13d831ec7"
      ]
    },
    {
      "id": "usd-coin",
      "icon": "https://static.coinstats.app/coins/1650455825065.png",
      "name": "USD Coin",
      "symbol": "USDC",
      "rank": 4,
      "price": 82.69907681191113,
      "priceBtc": 0.000059574703676314973,
      "volume": 254815923332.7783,
      "marketCap": 3623211799628.5654,
      "availableSupply": 43801213130.2274,
      "totalSupply": 43807203869.347,
      "priceChange1h": -0.02,
      "priceChange1d": -0.1,
      "priceChange1w": -0.03,
      "websiteUrl": "https://www.circle.com/en/usdc",
      "twitterUrl": "https://twitter.com/circlepay",
      "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "decimals": 18,
      "exp": [
        "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "https://stepscan.io/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
        "https://nearblocks.io/address/a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near#transaction",
        "https://blockscout.com/xdai/mainnet/token/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83/token-transfers",
        "https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "https://ftmscan.com/address/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        "https://arbiscan.io/token/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
        "https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "https://evmexplorer.velas.com/token/0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844"
      ]
    },
    {
      "id": "binance-coin",
      "icon": "https://static.coinstats.app/coins/1666608145347.png",
      "name": "BNB",
      "symbol": "BNB",
      "rank": 5,
      "price": 21203.645114047915,
      "priceBtc": 0.015275818354515934,
      "volume": 50403109189.04035,
      "marketCap": 3462067025349.925,
      "availableSupply": 163276974.63,
      "totalSupply": 163276974.63,
      "priceChange1h": -0.07,
      "priceChange1d": -0.11,
      "priceChange1w": 5.03,
      "websiteUrl": "https://www.binance.com/",
      "twitterUrl": "https://twitter.com/binance",
      "contractAddress": "BNB",
      "decimals": 18,
      "exp": [
        "https://binance.mintscan.io/",
        "https://explorer.binance.org/",
        "https://bscscan.com"
      ]
    },
    {
      "id": "ripple",
      "icon": "https://static.coinstats.app/coins/XRPdnqGJ.png",
      "name": "XRP",
      "symbol": "XRP",
      "rank": 6,
      "price": 27.78872048967639,
      "priceBtc": 0.000020019927904918262,
      "volume": 91278567884.45882,
      "marketCap": 1405102411049.3948,
      "availableSupply": 50563767827,
      "totalSupply": 99989171756,
      "priceChange1h": 0.23,
      "priceChange1d": -1.51,
      "priceChange1w": -0.4,
      "websiteUrl": "https://ripple.com/currency/",
      "twitterUrl": "https://twitter.com/Ripple",
      "contractAddress": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
      "decimals": 18,
      "exp": [
        "https://blockchair.com/ripple",
        "https://xrpcharts.ripple.com",
        "https://xrpscan.com/",
        "https://bithomp.com/explorer/"
      ]
    },
    {
      "id": "binance-usd",
      "icon": "https://static.coinstats.app/coins/binance-usdcP4.png",
      "name": "Binance USD",
      "symbol": "BUSD",
      "rank": 7,
      "price": 82.69907681191113,
      "priceBtc": 0.000059574703676314973,
      "volume": 393942489775.13995,
      "marketCap": 1379822887077.6716,
      "availableSupply": 16676570369.33,
      "totalSupply": 16676570369.33,
      "priceChange1h": 0.01,
      "priceChange1d": -0.04,
      "priceChange1w": -0.03,
      "websiteUrl": "https://www.paxos.com/busd/",
      "twitterUrl": "https://twitter.com/PaxosGlobal",
      "contractAddress": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      "decimals": 18,
      "exp": [
        "https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "https://ethplorer.io/address/0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        "https://explorer.binance.org/asset/BUSD-BD1",
        "https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "https://polygonscan.com/token/0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
        "https://snowtrace.io/token/0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
        "https://moonriver.moonscan.io/token/0x5d9ab5522c64e1f6ef5e3627eccc093f56167818",
        "https://cronos.org/explorer/token/0xC74D59A548ecf7fc1754bb7810D716E9Ac3e3AE5/token-transfers",
        "https://explorer.fuse.io/token/0x6a5f6a8121592becd6747a38d67451b310f7f156",
        "https://scan.meter.io/address/0x24aa189dfaa76c671c279262f94434770f557c35"
      ]
    },
    {
      "id": "dogecoin",
      "icon": "https://static.coinstats.app/coins/DogecoinIZai5.png",
      "name": "Dogecoin",
      "symbol": "DOGE",
      "rank": 8,
      "price": 5.863395204661958,
      "priceBtc": 0.000004224186907741388,
      "volume": 61926128980.50864,
      "marketCap": 806858685310.3066,
      "availableSupply": 137609466383.705,
      "totalSupply": 0,
      "priceChange1h": 0.29,
      "priceChange1d": -3.01,
      "priceChange1w": 4.05,
      "websiteUrl": "http://dogecoin.com/",
      "redditUrl": "https://www.reddit.com/r/dogecoin",
      "twitterUrl": "https://twitter.com/dogecoin",
      "contractAddress": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
      "decimals": 18,
      "exp": [
        "https://blockchair.com/dogecoin",
        "https://doge.tokenview.io/",
        "http://dogechain.info/chain/Dogecoin"
      ]
    },
    {
      "id": "cardano",
      "icon": "https://static.coinstats.app/coins/CardanojXddT.png",
      "name": "Cardano",
      "symbol": "ADA",
      "rank": 9,
      "price": 22.484620180965745,
      "priceBtc": 0.00001619867583178697,
      "volume": 47571962596.92861,
      "marketCap": 787973982603.8545,
      "availableSupply": 35045020830.3234,
      "totalSupply": 45000000000,
      "priceChange1h": 0.3,
      "priceChange1d": 2.5,
      "priceChange1w": 12.42,
      "websiteUrl": "https://www.cardano.org/en/home/",
      "twitterUrl": "https://twitter.com/Cardano_CF",
      "contractAddress": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
      "decimals": 18,
      "exp": [
        "https://cardanoscan.io/",
        "https://cardanoexplorer.com/",
        "https://blockchair.com/cardano",
        "https://adaex.org/",
        "https://adastat.net/",
        "https://ada.tokenview.io/"
      ]
    },
    {
      "id": "matic-network",
      "icon": "https://static.coinstats.app/coins/1660577011553.png",
      "name": "Polygon",
      "symbol": "MATIC",
      "rank": 10,
      "price": 64.27435682084936,
      "priceBtc": 0.000046305406186889196,
      "volume": 36989709099.915474,
      "marketCap": 576249758025.5078,
      "availableSupply": 8965469069.28493,
      "totalSupply": 10000000000,
      "priceChange1h": 0.18,
      "priceChange1d": -2.69,
      "priceChange1w": 2.41,
      "websiteUrl": "https://polygon.technology/",
      "twitterUrl": "https://twitter.com/0xPolygon",
      "contractAddress": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      "decimals": 18,
      "exp": [
        "https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
        "https://ethplorer.io/address/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
        "https://polygonscan.com/token/0x0000000000000000000000000000000000001010",
        "https://bscscan.com/token/0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        "https://moonriver.moonscan.io/token/0x682f81e57eaa716504090c3ecba8595fb54561d8",
        "https://moonbeam.moonscan.io/token/0x3405A1bd46B85c5C029483FbECf2F3E611026e45",
        "https://explorer.energi.network/token/0x98997e1651919faeacee7b96afbb3dfd96cb6036"
      ]
    }
  ]
}