import { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();


export const DataContextProvider =({children})=>{
    const [cryptoData, setCryptoData] = useState();
    const [limit, setLimit] = useState(10);
    const [currency, setCurrency] = useState("INR");
    const [favCurr, setFavCurr] = useState(JSON.parse(localStorage.getItem("cryptoFavList")) || []);

    const sortFun = (value, dir)=>{
      if(dir){
        const sortedData = [...cryptoData].sort((a, b) => {
          return a[value] < b[value] ? 1 : -1;
        });
        setCryptoData(sortedData);
    
      }else{
        const sortedData = [...cryptoData].sort((a, b) => {
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
                setCryptoData(res?.coins);
            });
    },[limit, currency])


    return <DataContext.Provider value={{cryptoData, limit, setLimit, 
              sort, dispatch, favCurr, setFavCurr, currency, setCurrency}}>
          {children}
    </DataContext.Provider>
}


