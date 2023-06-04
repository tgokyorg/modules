import React, { useState } from 'react';
import axios from 'axios';


const LoginSignUpApp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [ productData, setProductData] = useState(null);

  const handleSignUp = async  () => {
    try {
      const response = await axios.post('https://dummyjson.com/products/1', {
        username,
        password
      });
      // assuming the api returns a success message or merge 

      const user = response.data;

      alert('sign up successful');
      setLoggedIn(true);
    } catch (error) {
      console.error('Error signing up', error);
      alert('Error signing up, please try again');
    }
  };


  const handleLogin = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/1');
      const apiProductData = response.data;

      // check if the title or price matches the API DATA
      if (
        apiProductData.thumbnail ===  'https://i.dummyjson.com/data/products/1/thumbnail.jpg' ||
        apiProductData.description === 'An apple mobile which is nothing like apple'
      )
    {
    setProductData(apiProductData);
    setLoggedIn(true);
    alert('Yay you rock! you know the price ');
  } else {
    alert('Invalid ! you dont know shit, try again');
  }
} catch (error) {
  console.error('Error Fetching product data', error);
}
  };

  const renderLoginForm = () => (
    <div>
      <h2>please login</h2>
      <input
      type="text"
      placeholder="Username"
      value={username}
      onChange ={(e) => setUsername(e.target.value)}
      />
        <input
      type="password"
      placeholder="Password"
      value={password}
      onChange ={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      </div>
  );

  const renderSignUpForm = () => (
    <div>
      <h2>Sign renderSignUpForm</h2>
      <input
      type="text"
      placeholder="Username"
      value={username}
      onChange ={(e) => setUsername(e.target.value)}
      />
        <input
      type="password"
      placeholder="Password"
      value={password}
      onChange ={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      </div>
  );

  const renderProductScreen = () => {

    return (
      <div>
        <h1>Welcome , {username} ! </h1>
        <h2> Product Details:</h2>
        <img src={productData.thumbnail} alt="pictures" />
        <p>Price: {productData.description}</p>

      </div>
    );
  };
  
return (
 <div>    
  {loggedIn ? (
    renderProductScreen()
  ): (
    <div>
      {renderLoginForm()}
      {renderSignUpForm()}
      </div>
  )}

 </div>
);

}




export default LoginSignUpApp;