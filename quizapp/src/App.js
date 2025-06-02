import React from 'react'
import {Routes, Route} from 'react-router-dom';
import TestInfo from './components/test-info/TestInfo'
import StartTest from './components/start-test/StartTest';
export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<TestInfo/>}></Route>
      <Route path='/start-test' element={<StartTest/>}/>
    </Routes>
    </>
  )
}
