import React, {useState, useEffect} from 'react';



const ThemeContext = React.createContext('light');


  
   

  function App () {
   
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
      document.body.style.background= theme === 'light' ? '#f0f0f0' : '#2d2d2d';
    }
    ) 

  


return (
  <ThemeContext.Provider value={theme}>
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch button to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
    <h2 style={{color:'red'}} >what can you see</h2>
    <h3>look more mr solomon</h3>
    <h4>i am the person behind the code</h4>
    <p>funny right?</p> 
    <p1>no it isnt funny </p1>
  </ThemeContext.Provider>
);

  }

  export default App;