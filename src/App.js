

import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/themeContext';
import Home from './pages/home/Home';


function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Home />
    </div>
  );
}

export default App;
