import React, { useState } from 'react';

export const Login = ({login}) => {
  const [user, setUser] = useState({userName: "",password:""});
  const onLogin = () => {
    const {userName,password} = user;
    if(userName === "Suresh" && password === "1234") login();
  }
  return (
    <>
      User: <input type='text' onChange={(e)=>setUser({...user, userName:e.target.value })}></input>
      Password: <input type='password' onChange={(e)=>setUser({...user, password:e.target.value })}></input>
      <button onClick={onLogin}>Login</button>
    </>
  );
};

