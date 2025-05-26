import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function App() {
  let [seconds, setSeconds] = useState(-1);
  // useEffect(()=>{
  //   console.log(seconds)
  //   setTimeout(()=>{
  //     seconds++;
  //     setSeconds(seconds);
  //   },1000)
  // },[seconds])


  // let time =useCallback(() => {
  //     console.log(seconds)
  //     setTimeout(() => {
  //       seconds++;
  //       setSeconds(seconds);
  //     }, 1000)
  //   }, [seconds])
  // time();

  let [count,setCount]=useState(0);
  let res=useMemo(()=>{
    let fact=1;
    function calculateFact(){
      for(let i=1;i<=5;i++){
        fact=fact*i;
      }
    }
    calculateFact();
    return fact;
  },[])
  console.log(res)

  return (
    <>
      <input type='text'></input>
      <p>You are on this website from last {seconds} seconds</p>
      {/* <button onClick={time}>submit</button> */}
    </>
  )
}
