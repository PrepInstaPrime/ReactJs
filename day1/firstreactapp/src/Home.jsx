import React from 'react'
// import './Home.css'
import style from './Home.module.css';
export default function Home({author,year}) {
    // this props is an object here which contains all the properties passed in the component 
    // form app.js or from any other component
  return (
    <>
        <h1 className={style.title}>Hello this is first App </h1>
        <h2 id={style.detail}>Created by {author} in {year}</h2>
        <p>this is cool starting </p>
    </>
  )
}
