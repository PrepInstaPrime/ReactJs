import React, { useRef } from 'react'
import { useState } from 'react';
export default function App() {
  // let count = 0;
  // using useState hook
  let [count,setCount]=useState(0);
  // using useRef hook
  let username=useRef("");
  let name="";
  let increaseCount = () => {
    count++;
    setCount(count);
    console.log(count);
  }
  let handleChange=(e)=>{
      console.log(e.target.value)
  }
  let handleSubmit=(e)=>{
      name=username.current.value;
      console.log(name)
      e.preventDefault();
  }
  return (
    <>
      <div>count: {count}</div>
      <button onClick={increaseCount}>increase</button>
      <div className='userdata'>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        {/* <input type='text' id='name' placeholder='Enter your name: ' onChange={handleChange} /> */}
        <input type='text' id='name' placeholder='Enter your name: ' ref={username}/>
        <button>Submit</button>
      </form>
      <p>{name}</p>
      </div>

    </>

  )
}
