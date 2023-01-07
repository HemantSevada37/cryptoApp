import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider =({children})=>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("cryptoDarkMode")) || false
      );

      useEffect(() => {
        localStorage.setItem("cryptoDarkMode", darkMode);
        console.log(darkMode);
      }, [darkMode]);
    

    return <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          {children}
    </ThemeContext.Provider>
}