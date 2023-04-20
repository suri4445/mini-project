import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './SideNavbar';
import Dashboard from './Components/Dashboard.jsx';
import {About} from './Components/About.jsx';
import { Header } from './Components/Header';

export const Layout = () => {
  return (
    <BrowserRouter>
    <Header />
      <Sidebar id='Sidebar' style={{position: 'fixed', top: 0}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};
