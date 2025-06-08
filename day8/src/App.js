import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import axios from 'axios'
export default function App() {
  // fetch api : this is default api from the browser
  let [data, setData]=useState([]);
  let [err, setErr]=useState("");
  // useEffect(()=>{
  //     fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>setData(data.products)).catch((err)=>console.log(err))
  // },[])
  // Axios: this is a js library 
  // useEffect(()=>{
  //     axios("https://dummyjson.com/products").then((res)=>setData(res.data.products)).catch(err=>console.log(err));
  // },[])

  // using async and await 
  useEffect(()=>{
    let getData= async ()=>{
      let res=await fetch('https://dummyjson.com/product2');
      if(!res.ok){
        setErr("this is system error")
        return;
      }
      let data= await res.json()
      console.log(data);
      setData(data.products)
    }
    getData();
  },[])

  return (
    <div>
      {err&&<p>{err}</p>}
      {data.map((product,idx)=>{
        return(
          <div key={idx} className={styles.card} >
            <p>{product.title}</p>
            <img src={product.images[0]}/>
            <p>{product.description}</p>
          </div>
          
        )
      })}
    </div>
  )
}
