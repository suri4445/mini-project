import React from 'react'
import './Header.css';

export const Header = () => {
  const logout = () => {
    sessionStorage.setItem('isLoggedIn', false);
    window.location.reload();
  }
  return (
    <div className="Title">
      <span></span>
      <h1 className="Title-Subtitle">Welcome To my workspace</h1>
      <button style={{padding:'7px'}} onClick={logout}>Logout</button>
    </div>
  )
}

