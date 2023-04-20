import React, { useState } from 'react';
import {Login} from './Components/Login'
import {Layout} from "./Layout";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn((prev) => !prev)
  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Login login={login}/>}
    </div>
  );
}

export default App;
