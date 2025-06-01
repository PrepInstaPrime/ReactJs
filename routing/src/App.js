import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Products from './components/Products'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/' element={<Products/>}/>
        <Route path='/products/:product' element={<Products/>}/>
      </Routes>
    </>
  )
}
