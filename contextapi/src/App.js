import React, { useEffect, useState } from 'react'
import myContext from './store/MyContext'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/authentication/SignUp'
import SignIn from './components/authentication/SignIn'
export default function App() {
  const [login, setLogin]=useState(false);
  useEffect(()=>{
    let check=JSON.parse(localStorage.getItem('login'))||false;
    setLogin(check);
  },[])

  return (
    <div>
      <myContext.Provider value={{login}}>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
       </Routes>
      </myContext.Provider>
    </div>
  )
}
