import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useState,useEffect } from 'react';
import AuthContext from './components/store/AuthContext';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserInfo=localStorage.getItem('isLoggedIn')
    if(storedUserInfo==='1')
    setIsLoggedIn(true)
  },[])

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn','1')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
    };

  return (

      <AuthContext.Provider value={
        {isLoggedIn:isLoggedIn,
        onLogout:logoutHandler
        }}>
      <Header />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
   
  );
}

export default App;
