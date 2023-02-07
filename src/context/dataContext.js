import { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();


export const DataContextProvider =({children})=>{
    const [cryptoData, setCryptoData] = useState();
    const [limit, setLimit] = useState(20);
    const [currency, setCurrency] = useState("INR");
    const [favCurr, setFavCurr] = useState(JSON.parse(localStorage.getItem("cryptoFavList")) || []);
    // console.log(cryptoData);

    const sortFun = (value, dir)=>{
      // if(value === ""){
      //   return;
      // }
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
      // let tempDir;
      // if(state.value === action.value){
      //   tempDir = !state.dir;
      // }else{
      //   tempDir = true;
      // }
      let tempDir = action.dir;
      switch(action.value){       
          case "price":    
              sortFun("price", tempDir);     
              return {value: action.value, dir: tempDir};       
          case "marketCap":         
              sortFun("marketCap", tempDir);     
              return {value: action.value, dir: tempDir};
          case "volume":         
              sortFun("volume", tempDir);     
              return {value: action.value, dir: tempDir};
          case "supply":         
              sortFun("supply", tempDir);     
              return {value: action.value, dir: tempDir};         
          case "priceChange1h":         
              sortFun("priceChange1h", tempDir);     
              return {value: action.value, dir: tempDir};  
          case "priceChange1d":         
              sortFun("priceChange1d", tempDir);     
              return {value: action.value, dir: tempDir};    
          case "priceChange1w":         
              sortFun("priceChange1w", tempDir);     
              return {value: action.value, dir: tempDir}; 
          // case "initial":
          //   sortFun("", tempDir);
          //     return {value:"", dir:""};   
          default:         
              return state;  
        } 
      } 

    const [sort, dispatch]= useReducer(reducer, {value: "", dir: false} );

    
    useEffect(()=>{
        let url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=${currency}`;
        fetch(url).then(r=>r.json())
            .then(res=>{
                setCryptoData(res?.coins);
                dispatch({...sort});
            });
    },[limit, currency])


    return <DataContext.Provider value={{cryptoData, limit, setLimit, 
              sort, dispatch, favCurr, setFavCurr, currency, setCurrency}}>
          {children}
    </DataContext.Provider>
}


