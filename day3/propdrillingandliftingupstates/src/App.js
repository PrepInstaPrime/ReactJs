import React, { useState } from 'react'
import Child from './components/Child';

export default function App() {
  let [price,setPrice]=useState(100);
  return (
    <>
    <p>the price of book {price}</p>
    <Child price={price} setPrice={setPrice}/>
    </>
  )
}
