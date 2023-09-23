import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Netflix from './pages/Netflix';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<SignUpPage/>} />
      <Route exact path="/Netflix" element={<Netflix />} />
    </Routes>
  </BrowserRouter> 
    
  )
}

export default App
