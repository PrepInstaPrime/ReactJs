import React from 'react'
import { increment,decrement,reset,counterSelector } from '../slices/counterSlice';
import { useSelector,useDispatch } from 'react-redux';
export default function CounterDisplay() {
    let value=useSelector(counterSelector);
    let dispatch=useDispatch();
  return (
    <div>
        <h1>Count:{value} </h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
