import { useState } from 'react'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Navbar from './components/Navbar'
import About from './components/About'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const pathname = location.pathname
  const nonavbar = pathname === '/register' || pathname === '/'

  const withoutnavbar =
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>

  const withnavbar =
    <Navbar content={
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    } />

  return (
    <>
      {
        nonavbar ? withoutnavbar : withnavbar
      }
    </>
  )
}

export default App
