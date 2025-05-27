import React, { useEffect, useRef, useState } from 'react'
import style from './App.module.css';
export default function App() {
  let [wishes, setWishes]=useState([]);
  let newwish= useRef("");
  useEffect(()=>{
    let storedData= JSON.parse(localStorage.getItem("wishArr"))||[];
    setWishes(storedData);
  },[])
  let hadleSubmit=(e)=>{
    let data= newwish.current.value;
    if(data===""){
      alert("Enter some value")
      return;
    }
    let totalwish=[...wishes,data];
    localStorage.setItem("wishArr",JSON.stringify(totalwish));
    newwish.current.value="";
  }
  let handleDelete=(idx)=>{
    let updatedData=wishes.filter((val,index)=>index!==idx);
    localStorage.setItem("wishArr",JSON.stringify(updatedData));
    setWishes(updatedData);
  }
  return (
    <>
        <div className={style.userdata}>
            <h1 className={style.title}>WISH LIST</h1>
            <form className={style.data} onSubmit={hadleSubmit}>
              <label htmlFor='wish'>Wish : </label>
              <input type='text' id='wish' placeholder='Enter you wish...' autoFocus ref={newwish}/>
              <button className={style.subtn}>Submit</button>
            </form>
            <div className={style.list}>
              <ul>
                {
                  wishes.length>=1?wishes.map((val,idx)=>{
                     return( <li key={idx}>{val} <button className={style.delbtn} onClick={()=>handleDelete(idx)}>Delete</button></li>)
                  }):"Your Wish List is Empty"
                }
              </ul>
            </div>
        </div>
    </>
  )
}
