import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import lightBulbImage from '../src/img/light.png';
import DarkBulbImage from '../src/img/dark.png';


const ThemeContext = React.createContext('light');

// a component that uses the context 
function Button(props) { 

  const theme = React.useContext(ThemeContext);

  return (
    <button className={`btn btn-${theme}`}>
      {props.children}
    </button>
  );
  }

  function App () {
   
    const [theme, setTheme] = useState('light');
    const [ bulbImage, setBulbImage] = useState(DarkBulbImage);

    useEffect(() => {
      document.body.style.background = theme === 'light' ? '#f0f0f0' : '#2d2d2d';

      if ( theme === 'light') {
        setBulbImage(DarkBulbImage);
      } else {
        setBulbImage(lightBulbImage);
      }

      return () => {
        document.body.style.background = null;
      };
    }, [theme]);
  

  


return (
  <ThemeContext.Provider value={theme}>
    <div>
    <p style ={{ color: theme === 'light' ? 'black' : 'white'}}>HDHDHDBHDB</p>
   
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch button to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <img src={bulbImage} alt="Bulb" width={100} height={100}/>
    </div>
  </ThemeContext.Provider>
);

  }

  export default App;