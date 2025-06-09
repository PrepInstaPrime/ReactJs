import React from 'react'
import { counter } from '../atoms/counter'
import {counterSelector} from '../selectors/counterSelector'
import { useRecoilValue, useRecoilState } from 'recoil'
export default function CounterDisplay() {
    const [count, setCount]=useRecoilState(counter);
    let calculatedValue=useRecoilValue(counterSelector);
    // recoil is not compatible with react version 19, to use it update react in your app to 18.2.0 in package.json
    // example:  "react": "^18.2.0",
    // "react-dom": "^18.2.0",
  return (
    <div>
        <h1>Count: {count}</h1>
        <p> twice of count: {calculatedValue}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}
