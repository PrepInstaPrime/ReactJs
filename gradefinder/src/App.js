import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Info from './components/info/Info';
import SubjectInfo from './components/subjectInfo/SubjectInfo';
import Result from './components/result/Result';
import Error from './components/error/Error';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/subjectinfo' element={<SubjectInfo/>}/>
        <Route path='/subjectinfo/result' element={<Result/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}
